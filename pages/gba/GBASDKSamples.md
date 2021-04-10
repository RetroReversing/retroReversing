---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Software Development Kit Samples
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
image: /public/images/gba/Game Boy Advance SDK Samples.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK Samples.jpg
permalink: /game-boy-advance-sdk-samples/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name:  Game Boy Advance Software Development Kit Samples
    url: #
recommend: 
- sdk
- gba
editlink: /gba/GBASDKSamples.md
---


# Blib sample (/blib_sample)
This folder contains 

File Name | Extension | Description
---|---|---
DacsTest | .c, .o | 
Data | .c, .o | 
EepromTest | .c, .o | 
FlashTest | .c, .o | 
Main | .c, .h, .o | 
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
MemDump | .c, .o | 
SramTest | .c, .o | 
blib_sample | .bin, .elf, .map | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
dummy | .c | 
gasDepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
history | .txt | 
isdwdcmd | .dat | 
isdwdsym | .dat | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="Data.c" />
  <h3>Data.c</h3><ul>
    <li><span>u16 const[16][16]</span> textPaletteData</li> 
    <li><span>u16 const[6144]</span> mychar</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">791</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="dummy.c" />
  <h3>dummy.c</h3><ul>
    <li><span>void</span> DummyFlash<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">4</div>  </div>
</div>

</section>

---
## Mylib (/blib_sample/mylib)
This folder contains 

File Name | Extension | Description
---|---|---
bg | .h | Include file for declaring 
isdwdcmd | .dat | 
isdwdsym | .dat | 
libmyfunc | .a | Static Library archive of 
myTypes | .h | Include file for declaring 
mylib | .h | Include file for declaring 
obj | .h | Include file for declaring 
stdSub | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="bg.h" />
  <h3>bg.h</h3><ul>
    <li><span>void</span> InitBg<span class="rr-func-args">()</span></li> 
    <li><span>void</span> SetBgMode<span class="rr-func-args">(u16)</span></li> 
    <li><span>u16</span> GetBgMode<span class="rr-func-args">()</span></li> 
    <li><span>void</span> SetBgxBuffer<span class="rr-func-args">(u8,u16*,u32)</span></li> 
    <li><span>void</span> SetBgxBuffRenewal<span class="rr-func-args">(u8,bool)</span></li> 
    <li><span>buffer*</span> GetBgxBuffer<span class="rr-func-args">(u8)</span></li> 
    <li><span>u16*</span> GetBgxBuffPointer<span class="rr-func-args">(u8)</span></li> 
    <li><span>u32</span> GetBgxBuffSize<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> ClearBgxBuffer<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>void</span> DmaBgxBuffer<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> DmaAllBgxBuffer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> TrmScreenDataToBgxBufferByFunc<span class="rr-func-args">(u8,void(*)(u16*,u32))</span></li> 
    <li><span>void</span> TrmScreenDataToBgxBuffer<span class="rr-func-args">(u8,u16 const*,u32)</span></li> 
    <li><span>void</span> ClearBgxScreenRect<span class="rr-func-args">(u8,u16,u8,u8)</span></li> 
    <li><span>void</span> SetFlameBuff<span class="rr-func-args">(u8,u16*)</span></li> 
    <li><span>u16*</span> GetFlameBuff<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetScreenSize<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetScreenSize<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxScreenBaseBlock<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxScreenBaseBlock<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxScreenBaseAdr<span class="rr-func-args">(u8,u32)</span></li> 
    <li><span>u32</span> GetBgxScreenBaseAdr<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetMosaicEnable<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxMosaicEnable<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxMosaicEnable<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxColorMode<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxColorMode<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxCharBaseBlock<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxCharBaseBlock<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxCharBaseAdr<span class="rr-func-args">(u8,u32)</span></li> 
    <li><span>u32</span> GetBgxCharBaseAdr<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxPriority<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxPriority<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxAreaOver<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxAreaOver<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> SetBgxPosX<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxPosX<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> RelativeScrollBgxPosX<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>void</span> SetBgxPosY<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>u16</span> GetBgxPosY<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> RelativeScrollBgxPosY<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>void</span> SetRbgxHVflip<span class="rr-func-args">(u8,bool,bool)</span></li> 
    <li><span>void</span> CalcRbgxAffineValue<span class="rr-func-args">(u8,s16,s16,u8)</span></li> 
    <li><span>void</span> CalcRbgxReferenceStartPos<span class="rr-func-args">(u8,pos_2d,pos_2d)</span></li> 
    <li><span>void</span> RotateZoomRbgx<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> RevBgxAffineValue<span class="rr-func-args">(u8,u8)</span></li> 
    <li><span>void</span> SetParagraph<span class="rr-func-args">(bool,u8,u16)</span></li> 
    <li><span>u16</span> DrawAsciiCharOnBgx<span class="rr-func-args">(u8,u16,u16,u8 const*,u8)</span></li> 
    <li><span>u16</span> DrawAsciiStringOnBgx<span class="rr-func-args">(u8,u16,u16,u8 const*)</span></li> 
    <li><span>u16</span> DrawHexOnBgx<span class="rr-func-args">(u8,u16,u16,void const*,u8)</span></li> 
    <li><span>u16</span> DrawHalfByteHexOnBgx<span class="rr-func-args">(u8,u16,u16,void const*,u8)</span></li> 
    <li><span>u16</span> DrawUIntOnBgx<span class="rr-func-args">(u8,u16,u16,void const*,u8,u8)</span></li> 
    <li><span>u16</span> DrawSIntOnBgx<span class="rr-func-args">(u8,u16,u16,void const*,u8,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">53</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">127</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="myTypes.h" />
  <h3>myTypes.h</h3><ul>
    <li><span>NULL</span> <span>0x00000000</span></li>
    <li><span>BG_PLTT_WHITE</span> <span>( 8<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_ORANGE</span> <span>( 9<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_RED</span> <span>(10<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_BLUE</span> <span>(11<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_YELLOW</span> <span>(12<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_GREEN</span> <span>(13<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>BG_PLTT_PURPLE</span> <span>(14<<BG_SC_PLTT_SHIFT)</span></li>
    <li><span>OBJ_PLTT_WHITE</span> <span>8</span></li>
    <li><span>OBJ_PLTT_ORANGE</span> <span>9</span></li>
    <li><span>OBJ_PLTT_RED</span> <span>10</span></li>
    <li><span>OBJ_PLTT_BLUE</span> <span>11</span></li>
    <li><span>OBJ_PLTT_YELLOW</span> <span>12</span></li>
    <li><span>OBJ_PLTT_GREEN</span> <span>13</span></li>
    <li><span>OBJ_PLTT_PURPLE</span> <span>14</span></li>
    <li><span>false</span> <span>0</span></li>
    <li><span>true</span> <span>1</span></li>
    <li><span>AGING_STATE_INITIAL</span> <span>0</span></li>
    <li><span>AGING_STATE_EXECUTE</span> <span>1</span></li>
    <li><span>AGING_STATE_COMPLETE</span> <span>2</span></li>
    <li><span>AGING_STATE_BREAK</span> <span>3</span></li>
    <li><span>AGING_STATE_ERROR</span> <span>4</span></li>
    <li><span>DEVICE_DACS</span> <span>0</span></li>
    <li><span>DEVICE_EEPROM</span> <span>1</span></li>
    <li><span>DEVICE_FLASH</span> <span>2</span></li>
    <li><span>DEVICE_SRAM</span> <span>3</span></li>
    <li><span>DEVICE_EMPTY</span> <span>7</span></li>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">100</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="mylib.h" />
  <h3>mylib.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">16</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="obj.h" />
  <h3>obj.h</h3><ul>
    <li><span>OBJ_V_SIZE_64</span> <span>0xc000</span></li>
    <li><span>OBJ_V_SIZE_32</span> <span>0x8000</span></li>
    <li><span>OBJ_V_SIZE_16</span> <span>0x4000</span></li>
    <li><span>OBJ_V_SIZE_8</span> <span>0x0000</span></li>
    <li><span>OBJ_COLOR_256</span> <span>0x2000</span></li>
    <li><span>OBJ_COLOR_16</span> <span>0x0000</span></li>
    <li><span>OBJ_MOSAIC_ON</span> <span>0x1000</span></li>
    <li><span>OBJ_MOSAIC_OFF</span> <span>0x0000</span></li>
    <li><span>OBJ_MODE_WINDOW</span> <span>0x0800</span></li>
    <li><span>OBJ_MODE_BLEND</span> <span>0x0400</span></li>
    <li><span>OBJ_MODE_NORMAL</span> <span>0x0000</span></li>
    <li><span>OBJ_AFFINE_X2</span> <span>0x0300</span></li>
    <li><span>OBJ_AFFINE_X1</span> <span>0x0100</span></li>
    <li><span>OBJ_AFFINE_OFF</span> <span>0x0000</span></li>
    <li><span>OBJ_Y</span> <span>0x00ff</span></li>
    <li><span>OBJ_H_SIZE_64</span> <span>0xc000</span></li>
    <li><span>OBJ_H_SIZE_32</span> <span>0x8000</span></li>
    <li><span>OBJ_H_SIZE_16</span> <span>0x4000</span></li>
    <li><span>OBJ_H_SIZE_8</span> <span>0x0000</span></li>
    <li><span>OBJ_HV_FLIP</span> <span>0x3000</span></li>
    <li><span>OBJ_V_FLIP</span> <span>0x2000</span></li>
    <li><span>OBJ_H_FLIP</span> <span>0x1000</span></li>
    <li><span>OBJ_AFFINE_NO</span> <span>0x3e00</span></li>
    <li><span>OBJ_X</span> <span>0x01ff</span></li>
    <li><span>OBJ_PLTT_NO</span> <span>0xf000</span></li>
    <li><span>OBJ_PRIORITY_1</span> <span>0x0000</span></li>
    <li><span>OBJ_PRIORITY_2</span> <span>0x0400</span></li>
    <li><span>OBJ_PRIORITY_3</span> <span>0x0800</span></li>
    <li><span>OBJ_PRIORITY_4</span> <span>0x0c00</span></li>
    <li><span>OBJ_CHAR_NO</span> <span>0x03ff</span></li>
    <li><span>void</span> SetOamBuffer<span class="rr-func-args">(u16*,u32)</span></li> 
    <li><span>void</span> DmaOamBuffer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> SetOamBufferRenewal<span class="rr-func-args">(bool)</span></li> 
    <li><span>void</span> SetCursorStatus<span class="rr-func-args">(csrDefine const*,u8)</span></li> 
    <li><span>void</span> SetCursorChar<span class="rr-func-args">(u16,u16)</span></li> 
    <li><span>void</span> DeleteCursor<span class="rr-func-args">()</span></li> 
    <li><span>u16</span> GetCurosrPosOnBg<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> CheckCursorPos<span class="rr-func-args">(u8*)</span></li> 
    <li><span>void</span> CheckCursorPosRange<span class="rr-func-args">(u8*,u8,u8)</span></li> 
    <li><span>void</span> MoveAndAnimeCursor<span class="rr-func-args">(u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">114</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="stdSub.h" />
  <h3>stdSub.h</h3><ul>
    <li><span>keyStatus</span> key</li> 
    <li><span>void</span> WaitHblank<span class="rr-func-args">()</span></li> 
    <li><span>void</span> WaitPressKey<span class="rr-func-args">(u8,u16)</span></li> 
    <li><span>void</span> SetKeyRapidEnable<span class="rr-func-args">(bool)</span></li> 
    <li><span>void</span> AddRapidKey<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> SubRapidKey<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> SetKeyRapid<span class="rr-func-args">(u16,u8,u8,u8)</span></li> 
    <li><span>void</span> ReadKeyPlus<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ReadKey<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ChangeTask<span class="rr-func-args">(u8,void(*)(u8),void(*)())</span></li> 
    <li><span>void</span> ExecuteTask<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CalcAffineValue<span class="rr-func-args">(s16,s16,u8,affine*)</span></li> 
    <li><span>u8</span> ClearWram<span class="rr-func-args">(u32,u32,u16)</span></li> 
    <li><span>u8</span> ClearVram<span class="rr-func-args">(u32,u32,u16)</span></li> 
    <li><span>u8</span> ClearOam<span class="rr-func-args">(u32,u32,u32)</span></li> 
    <li><span>u8</span> ClearPalette<span class="rr-func-args">(selObjBg,u16)</span></li> 
    <li><span>u8</span> TrmCharData<span class="rr-func-args">(selObjBg,u16 const*,u32,u8)</span></li> 
    <li><span>u8</span> TrmPaletteData<span class="rr-func-args">(selObjBg,u16 const*,u16,u16)</span></li> 
    <li><span>void</span> SetInputHexData<span class="rr-func-args">(inputHexDef const*)</span></li> 
    <li><span>u8</span> InputHexData<span class="rr-func-args">(u16*)</span></li> 
    <li><span>u8</span> SelectStrings<span class="rr-func-args">(u16*)</span></li> 
    <li><span>void</span> DrawNowSelectString<span class="rr-func-args">(u8,selStrDef const*)</span></li> 
    <li><span>u8</span> ToggleSwitch<span class="rr-func-args">(u16*)</span></li> 
    <li><span>void</span> DrawNowToggleSwitchChar<span class="rr-func-args">(u8,toggleSwDef const*)</span></li> 
    <li><span>void</span> DrawNowToggleSwitchString<span class="rr-func-args">(u8,toggleSwDef const*)</span></li> 
    <li><span>u8</span> ClearNowAllSetting<span class="rr-func-args">(u16*)</span></li> 
    <li><span>void</span> InitSetFunc<span class="rr-func-args">(u8,setFuncTable const*)</span></li> 
    <li><span>void</span> DrawNowAllSetting<span class="rr-func-args">(u16,setFuncTable const*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">27</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">131</div>  </div>
</div>

</section>

---
## Sound (/blib_sample/sound)
This folder contains 

File Name | Extension | Description
---|---|---
SoundDat | .o | 
Soundfiles | N/A | 
brassc3 | .o | 
cutgtg3 | .o | 
m4aLib | .h, .o | 
mutetpc4 | .o | 
revcym | .o | 
sawg3 | .o | 
sinec3 | .o | 
synbsc2 | .o | 
wario | .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="m4aLib.h" />
  <h3>m4aLib.h</h3><ul>
    <li><span>_M4A_LIB_VER</span> <span>105</span></li>
    <li><span>CGB1_P12</span> <span>((WaveData *)0)</span></li>
    <li><span>CGB1_P25</span> <span>((WaveData *)1)</span></li>
    <li><span>CGB1_P50</span> <span>((WaveData *)2)</span></li>
    <li><span>CGB1_P75</span> <span>((WaveData *)3)</span></li>
    <li><span>CGB2_P12</span> <span>CGB1_P12</span></li>
    <li><span>CGB2_P25</span> <span>CGB1_P25</span></li>
    <li><span>CGB2_P50</span> <span>CGB1_P50</span></li>
    <li><span>CGB2_P75</span> <span>CGB1_P75</span></li>
    <li><span>CGB4_C15</span> <span>((WaveData *)0)</span></li>
    <li><span>CGB4_C07</span> <span>((WaveData *)1)</span></li>
    <li><span>u8 const[]</span> __sound_mode_i</li> 
    <li><span>sound_mode_i</span> <span>((u32)__sound_mode_i)</span></li>
    <li><span>u8 const[]</span> __total_mplay_n</li> 
    <li><span>total_mplay_n</span> <span>((u16)__total_mplay_n)</span></li>
    <li><span>u8 const[]</span> __total_song_n</li> 
    <li><span>total_song_n</span> <span>((u16)__total_song_n)</span></li>
    <li><span>SoundArea</span> m4a_sound</li> 
    <li><span>MPlayTable const[]</span> mplay_table</li> 
    <li><span>SongTable const[]</span> song_table</li> 
    <li><span>u8[]</span> m4a_memacc_area</li> 
    <li><span>void</span> m4aSoundInit<span class="rr-func-args">()</span></li> 
    <li><span>m4aSoundMode()</span> <span>SoundMode_rev01(P1)</span></li>
    <li><span>void</span> SoundMode_rev01<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> m4aSoundMain<span class="rr-func-args">()</span></li> 
    <li><span>m4aSoundVSync()</span> <span>SoundVSync_rev01()</span></li>
    <li><span>void</span> SoundVSync_rev01<span class="rr-func-args">()</span></li> 
    <li><span>m4aSoundVSyncOff()</span> <span>SoundVSyncOff_rev01()</span></li>
    <li><span>void</span> SoundVSyncOff_rev01<span class="rr-func-args">()</span></li> 
    <li><span>m4aSoundVSyncOn()</span> <span>SoundVSyncOn_rev01()</span></li>
    <li><span>void</span> SoundVSyncOn_rev01<span class="rr-func-args">()</span></li> 
    <li><span>m4aMPlayStart()</span> <span>MPlayStart_rev01(P1,P2)</span></li>
    <li><span>void</span> MPlayStart_rev01<span class="rr-func-args">(MusicPlayerArea*,SongHeader*)</span></li> 
    <li><span>void</span> m4aSongNumStart<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> m4aSongNumStartOrChange<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> m4aSongNumStartOrContinue<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> m4aMPlayImmInit<span class="rr-func-args">(MusicPlayerArea*)</span></li> 
    <li><span>m4aMPlayStop()</span> <span>MPlayStop_rev01(P1)</span></li>
    <li><span>void</span> MPlayStop_rev01<span class="rr-func-args">(MusicPlayerArea*)</span></li> 
    <li><span>void</span> m4aSongNumStop<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> m4aMPlayAllStop<span class="rr-func-args">()</span></li> 
    <li><span>void</span> m4aMPlayContinue<span class="rr-func-args">(MusicPlayerArea*)</span></li> 
    <li><span>void</span> m4aSongNumContinue<span class="rr-func-args">(u16)</span></li> 
    <li><span>void</span> m4aMPlayAllContinue<span class="rr-func-args">()</span></li> 
    <li><span>void</span> m4aMPlayFadeOut<span class="rr-func-args">(MusicPlayerArea*,u16)</span></li> 
    <li><span>m4aMPlayTempoControl()</span> <span>MPlayTempoControl(P1,P2)</span></li>
    <li><span>void</span> MPlayTempoControl<span class="rr-func-args">(MusicPlayerArea*,u16)</span></li> 
    <li><span>m4aMPlayVolumeControl()</span> <span>MPlayVolumeControl(P1,P2,P3)</span></li>
    <li><span>void</span> MPlayVolumeControl<span class="rr-func-args">(MusicPlayerArea*,u16,u16)</span></li> 
    <li><span>m4aMPlayPitchControl()</span> <span>MPlayPitchControl(P1,P2,P3)</span></li>
    <li><span>void</span> MPlayPitchControl<span class="rr-func-args">(MusicPlayerArea*,u16,s16)</span></li> 
    <li><span>m4aMPlayPampotControl()</span> <span>MPlayPanpotControl(P1,P2,P3)</span></li>
    <li><span>m4aMPlayPanpotControl()</span> <span>MPlayPanpotControl(P1,P2,P3)</span></li>
    <li><span>void</span> MPlayPanpotControl<span class="rr-func-args">(MusicPlayerArea*,u16,s8)</span></li> 
    <li><span>m4aMPlayModDepthSet()</span> <span>MPlayModDepthSet(P1,P2,P3)</span></li>
    <li><span>void</span> MPlayModDepthSet<span class="rr-func-args">(MusicPlayerArea*,u16,u8)</span></li> 
    <li><span>m4aMPlayLFOSpeedSet()</span> <span>MPlayLFOSpeedSet(P1,P2,P3)</span></li>
    <li><span>void</span> MPlayLFOSpeedSet<span class="rr-func-args">(MusicPlayerArea*,u16,u8)</span></li> 
    <li><span>MusicPlayerArea</span> m4a_mplay000</li> 
    <li><span>MusicPlayerArea</span> m4a_mplay001</li> 
    <li><span>MusicPlayerArea</span> m4a_mplay002</li> 
    <li><span>MusicPlayerArea</span> m4a_mplay003</li> 
    <li><span>SongHeader</span> wario</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">24</div>    <div class="rr-file-stat rr-file-stats-variables">12</div>    <div class="rr-file-stat rr-file-stats-lines">134</div>  </div>
</div>

</section>

---
# Font_sample (/font_sample)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Ld937728 | .dat, .o | 
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
agb_c2s | .bat | Windows Batch file for running 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
font_sample | .bin, .elf, .map | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
readme | .txt | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">57</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> FontSpread<span class="rr-func-args">(u32,u32)</span></li> 
    <li><span>void</span> FontDisplay<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">6</div>    <div class="rr-file-stat rr-file-stats-lines">188</div>  </div>
</div>

</section>

---
## Lcfont (/font_sample/lcfont)
This folder contains 

File Name | Extension | Description
---|---|---
LCFONT4 | .ini | 
LCFont4 | .exe | 
LD937707 | .DAT | 
LD937714 | .DAT | 
LD937721 | .DAT | 
LD937728 | .DAT | 
LD937735 | .DAT | 
LD937742 | .DAT | 
LD937749 | .DAT | 
LD937756 | .DAT | 
man | .zip | 
readme | .txt | 
readme_eng | .txt | 


---
# Functional_sample (/functional_sample)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
fncsample | .bin, .elf, .map | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
libalphasm | .a | Static Library archive of 
libbg_rsm | .a | Static Library archive of 
libbmpmode | .a | Static Library archive of 
libcoleffsm | .a | Static Library archive of 
libfontprn | .a | Static Library archive of 
libobj_rsm | .a | Static Library archive of 
libswinsm | .a | Static Library archive of 
main | .c, .o | 
menu | .c, .h, .o | 
menuitem | .c, .h, .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
share | .c, .h, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">56</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="menu.c" />
  <h3>menu.c</h3><ul>
    <li><span>int</span> menu_cursor_pos</li> 
    <li><span>int</span> menu_prev_cursor_pos</li> 
    <li><span>int</span> menu_old_cursor_pos</li> 
    <li><span>int</span> menu_page</li> 
    <li><span>int</span> menu_prev_page</li> 
    <li><span>void</span> MenuInit<span class="rr-func-args">()</span></li> 
    <li><span>int</span> Menu<span class="rr-func-args">()</span></li> 
    <li><span>void</span> menu_v_sync_fnc<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_exit<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_init_param<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_to_prev_page<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_to_next_page<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_to_prev_item<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_to_next_item<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_control<span class="rr-func-args">()</span></li> 
    <li><span>int</span> menu_strlen<span class="rr-func-args">(char const*)</span></li> 
    <li><span>void</span> menu_print_expl<span class="rr-func-args">()</span></li> 
    <li><span>void</span> menu_print_title<span class="rr-func-args">()</span></li> 
    <li><span>void</span> menu_print<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">14</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">351</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="menuitem.c" />
  <h3>menuitem.c</h3><ul>
    <li><span>MenuItem const[]</span> mitem</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">81</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="share.c" />
  <h3>share.c</h3><ul>
    <li><span>s16 const[320]</span> sin_cos_table</li> 
    <li><span>void</span> ClearRamAll<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ClearWorkRam<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ClearGraphicRam<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ClearVram<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ClearOamRam<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ClearPaletteRam<span class="rr-func-args">()</span></li> 
    <li><span>s16</span> fix_mul<span class="rr-func-args">(s16,s16)</span></li> 
    <li><span>s16</span> fix_div<span class="rr-func-args">(s16,s16)</span></li> 
    <li><span>s16</span> fix_inverse<span class="rr-func-args">(s16)</span></li> 
    <li><span>vu16</span> IntrCheck</li> 
    <li><span>IntrFuncp</span> v_blank_fnc</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>IntrFuncp const[14]</span> IntrTable</li> 
    <li><span>void</span> InitVBlank<span class="rr-func-args">()</span></li> 
    <li><span>void</span> SetVBlankFunc<span class="rr-func-args">(IntrFuncp)</span></li> 
    <li><span>void</span> VBlankFunc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> dummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> V_Intr_Clear<span class="rr-func-args">()</span></li> 
    <li><span>void</span> V_Intr_Set<span class="rr-func-args">()</span></li> 
    <li><span>void</span> V_Wait<span class="rr-func-args">()</span></li> 
    <li><span>vu16</span> Cont</li> 
    <li><span>vu16</span> Trg</li> 
    <li><span>void</span> KeyInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">18</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">278</div>  </div>
</div>

</section>

---
## Alphasm (/functional_sample/alphasm)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
alexpl | .c, .o | 
alpha | .c, .o | 
alpha_data | .c, .o | 
ap_PS_hey5 | .bmp, .c, .o | 
ap_bg0 | .bmp, .c, .o | 
ap_bg1 | .bmp, .c, .o | 
ap_bg2 | .bmp, .c, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="alexpl.c" />
  <h3>alexpl.c</h3><ul>
    <li><span>char const*</span> ap_title_str</li> 
    <li><span>char const*</span> ap_expl_str0</li> 
    <li><span>char const**[]</span> ap_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">30</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="alpha.c" />
  <h3>alpha.c</h3><ul>
    <li><span>char*[4]</span> ap_eff_tbl</li> 
    <li><span>u16[1024]</span> ap_BgBak</li> 
    <li><span>OamData[128]</span> ap_OamBak</li> 
    <li><span>s16</span> ap_eff_type</li> 
    <li><span>s16</span> ap_obj_alpha</li> 
    <li><span>s16</span> ap_eva</li> 
    <li><span>s16</span> ap_evb</li> 
    <li><span>void</span> apMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ap_v_blank_intr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ap_ObjMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ap_moji_pr<span class="rr-func-args">(s16,s16,char*)</span></li> 
    <li><span>void</span> ap_suji_pr<span class="rr-func-args">(s16,s16,s32,s16)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">265</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="alpha_data.c" />
  <h3>alpha_data.c</h3><ul>
    <li><span>u32 const[1][2]</span> ap_OamData_Sample</li> 
    <li><span>u32[296]</span> ap_moji_Character</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">87</div>  </div>
</div>

</section>

---
## Background RSM (/functional_sample/bg_rsm)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
ball | .BMP, .c, .o | 
bg_map | .BMP, .c, .o | 
bg_map_map | .c, .o | 
bgexpl | .c, .o | 
bgmain | .c, .o | 
cl0 | .bmp, .c, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="bg_map_map.c" />
  <h3>bg_map_map.c</h3><ul>
    <li><span>u16 const[1024]</span> map_data_front</li> 
    <li><span>u16 const[1024]</span> map_data_back</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">74</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bgexpl.c" />
  <h3>bgexpl.c</h3><ul>
    <li><span>char const*</span> bg_title_str</li> 
    <li><span>char const*</span> bg_expl_str0</li> 
    <li><span>char const**[]</span> bg_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">34</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bgmain.c" />
  <h3>bgmain.c</h3><ul>
    <li><span>vu32[4][2]</span> bg_oam_buffer</li> 
    <li><span>vu16</span> bg_ball_anim_count</li> 
    <li><span>vu16</span> bg_ball_anim_count_change_mode</li> 
    <li><span>s16</span> bg_pos_x</li> 
    <li><span>s16</span> bg_pos_y</li> 
    <li><span>vu16</span> bg_screen_back_x</li> 
    <li><span>u16</span> bg_mosaic</li> 
    <li><span>u16</span> bg_scale_x</li> 
    <li><span>u16</span> bg_scale_y</li> 
    <li><span>u16</span> bg_rotate</li> 
    <li><span>s16</span> bg_pa</li> 
    <li><span>s16</span> bg_pb</li> 
    <li><span>s16</span> bg_pc</li> 
    <li><span>s16</span> bg_pd</li> 
    <li><span>s32</span> bg_start_x</li> 
    <li><span>s32</span> bg_start_y</li> 
    <li><span>void</span> bgMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_v_blank_intr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_init_param<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_init_oam<span class="rr-func-args">()</span></li> 
    <li><span>int</span> bg_key_control<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_create_data<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_increment_anim_count<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_exit_clear_register<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">16</div>    <div class="rr-file-stat rr-file-stats-lines">385</div>  </div>
</div>

</section>

---
## BMP mode (/functional_sample/bmpmode)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
bitmap | .c, .o | 
bmexpl | .c, .o | 
img24bit | .bmp, .c, .o | 
img24bit2 | .bmp, .c, .o | 
umiB | .bmp, .c, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="bitmap.c" />
  <h3>bitmap.c</h3><ul>
    <li><span>u8</span> bm_Bgmode</li> 
    <li><span>u32</span> Zoom</li> 
    <li><span>s32</span> start_x</li> 
    <li><span>s32</span> start_y</li> 
    <li><span>u16</span> bg2pa</li> 
    <li><span>u16</span> bg2pb</li> 
    <li><span>u16</span> bg2pc</li> 
    <li><span>u16</span> bg2pd</li> 
    <li><span>vs32</span> bg2_center_x</li> 
    <li><span>vs32</span> bg2_center_y</li> 
    <li><span>vu16</span> rotate_value</li> 
    <li><span>void</span> bm_Main<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bm_v_blank_inter<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bm_init<span class="rr-func-args">()</span></li> 
    <li><span>int</span> bm_key<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bm_mode_change<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> bm_rotate<span class="rr-func-args">(s32)</span></li> 
    <li><span>void</span> bm_Bgmode3_Test<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bm_Bgmode4_Test<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bm_Bgmode5_Test<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">202</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bmexpl.c" />
  <h3>bmexpl.c</h3><ul>
    <li><span>char const*</span> bm_title_str</li> 
    <li><span>char const*</span> bm_expl_str0</li> 
    <li><span>char const**[]</span> bm_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
</div>

</section>

---
## Coleffsm (/functional_sample/coleffsm)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
ReadMe | .txt | 
c_effect | .c, .o | 
ce_PS_hey5 | .bmp, .c, .o | 
ce_bg1 | .bmp, .c, .o | 
ce_bg3 | .bmp, .c, .o | 
ce_dat | .h | Include file for declaring 
ce_data | .c, .o | 
ceexpl | .c, .o | 
col | .ACT | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="c_effect.c" />
  <h3>c_effect.c</h3><ul>
    <li><span>OamData[128]</span> ce_OamBak</li> 
    <li><span>s16</span> ce_EVY_rate</li> 
    <li><span>s16</span> ce_eff_type</li> 
    <li><span>s16</span> ce_EVA_rate</li> 
    <li><span>s16</span> ce_EVB_rate</li> 
    <li><span>u16[1024]</span> ce_BgBak</li> 
    <li><span>s16</span> ce_obj_mode</li> 
    <li><span>void</span> ceMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ce_v_blank_intr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ce_ObjMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ce_suji_pr<span class="rr-func-args">(s16,s16,s32,s16)</span></li> 
    <li><span>void</span> ce_moji_pr<span class="rr-func-args">(s16,s16,char*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">289</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="ce_dat.h" />
  <h3>ce_dat.h</h3><ul>
    <li><span>int const[1][2]</span> ce_OamData_Sample</li> 
    <li><span>char*[]</span> ce_type_tbl</li> 
    <li><span>int const[256]</span> ce_bg1_Palette</li> 
    <li><span>int const[3584]</span> ce_bg1_Character</li> 
    <li><span>int const[640]</span> ce_bg1_Map</li> 
    <li><span>int const[9152]</span> ce_bg3_Character</li> 
    <li><span>int const[640]</span> ce_bg3_Map</li> 
    <li><span>int const[256]</span> ce_PS_hey5_Palette</li> 
    <li><span>int const[2048]</span> ce_PS_hey5_Char</li> 
    <li><span>int[296]</span> ce_moji_Character</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">10</div>    <div class="rr-file-stat rr-file-stats-lines">22</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="ce_data.c" />
  <h3>ce_data.c</h3><ul>
    <li><span>u32 const[1][2]</span> ce_OamData_Sample</li> 
    <li><span>char*[4]</span> ce_type_tbl</li> 
    <li><span>u32[296]</span> ce_moji_Character</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">102</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="ceexpl.c" />
  <h3>ceexpl.c</h3><ul>
    <li><span>char const*</span> ce_title_str</li> 
    <li><span>char const*</span> ce_expl_str0</li> 
    <li><span>char const**[]</span> ce_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">33</div>  </div>
</div>

</section>

---
## Font prn (/functional_sample/fontprn)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
font8 | .h | Include file for declaring 
fontprn | .c, .h, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="font8.h" />
  <h3>font8.h</h3><ul>
    <li><span>int[15][1792]</span> font8</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">6858</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="fontprn.c" />
  <h3>fontprn.c</h3><ul>
    <li><span>u32 const[1][2]</span> fontOamData</li> 
    <li><span>fpData</span> fpdata</li> 
    <li><span>void</span> FontPrintInit<span class="rr-func-args">(u8,u8,u8,u8,u32,u8)</span></li> 
    <li><span>void</span> FontPalletLoad<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> FontColor<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> FontPrint<span class="rr-func-args">(u8,u8,u8*)</span></li> 
    <li><span>void</span> NumPrint<span class="rr-func-args">(u8,u8,s16,s16)</span></li> 
    <li><span>void</span> put_font_1d<span class="rr-func-args">(u8,u8,u8*,u16)</span></li> 
    <li><span>void</span> put_font_2d<span class="rr-func-args">(u8,u8,u8*,u16)</span></li> 
    <li><span>void</span> FontPrintC<span class="rr-func-args">(u8,u8,u8,u8*)</span></li> 
    <li><span>void</span> NumPrintC<span class="rr-func-args">(u8,u8,u8,s16,s16)</span></li> 
    <li><span>void</span> FontPrintCls<span class="rr-func-args">()</span></li> 
    <li><span>void</span> FontPrintSync<span class="rr-func-args">()</span></li> 
    <li><span>char*</span> fp_itoa<span class="rr-func-args">(int,char*,int)</span></li> 
    <li><span>char*</span> _toa<span class="rr-func-args">(unsigned int,char*,int)</span></li> 
    <li><span>int</span> _power<span class="rr-func-args">(int,int)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">14</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">503</div>  </div>
</div>

</section>

---
## Obj_rsm (/functional_sample/obj_rsm)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
hey2 | .bmp, .c, .o | 
obexpl | .c, .o | 
obmain | .c, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="obexpl.c" />
  <h3>obexpl.c</h3><ul>
    <li><span>char const*</span> ob_title_str</li> 
    <li><span>char const*</span> ob_expl_str0</li> 
    <li><span>char const**[]</span> ob_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">35</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="obmain.c" />
  <h3>obmain.c</h3><ul>
    <li><span>s16</span> ob_pos_x</li> 
    <li><span>s16</span> ob_pos_y</li> 
    <li><span>u16</span> ob_affine</li> 
    <li><span>u16</span> ob_mosaic</li> 
    <li><span>u16</span> ob_scale_x</li> 
    <li><span>u16</span> ob_scale_y</li> 
    <li><span>u16</span> ob_rotate</li> 
    <li><span>u16[16]</span> ob_oam_buffer</li> 
    <li><span>void</span> obMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ob_v_blank_intr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ob_init_param<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ob_init_oam<span class="rr-func-args">()</span></li> 
    <li><span>int</span> ob_key_control<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ob_create_oam<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">272</div>  </div>
</div>

</section>

---
## Swinsm (/functional_sample/swinsm)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
ReadMe | .txt | 
sw_PS_hey5 | .bmp, .c, .o | 
sw_bg0 | .bmp, .c, .o | 
sw_bg1 | .bmp, .c, .o | 
sw_bg2 | .bmp, .c, .o | 
sw_bg3 | .bmp, .c, .o | 
sw_dat | .h | Include file for declaring 
swexpl | .c, .o | 
window | .c, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="sw_dat.h" />
  <h3>sw_dat.h</h3><ul>
    <li><span>u16 const[256]</span> sw_PS_hey5_Palette</li> 
    <li><span>u8 const[2048]</span> sw_PS_hey5_Char</li> 
    <li><span>u16 const[10]</span> sw_bg0_Palette</li> 
    <li><span>u8 const[1120]</span> sw_bg0_Character</li> 
    <li><span>u16 const[640]</span> sw_bg0_Map</li> 
    <li><span>u8 const[384]</span> sw_bg1_Character</li> 
    <li><span>u16 const[640]</span> sw_bg1_Map</li> 
    <li><span>u8 const[384]</span> sw_bg2_Character</li> 
    <li><span>u16 const[640]</span> sw_bg2_Map</li> 
    <li><span>u8 const[384]</span> sw_bg3_Character</li> 
    <li><span>u16 const[640]</span> sw_bg3_Map</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">23</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="swexpl.c" />
  <h3>swexpl.c</h3><ul>
    <li><span>char const*</span> sw_title_str</li> 
    <li><span>char const*</span> sw_expl_str0</li> 
    <li><span>char const**[]</span> sw_expl_str_array</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">28</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="window.c" />
  <h3>window.c</h3><ul>
    <li><span>u32 const[1][2]</span> sw_OamData_Sample</li> 
    <li><span>OamData[128]</span> sw_OamBak</li> 
    <li><span>void</span> swMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> sw_v_blank_intr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> sw_ObjMove<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">149</div>  </div>
</div>

</section>

---
# Infrared sample (/ir_sample)
This folder contains 

File Name | Extension | Description
---|---|---
Explanation | .txt | 
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
ir_sample | .bin, .elf, .h, .map | 
main | .c, .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
utility | .c, .h, .o | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">514</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="utility.c" />
  <h3>utility.c</h3><ul>
    <li><span>u8 const[16]</span> hexdata</li> 
    <li><span>void</span> DispCharSet8<span class="rr-func-args">(OamData*,vu8*)</span></li> 
    <li><span>void</span> CharSet8BG<span class="rr-func-args">(vu8*,vu8*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">40</div>  </div>
</div>

</section>

---
# Multi Boot (/multi_boot)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
GasdependClient | N/A | 
GasdependDemo | N/A | 
Makefile | N/A | Used to build the source code in the folder (run make)
MakefileClient | N/A | 
MakefileDemo | N/A | 
MultiBoot | .c, .h, .o, .txt | 
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
agb_c2s | .bat | Windows Batch file for running 
client | .bin, .elf, .map, .o | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
crt0_demo | .o, .s | 
crt0_demo_arm | .s | Assembly source file containing 
crt0_multi_boot | .o, .s | 
crt0_multi_boot_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
demo | .bin, .dep, .elf, .map | 
demo_LZ | .bin, .o | 
demo_main | .c, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
multi_boot | .bin, .dep, .elf, .map | 
multi_sio_asm | .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
types | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiBoot.c" />
  <h3>MultiBoot.c</h3><ul>
    <li><span>u16[3]</span> MultiBoot_required_data</li> 
    <li><span>void</span> MultiBootInit<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootMain<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootSend<span class="rr-func-args">(MultiBootParam*,u16)</span></li> 
    <li><span>void</span> MultiBootStartProbe<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootStartMaster<span class="rr-func-args">(MultiBootParam*,u8*,int,u8,s8)</span></li> 
    <li><span>int</span> MultiBootCheckComplete<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootHandShake<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootWaitCycles<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiBootWaitSendDone<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">653</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[72]</span> IntrFuncBuf</li> 
    <li><span>u8 const[15]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">291</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="demo_main.c" />
  <h3>demo_main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[4][2]</span> HPos</li> 
    <li><span>u16[4][2]</span> VPos</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u32</span> SioFlagsBak</li> 
    <li><span>u8</span> SioStartFlag</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>IntrFuncp[14]</span> IntrTableBuf</li> 
    <li><span>void</span> DemoMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">229</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>MultiBootParam</span> multiboot_status</li> 
    <li><span>u8*</span> demo_bin_start</li> 
    <li><span>u32</span> demo_bin_length</li> 
    <li><span>int</span> frame_retval</li> 
    <li><span>u8 const* const[]</span> BgScDatap_ID</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">148</div>  </div>
</div>

</section>

---
# Multi boot sync (/multi_boot_sync)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
GasdependClient | N/A | 
GasdependDemo | N/A | 
Makefile | N/A | Used to build the source code in the folder (run make)
MakefileClient | N/A | 
MakefileDemo | N/A | 
MultiBoot | .c, .h, .o, .txt | 
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
agb_c2s | .bat | Windows Batch file for running 
client | .bin, .elf, .map, .o | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
crt0_demo | .o, .s | 
crt0_demo_arm | .s | Assembly source file containing 
crt0_multi_boot | .o, .s | 
crt0_multi_boot_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
demo | .bin, .dep, .elf, .map | 
demo_LZ | .bin, .o | 
demo_main | .c, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
multi_boot | .bin, .dep, .elf, .map | 
multi_sio_asm | .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
types | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiBoot.c" />
  <h3>MultiBoot.c</h3><ul>
    <li><span>u16[3]</span> MultiBoot_required_data</li> 
    <li><span>void</span> MultiBootInit<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootMain<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootSend<span class="rr-func-args">(MultiBootParam*,u16)</span></li> 
    <li><span>void</span> MultiBootStartProbe<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootStartMaster<span class="rr-func-args">(MultiBootParam*,u8*,int,u8,s8)</span></li> 
    <li><span>int</span> MultiBootCheckComplete<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootHandShake<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootWaitCycles<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiBootWaitSendDone<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">653</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[64]</span> IntrFuncBuf</li> 
    <li><span>u8 const[19]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
    <li><span>void</span> MultiSioVSync<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">289</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="demo_main.c" />
  <h3>demo_main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u8</span> SioStartFlag</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>IntrFuncp[14]</span> IntrTableBuf</li> 
    <li><span>void</span> DemoMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">217</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>MultiBootParam</span> multiboot_status</li> 
    <li><span>u8*</span> demo_bin_start</li> 
    <li><span>u32</span> demo_bin_length</li> 
    <li><span>int</span> frame_retval</li> 
    <li><span>u8 const* const[]</span> BgScDatap_ID</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">154</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="types.h" />
  <h3>types.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">18</div>  </div>
</div>

</section>

---
# Multi sio (/multi_sio)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
agb_c2s | .bat | Windows Batch file for running 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
multi_sio | .bin, .elf, .map | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[72]</span> IntrFuncBuf</li> 
    <li><span>u8 const[15]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">291</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[4][2]</span> HPos</li> 
    <li><span>u16[4][2]</span> VPos</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u32</span> SioFlagsBak</li> 
    <li><span>u8</span> SioStartFlag</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>IntrFuncp[14]</span> IntrTableBuf</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">226</div>  </div>
</div>

</section>

---
## Multi sio sync (/multi_sio_sync)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
agb_c2s | .bat | Windows Batch file for running 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
multi_sio | .bin, .elf, .map | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[64]</span> IntrFuncBuf</li> 
    <li><span>u8 const[19]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
    <li><span>void</span> MultiSioVSync<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">291</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u8</span> SioStartFlag</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>IntrFuncp[14]</span> IntrTableBuf</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">218</div>  </div>
</div>

</section>

---
# Overlay (/overlay)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
agb_c2s | .bat | Windows Batch file for running 
bgmove | .c, .o | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
ldscript | .x | Ld script that tells the Linker where to place data in the resulting ELF
main | .c, .o | 
objmove | .c, .o | 
overlay | .bin, .elf, .h, .map | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
sub | .c, .h, .o | 
title | .c, .o | 
types | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="bgmove.c" />
  <h3>bgmove.c</h3><ul>
    <li><span>IntrFuncp const[13]</span> BgMoveIntrTable</li> 
    <li><span>BgOffsetCnt[4]</span> BgMoveOffsetBak</li> 
    <li><span>u16[4][1024]</span> BgMoveBgBak</li> 
    <li><span>u8</span> BgMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgMoveVBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgSnakeMove<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">118</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>LinkData const[2]</span> LinkData_Title</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>u16 const[640]</span> BgScData_Title</li> 
    <li><span>u16 const[640]</span> BgScData_ObjMove</li> 
    <li><span>u16 const[640]</span> BgScData_BgMove0</li> 
    <li><span>u16 const[640]</span> BgScData_BgMove1</li> 
    <li><span>u16 const[640]</span> BgScData_BgMove2</li> 
    <li><span>u16 const[640]</span> BgScData_BgMove3</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">10</div>    <div class="rr-file-stat rr-file-stats-lines">636</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u8</span> SceneNo</li> 
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>IntrFuncp[13]</span> IntrTableBuf</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>s32[4]</span> DataSecDummy</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">6</div>    <div class="rr-file-stat rr-file-stats-lines">82</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="objmove.c" />
  <h3>objmove.c</h3><ul>
    <li><span>IntrFuncp const[13]</span> ObjMoveIntrTable</li> 
    <li><span>OamData[128]</span> ObjMoveOamBak</li> 
    <li><span>u16[1024]</span> ObjMoveBgBak</li> 
    <li><span>u8</span> ObjMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ObjMoveVBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ObjSnakeMove<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">119</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="sub.c" />
  <h3>sub.c</h3><ul>
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ObjCursolMove<span class="rr-func-args">(OamData*,LinkData*,u8*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">76</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="title.c" />
  <h3>title.c</h3><ul>
    <li><span>IntrFuncp const[13]</span> TitleIntrTable</li> 
    <li><span>u16[1024]</span> TitleBgBak</li> 
    <li><span>OamData[128]</span> TitleOamBak</li> 
    <li><span>u8</span> Cursolp</li> 
    <li><span>u8</span> Title<span class="rr-func-args">()</span></li> 
    <li><span>void</span> TitleVBlankIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">2</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">82</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="types.h" />
  <h3>types.h</h3><ul>
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">27</div>  </div>
</div>

</section>

---
# Reintr (/reintr)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
agb_c2s | .bat | Windows Batch file for running 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
reintr | .bin, .elf, .map | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">514</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ObjSnakeMove<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">6</div>    <div class="rr-file-stat rr-file-stats-lines">179</div>  </div>
</div>

</section>

---
# Simple (/simple)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
agb_c2s | .bat | Windows Batch file for running 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
main | .c, .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
simple | .bin, .elf, .map | 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">514</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ObjSnakeMove<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">6</div>    <div class="rr-file-stat rr-file-stats-lines">174</div>  </div>
</div>

</section>

---
# Sio32 multi-load (/sio32_multi_load)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
GasdependClient | N/A | 
GasdependDemo | N/A | 
GasdependLoader | N/A | 
Makefile | N/A | Used to build the source code in the folder (run make)
MakefileClient | N/A | 
MakefileDemo | N/A | 
MakefileLoader | N/A | 
MultiBoot | .c, .h, .o, .txt | 
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
Sio32MultiLoad | .c, .h, .o | 
agb_c2s | .bat | Windows Batch file for running 
bss | .c, .h, .o | 
client | .bin, .elf, .map, .o | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
crt0_demo | .o, .s | 
crt0_demo_arm | .s | Assembly source file containing 
crt0_loader | .o, .s | 
crt0_loader_arm | .s | Assembly source file containing 
crt0_multi_boot | .o, .s | 
crt0_multi_boot_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
demo | .bin, .dep, .elf, .map, .o | 
demo_main | .c, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
intr_main | .o, .s | 
intr_main_arm | .s | Assembly source file containing 
intr_table | .c, .h, .o | 
load_table_dest | .c, .o | 
load_table_src | .c, .o | 
loader | .bin, .dep, .elf, .map | 
loader_LZ | .bin, .o | 
loader_main | .c, .o | 
main | .c, .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
sio32_multi_load | .bin, .dep, .elf, .h, .map | 
sub | .c, .h, .o | 
types | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiBoot.c" />
  <h3>MultiBoot.c</h3><ul>
    <li><span>u16[3]</span> MultiBoot_required_data</li> 
    <li><span>void</span> MultiBootInit<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootMain<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootSend<span class="rr-func-args">(MultiBootParam*,u16)</span></li> 
    <li><span>void</span> MultiBootStartProbe<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootStartMaster<span class="rr-func-args">(MultiBootParam*,u8*,int,u8,s8)</span></li> 
    <li><span>int</span> MultiBootCheckComplete<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootHandShake<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootWaitCycles<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiBootWaitSendDone<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">653</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[72]</span> IntrFuncBuf</li> 
    <li><span>u8 const[25]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*,u32)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*,u32)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">316</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="Sio32MultiLoad.c" />
  <h3>Sio32MultiLoad.c</h3><ul>
    <li><span>Sio32MultiLoadArea</span> S32ml</li> 
    <li><span>u8 const[21]</span> MultiSioLib_Var</li> 
    <li><span>void</span> Sio32MultiLoadInit<span class="rr-func-args">(u32,void*)</span></li> 
    <li><span>u32</span> Sio32MultiLoadMain<span class="rr-func-args">(u32*)</span></li> 
    <li><span>void</span> Sio32MultiLoadIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">213</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bss.c" />
  <h3>bss.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u32</span> SioFlagsBak</li> 
    <li><span>u8</span> SioStartFlag</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">10</div>    <div class="rr-file-stat rr-file-stats-lines">29</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="demo_main.c" />
  <h3>demo_main.c</h3><ul>
    <li><span>u16[4][2]</span> HPos</li> 
    <li><span>u16[4][2]</span> VPos</li> 
    <li><span>void</span> DemoMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">135</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="intr_table.c" />
  <h3>intr_table.c</h3><ul>
    <li><span>IntrFuncp[13]</span> IntrTableBuf</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">32</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="load_table_dest.c" />
  <h3>load_table_dest.c</h3><ul>
    <li><span>u8 const* const[4]</span> LoadTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">19</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="load_table_src.c" />
  <h3>load_table_src.c</h3><ul>
    <li><span>u8 const* const[4]</span> LoadTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">20</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="loader_main.c" />
  <h3>loader_main.c</h3><ul>
    <li><span>u8*</span> LoadCounterp</li> 
    <li><span>u8</span> RecvLoadCounter</li> 
    <li><span>u8</span> BurstLoad</li> 
    <li><span>u32</span> ProgressCounter</li> 
    <li><span>void</span> LoaderMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">190</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>MultiBootParam</span> multiboot_status</li> 
    <li><span>u8*</span> demo_bin_start</li> 
    <li><span>u32</span> demo_bin_length</li> 
    <li><span>int</span> frame_retval</li> 
    <li><span>u8 const* const[]</span> BgScDatap_ID</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">134</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="sub.c" />
  <h3>sub.c</h3><ul>
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
    <li><span>void</span> Data2BgSc<span class="rr-func-args">(u32,u16*,u8,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">77</div>  </div>
</div>

</section>

---
# Sio32_multi_load_sync (/sio32_multi_load_sync)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies to tell the GNU Assembler (GAS) when to re-assemble files
GasdependClient | N/A | 
GasdependDemo | N/A | 
GasdependLoader | N/A | 
Makefile | N/A | Used to build the source code in the folder (run make)
MakefileClient | N/A | 
MakefileDemo | N/A | 
MakefileLoader | N/A | 
MultiBoot | .c, .h, .o, .txt | 
MultiSio | .c, .h, .o | 
MultiSioAsm | .o, .s | 
MultiSioAsmArm | .s | Assembly source file containing 
MultiSioDefine | .s | Assembly source file containing 
MultiSioDefineArm | .s | Assembly source file containing 
Sio32MultiLoad | .c, .h, .o | 
agb_c2s | .bat | Windows Batch file for running 
bss | .c, .h, .o | 
client | .bin, .elf, .map, .o | 
crt0 | .o, .s | Implements the start function and bootstraps the program, all games need this as it sets up the interrupts and jumps to the main function
crt0_arm | .s | Assembly source file containing 
crt0_demo | .o, .s | 
crt0_demo_arm | .s | Assembly source file containing 
crt0_loader | .o, .s | 
crt0_loader_arm | .s | Assembly source file containing 
crt0_multi_boot | .o, .s | 
crt0_multi_boot_arm | .s | Assembly source file containing 
data | .c, .h, .o | 
demo | .bin, .dep, .elf, .map, .o | 
demo_main | .c, .o | 
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
intr_main | .o, .s | 
intr_main_arm | .s | Assembly source file containing 
intr_table | .c, .h, .o | 
load_table_dest | .c, .o | 
load_table_src | .c, .o | 
loader | .bin, .dep, .elf, .map | 
loader_LZ | .bin, .o | 
loader_main | .c, .o | 
main | .c, .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
rom_header_arm | .s | Assembly source file containing 
sio32_multi_load | .bin, .dep, .elf, .h, .map | 
sub | .c, .h, .o | 
types | .h | Include file for declaring 


<div class="rr-source-code-title">Code Files</div><section class="rr-main-cards">
<div class="rr-file-card">
  <img class="geopattern" data-title="MultiBoot.c" />
  <h3>MultiBoot.c</h3><ul>
    <li><span>u16[3]</span> MultiBoot_required_data</li> 
    <li><span>void</span> MultiBootInit<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootMain<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootSend<span class="rr-func-args">(MultiBootParam*,u16)</span></li> 
    <li><span>void</span> MultiBootStartProbe<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootStartMaster<span class="rr-func-args">(MultiBootParam*,u8*,int,u8,s8)</span></li> 
    <li><span>int</span> MultiBootCheckComplete<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>int</span> MultiBootHandShake<span class="rr-func-args">(MultiBootParam*)</span></li> 
    <li><span>void</span> MultiBootWaitCycles<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiBootWaitSendDone<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">653</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="MultiSio.c" />
  <h3>MultiSio.c</h3><ul>
    <li><span>MultiSioArea</span> Ms</li> 
    <li><span>u32[16]</span> RecvFuncBuf</li> 
    <li><span>u32[64]</span> IntrFuncBuf</li> 
    <li><span>u8 const[29]</span> MultiSioLib_Var</li> 
    <li><span>void</span> MultiSioInit<span class="rr-func-args">(u32)</span></li> 
    <li><span>void</span> MultiSioStart<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioStop<span class="rr-func-args">()</span></li> 
    <li><span>u32</span> MultiSioMain<span class="rr-func-args">(void*,void*,u32)</span></li> 
    <li><span>void</span> MultiSioSendDataSet<span class="rr-func-args">(void*,u32)</span></li> 
    <li><span>u32</span> MultiSioRecvDataCheck<span class="rr-func-args">(void*)</span></li> 
    <li><span>void</span> MultiSioVSync<span class="rr-func-args">()</span></li> 
    <li><span>void</span> MultiSioIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">317</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="Sio32MultiLoad.c" />
  <h3>Sio32MultiLoad.c</h3><ul>
    <li><span>Sio32MultiLoadArea</span> S32ml</li> 
    <li><span>u8 const[21]</span> MultiSioLib_Var</li> 
    <li><span>void</span> Sio32MultiLoadInit<span class="rr-func-args">(u32,void*)</span></li> 
    <li><span>u32</span> Sio32MultiLoadMain<span class="rr-func-args">(u32*)</span></li> 
    <li><span>void</span> Sio32MultiLoadIntr<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">215</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="bss.c" />
  <h3>bss.c</h3><ul>
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[256]</span> IntrMainBuf</li> 
    <li><span>u16[1024]</span> BgBak</li> 
    <li><span>OamData[128]</span> OamBak</li> 
    <li><span>u16[8]</span> UsrSendBuf</li> 
    <li><span>u16[4][8]</span> UsrRecvBuf</li> 
    <li><span>u32</span> SioState</li> 
    <li><span>u32</span> SioFlags</li> 
    <li><span>u32</span> SioFlagsBak</li> 
    <li><span>u8</span> SioStartFlag</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">30</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="data.c" />
  <h3>data.c</h3><ul>
    <li><span>u16 const[640]</span> BgScData_Sample</li> 
    <li><span>u32 const[4][2]</span> OamData_Sample</li> 
    <li><span>u16 const[16][16]</span> PlttData_Sample</li> 
    <li><span>u32 const[1792]</span> CharData_Sample</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">536</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="demo_main.c" />
  <h3>demo_main.c</h3><ul>
    <li><span>void</span> DemoMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">112</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="intr_table.c" />
  <h3>intr_table.c</h3><ul>
    <li><span>IntrFuncp[13]</span> IntrTableBuf</li> 
    <li><span>IntrFuncp const[13]</span> IntrTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">32</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="load_table_dest.c" />
  <h3>load_table_dest.c</h3><ul>
    <li><span>u8 const* const[4]</span> LoadTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">19</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="load_table_src.c" />
  <h3>load_table_src.c</h3><ul>
    <li><span>u8 const* const[4]</span> LoadTable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">20</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="loader_main.c" />
  <h3>loader_main.c</h3><ul>
    <li><span>u8*</span> LoadCounterp</li> 
    <li><span>u8</span> RecvLoadCounter</li> 
    <li><span>u8</span> BurstLoad</li> 
    <li><span>u32</span> ProgressCounter</li> 
    <li><span>void</span> LoaderMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">192</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
    <li><span>MultiBootParam</span> multiboot_status</li> 
    <li><span>u8*</span> demo_bin_start</li> 
    <li><span>u32</span> demo_bin_length</li> 
    <li><span>int</span> frame_retval</li> 
    <li><span>u8 const* const[]</span> BgScDatap_ID</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">1</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">136</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="sub.c" />
  <h3>sub.c</h3><ul>
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgScSet<span class="rr-func-args">(u8*,u16*,u8)</span></li> 
    <li><span>void</span> Data2BgSc<span class="rr-func-args">(u32,u16*,u8,u8)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">88</div>  </div>
</div>

</section>
