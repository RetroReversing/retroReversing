---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance Software Development Kit Samples
category: gba
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
editlink: /consoles/gba/GBASDKSamples.md
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


{% capture card_1_1_items %}
- u16 const[16][16]|||textPaletteData
- u16 const[6144]|||mychar
{% endcapture %}

{% capture card_1_2_items %}
- void|||DummyFlash|||()
{% endcapture %}

{% capture section_1_cards %}
{% include source-code-card.html title="Data.c" items=card_1_1_items functions="0" variables="2" lines="791" %}
{% include source-code-card.html title="dummy.c" items=card_1_2_items functions="1" variables="0" lines="4" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_1_cards %}

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


{% capture card_2_1_items %}
- void|||InitBg|||()
- void|||SetBgMode|||(u16)
- u16|||GetBgMode|||()
- void|||SetBgxBuffer|||(u8,u16*,u32)
- void|||SetBgxBuffRenewal|||(u8,bool)
- buffer*|||GetBgxBuffer|||(u8)
- u16*|||GetBgxBuffPointer|||(u8)
- u32|||GetBgxBuffSize|||(u8)
- void|||ClearBgxBuffer|||(u8,u16)
- void|||DmaBgxBuffer|||(u8)
- void|||DmaAllBgxBuffer|||()
- void|||TrmScreenDataToBgxBufferByFunc|||(u8,void(*)(u16*,u32))
- void|||TrmScreenDataToBgxBuffer|||(u8,u16 const*,u32)
- void|||ClearBgxScreenRect|||(u8,u16,u8,u8)
- void|||SetFlameBuff|||(u8,u16*)
- u16*|||GetFlameBuff|||(u8)
- void|||SetScreenSize|||(u8,u16)
- u16|||GetScreenSize|||(u8)
- void|||SetBgxScreenBaseBlock|||(u8,u16)
- u16|||GetBgxScreenBaseBlock|||(u8)
- void|||SetBgxScreenBaseAdr|||(u8,u32)
- u32|||GetBgxScreenBaseAdr|||(u8)
- void|||SetMosaicEnable|||(u8)
- void|||SetBgxMosaicEnable|||(u8,u16)
- u16|||GetBgxMosaicEnable|||(u8)
- void|||SetBgxColorMode|||(u8,u16)
- u16|||GetBgxColorMode|||(u8)
- void|||SetBgxCharBaseBlock|||(u8,u16)
- u16|||GetBgxCharBaseBlock|||(u8)
- void|||SetBgxCharBaseAdr|||(u8,u32)
- u32|||GetBgxCharBaseAdr|||(u8)
- void|||SetBgxPriority|||(u8,u16)
- u16|||GetBgxPriority|||(u8)
- void|||SetBgxAreaOver|||(u8,u16)
- u16|||GetBgxAreaOver|||(u8)
- void|||SetBgxPosX|||(u8,u16)
- u16|||GetBgxPosX|||(u8)
- void|||RelativeScrollBgxPosX|||(u8,u16)
- void|||SetBgxPosY|||(u8,u16)
- u16|||GetBgxPosY|||(u8)
- void|||RelativeScrollBgxPosY|||(u8,u16)
- void|||SetRbgxHVflip|||(u8,bool,bool)
- void|||CalcRbgxAffineValue|||(u8,s16,s16,u8)
- void|||CalcRbgxReferenceStartPos|||(u8,pos_2d,pos_2d)
- void|||RotateZoomRbgx|||(u8)
- void|||RevBgxAffineValue|||(u8,u8)
- void|||SetParagraph|||(bool,u8,u16)
- u16|||DrawAsciiCharOnBgx|||(u8,u16,u16,u8 const*,u8)
- u16|||DrawAsciiStringOnBgx|||(u8,u16,u16,u8 const*)
- u16|||DrawHexOnBgx|||(u8,u16,u16,void const*,u8)
- u16|||DrawHalfByteHexOnBgx|||(u8,u16,u16,void const*,u8)
- u16|||DrawUIntOnBgx|||(u8,u16,u16,void const*,u8,u8)
- u16|||DrawSIntOnBgx|||(u8,u16,u16,void const*,u8,u8)
{% endcapture %}

{% capture card_2_2_items %}
- NULL|||0x00000000
- BG_PLTT_WHITE|||( 8
- BG_PLTT_ORANGE|||( 9
- BG_PLTT_RED|||(10
- BG_PLTT_BLUE|||(11
- BG_PLTT_YELLOW|||(12
- BG_PLTT_GREEN|||(13
- BG_PLTT_PURPLE|||(14
- OBJ_PLTT_WHITE|||8
- OBJ_PLTT_ORANGE|||9
- OBJ_PLTT_RED|||10
- OBJ_PLTT_BLUE|||11
- OBJ_PLTT_YELLOW|||12
- OBJ_PLTT_GREEN|||13
- OBJ_PLTT_PURPLE|||14
- false|||0
- true|||1
- AGING_STATE_INITIAL|||0
- AGING_STATE_EXECUTE|||1
- AGING_STATE_COMPLETE|||2
- AGING_STATE_BREAK|||3
- AGING_STATE_ERROR|||4
- DEVICE_DACS|||0
- DEVICE_EEPROM|||1
- DEVICE_FLASH|||2
- DEVICE_SRAM|||3
- DEVICE_EMPTY|||7
{% endcapture %}

{% capture card_2_3_items %}

{% endcapture %}

{% capture card_2_4_items %}
- OBJ_V_SIZE_64|||0xc000
- OBJ_V_SIZE_32|||0x8000
- OBJ_V_SIZE_16|||0x4000
- OBJ_V_SIZE_8|||0x0000
- OBJ_COLOR_256|||0x2000
- OBJ_COLOR_16|||0x0000
- OBJ_MOSAIC_ON|||0x1000
- OBJ_MOSAIC_OFF|||0x0000
- OBJ_MODE_WINDOW|||0x0800
- OBJ_MODE_BLEND|||0x0400
- OBJ_MODE_NORMAL|||0x0000
- OBJ_AFFINE_X2|||0x0300
- OBJ_AFFINE_X1|||0x0100
- OBJ_AFFINE_OFF|||0x0000
- OBJ_Y|||0x00ff
- OBJ_H_SIZE_64|||0xc000
- OBJ_H_SIZE_32|||0x8000
- OBJ_H_SIZE_16|||0x4000
- OBJ_H_SIZE_8|||0x0000
- OBJ_HV_FLIP|||0x3000
- OBJ_V_FLIP|||0x2000
- OBJ_H_FLIP|||0x1000
- OBJ_AFFINE_NO|||0x3e00
- OBJ_X|||0x01ff
- OBJ_PLTT_NO|||0xf000
- OBJ_PRIORITY_1|||0x0000
- OBJ_PRIORITY_2|||0x0400
- OBJ_PRIORITY_3|||0x0800
- OBJ_PRIORITY_4|||0x0c00
- OBJ_CHAR_NO|||0x03ff
- void|||SetOamBuffer|||(u16*,u32)
- void|||DmaOamBuffer|||()
- void|||SetOamBufferRenewal|||(bool)
- void|||SetCursorStatus|||(csrDefine const*,u8)
- void|||SetCursorChar|||(u16,u16)
- void|||DeleteCursor|||()
- u16|||GetCurosrPosOnBg|||(u8)
- void|||CheckCursorPos|||(u8*)
- void|||CheckCursorPosRange|||(u8*,u8,u8)
- void|||MoveAndAnimeCursor|||(u8)
{% endcapture %}

{% capture card_2_5_items %}
- keyStatus|||key
- void|||WaitHblank|||()
- void|||WaitPressKey|||(u8,u16)
- void|||SetKeyRapidEnable|||(bool)
- void|||AddRapidKey|||(u16)
- void|||SubRapidKey|||(u16)
- void|||SetKeyRapid|||(u16,u8,u8,u8)
- void|||ReadKeyPlus|||()
- void|||ReadKey|||()
- void|||ChangeTask|||(u8,void(*)(u8),void(*)())
- void|||ExecuteTask|||()
- void|||CalcAffineValue|||(s16,s16,u8,affine*)
- u8|||ClearWram|||(u32,u32,u16)
- u8|||ClearVram|||(u32,u32,u16)
- u8|||ClearOam|||(u32,u32,u32)
- u8|||ClearPalette|||(selObjBg,u16)
- u8|||TrmCharData|||(selObjBg,u16 const*,u32,u8)
- u8|||TrmPaletteData|||(selObjBg,u16 const*,u16,u16)
- void|||SetInputHexData|||(inputHexDef const*)
- u8|||InputHexData|||(u16*)
- u8|||SelectStrings|||(u16*)
- void|||DrawNowSelectString|||(u8,selStrDef const*)
- u8|||ToggleSwitch|||(u16*)
- void|||DrawNowToggleSwitchChar|||(u8,toggleSwDef const*)
- void|||DrawNowToggleSwitchString|||(u8,toggleSwDef const*)
- u8|||ClearNowAllSetting|||(u16*)
- void|||InitSetFunc|||(u8,setFuncTable const*)
- void|||DrawNowAllSetting|||(u16,setFuncTable const*)
{% endcapture %}

{% capture section_2_cards %}
{% include source-code-card.html title="bg.h" items=card_2_1_items functions="53" variables="0" lines="127" %}
{% include source-code-card.html title="myTypes.h" items=card_2_2_items functions="0" variables="0" lines="100" %}
{% include source-code-card.html title="mylib.h" items=card_2_3_items functions="0" variables="0" lines="16" %}
{% include source-code-card.html title="obj.h" items=card_2_4_items functions="10" variables="0" lines="114" %}
{% include source-code-card.html title="stdSub.h" items=card_2_5_items functions="27" variables="1" lines="131" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_2_cards %}

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


{% capture card_3_1_items %}
- _M4A_LIB_VER|||105
- CGB1_P12|||((WaveData *)0)
- CGB1_P25|||((WaveData *)1)
- CGB1_P50|||((WaveData *)2)
- CGB1_P75|||((WaveData *)3)
- CGB2_P12|||CGB1_P12
- CGB2_P25|||CGB1_P25
- CGB2_P50|||CGB1_P50
- CGB2_P75|||CGB1_P75
- CGB4_C15|||((WaveData *)0)
- CGB4_C07|||((WaveData *)1)
- u8 const[]|||__sound_mode_i
- sound_mode_i|||((u32)__sound_mode_i)
- u8 const[]|||__total_mplay_n
- total_mplay_n|||((u16)__total_mplay_n)
- u8 const[]|||__total_song_n
- total_song_n|||((u16)__total_song_n)
- SoundArea|||m4a_sound
- MPlayTable const[]|||mplay_table
- SongTable const[]|||song_table
- u8[]|||m4a_memacc_area
- void|||m4aSoundInit|||()
- m4aSoundMode()|||SoundMode_rev01(P1)
- void|||SoundMode_rev01|||(u32)
- void|||m4aSoundMain|||()
- m4aSoundVSync()|||SoundVSync_rev01()
- void|||SoundVSync_rev01|||()
- m4aSoundVSyncOff()|||SoundVSyncOff_rev01()
- void|||SoundVSyncOff_rev01|||()
- m4aSoundVSyncOn()|||SoundVSyncOn_rev01()
- void|||SoundVSyncOn_rev01|||()
- m4aMPlayStart()|||MPlayStart_rev01(P1,P2)
- void|||MPlayStart_rev01|||(MusicPlayerArea*,SongHeader*)
- void|||m4aSongNumStart|||(u16)
- void|||m4aSongNumStartOrChange|||(u16)
- void|||m4aSongNumStartOrContinue|||(u16)
- void|||m4aMPlayImmInit|||(MusicPlayerArea*)
- m4aMPlayStop()|||MPlayStop_rev01(P1)
- void|||MPlayStop_rev01|||(MusicPlayerArea*)
- void|||m4aSongNumStop|||(u16)
- void|||m4aMPlayAllStop|||()
- void|||m4aMPlayContinue|||(MusicPlayerArea*)
- void|||m4aSongNumContinue|||(u16)
- void|||m4aMPlayAllContinue|||()
- void|||m4aMPlayFadeOut|||(MusicPlayerArea*,u16)
- m4aMPlayTempoControl()|||MPlayTempoControl(P1,P2)
- void|||MPlayTempoControl|||(MusicPlayerArea*,u16)
- m4aMPlayVolumeControl()|||MPlayVolumeControl(P1,P2,P3)
- void|||MPlayVolumeControl|||(MusicPlayerArea*,u16,u16)
- m4aMPlayPitchControl()|||MPlayPitchControl(P1,P2,P3)
- void|||MPlayPitchControl|||(MusicPlayerArea*,u16,s16)
- m4aMPlayPampotControl()|||MPlayPanpotControl(P1,P2,P3)
- m4aMPlayPanpotControl()|||MPlayPanpotControl(P1,P2,P3)
- void|||MPlayPanpotControl|||(MusicPlayerArea*,u16,s8)
- m4aMPlayModDepthSet()|||MPlayModDepthSet(P1,P2,P3)
- void|||MPlayModDepthSet|||(MusicPlayerArea*,u16,u8)
- m4aMPlayLFOSpeedSet()|||MPlayLFOSpeedSet(P1,P2,P3)
- void|||MPlayLFOSpeedSet|||(MusicPlayerArea*,u16,u8)
- MusicPlayerArea|||m4a_mplay000
- MusicPlayerArea|||m4a_mplay001
- MusicPlayerArea|||m4a_mplay002
- MusicPlayerArea|||m4a_mplay003
- SongHeader|||wario
{% endcapture %}

{% capture section_3_cards %}
{% include source-code-card.html title="m4aLib.h" items=card_3_1_items functions="24" variables="12" lines="134" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_3_cards %}

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


{% capture card_4_1_items %}
- u16 const[640]|||BgScData_Sample
- u16 const[16][16]|||PlttData_Sample
{% endcapture %}

{% capture card_4_2_items %}
- u16|||Cont
- u16|||Trg
- u32[512]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- IntrFuncp const[13]|||IntrTable
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||FontSpread|||(u32,u32)
- void|||FontDisplay|||()
{% endcapture %}

{% capture section_4_cards %}
{% include source-code-card.html title="data.c" items=card_4_1_items functions="0" variables="2" lines="57" %}
{% include source-code-card.html title="main.c" items=card_4_2_items functions="6" variables="6" lines="188" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_4_cards %}

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


{% capture card_5_1_items %}
- void|||AgbMain|||()
{% endcapture %}

{% capture card_5_2_items %}
- int|||menu_cursor_pos
- int|||menu_prev_cursor_pos
- int|||menu_old_cursor_pos
- int|||menu_page
- int|||menu_prev_page
- void|||MenuInit|||()
- int|||Menu|||()
- void|||menu_v_sync_fnc|||()
- int|||menu_exit|||()
- int|||menu_init_param|||()
- int|||menu_to_prev_page|||()
- int|||menu_to_next_page|||()
- int|||menu_to_prev_item|||()
- int|||menu_to_next_item|||()
- int|||menu_control|||()
- int|||menu_strlen|||(char const*)
- void|||menu_print_expl|||()
- void|||menu_print_title|||()
- void|||menu_print|||()
{% endcapture %}

{% capture card_5_3_items %}
- MenuItem const[]|||mitem
{% endcapture %}

{% capture card_5_4_items %}
- s16 const[320]|||sin_cos_table
- void|||ClearRamAll|||()
- void|||ClearWorkRam|||()
- void|||ClearGraphicRam|||()
- void|||ClearVram|||()
- void|||ClearOamRam|||()
- void|||ClearPaletteRam|||()
- s16|||fix_mul|||(s16,s16)
- s16|||fix_div|||(s16,s16)
- s16|||fix_inverse|||(s16)
- vu16|||IntrCheck
- IntrFuncp|||v_blank_fnc
- u32[512]|||IntrMainBuf
- IntrFuncp const[14]|||IntrTable
- void|||InitVBlank|||()
- void|||SetVBlankFunc|||(IntrFuncp)
- void|||VBlankFunc|||()
- void|||dummy|||()
- void|||V_Intr_Clear|||()
- void|||V_Intr_Set|||()
- void|||V_Wait|||()
- vu16|||Cont
- vu16|||Trg
- void|||KeyInit|||()
- void|||KeyRead|||()
{% endcapture %}

{% capture section_5_cards %}
{% include source-code-card.html title="main.c" items=card_5_1_items functions="1" variables="0" lines="56" %}
{% include source-code-card.html title="menu.c" items=card_5_2_items functions="14" variables="5" lines="351" %}
{% include source-code-card.html title="menuitem.c" items=card_5_3_items functions="0" variables="1" lines="81" %}
{% include source-code-card.html title="share.c" items=card_5_4_items functions="18" variables="7" lines="278" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_5_cards %}

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


{% capture card_6_1_items %}
- char const*|||ap_title_str
- char const*|||ap_expl_str0
- char const**[]|||ap_expl_str_array
{% endcapture %}

{% capture card_6_2_items %}
- char*[4]|||ap_eff_tbl
- u16[1024]|||ap_BgBak
- OamData[128]|||ap_OamBak
- s16|||ap_eff_type
- s16|||ap_obj_alpha
- s16|||ap_eva
- s16|||ap_evb
- void|||apMain|||()
- void|||ap_v_blank_intr|||()
- void|||ap_ObjMove|||()
- void|||ap_moji_pr|||(s16,s16,char*)
- void|||ap_suji_pr|||(s16,s16,s32,s16)
{% endcapture %}

{% capture card_6_3_items %}
- u32 const[1][2]|||ap_OamData_Sample
- u32[296]|||ap_moji_Character
{% endcapture %}

{% capture section_6_cards %}
{% include source-code-card.html title="alexpl.c" items=card_6_1_items functions="0" variables="3" lines="30" %}
{% include source-code-card.html title="alpha.c" items=card_6_2_items functions="5" variables="7" lines="265" %}
{% include source-code-card.html title="alpha_data.c" items=card_6_3_items functions="0" variables="2" lines="87" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_6_cards %}

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


{% capture card_7_1_items %}
- u16 const[1024]|||map_data_front
- u16 const[1024]|||map_data_back
{% endcapture %}

{% capture card_7_2_items %}
- char const*|||bg_title_str
- char const*|||bg_expl_str0
- char const**[]|||bg_expl_str_array
{% endcapture %}

{% capture card_7_3_items %}
- vu32[4][2]|||bg_oam_buffer
- vu16|||bg_ball_anim_count
- vu16|||bg_ball_anim_count_change_mode
- s16|||bg_pos_x
- s16|||bg_pos_y
- vu16|||bg_screen_back_x
- u16|||bg_mosaic
- u16|||bg_scale_x
- u16|||bg_scale_y
- u16|||bg_rotate
- s16|||bg_pa
- s16|||bg_pb
- s16|||bg_pc
- s16|||bg_pd
- s32|||bg_start_x
- s32|||bg_start_y
- void|||bgMain|||()
- void|||bg_v_blank_intr|||()
- void|||bg_init_param|||()
- void|||bg_init_oam|||()
- int|||bg_key_control|||()
- void|||bg_create_data|||()
- void|||bg_increment_anim_count|||()
- void|||bg_exit_clear_register|||()
{% endcapture %}

{% capture section_7_cards %}
{% include source-code-card.html title="bg_map_map.c" items=card_7_1_items functions="0" variables="2" lines="74" %}
{% include source-code-card.html title="bgexpl.c" items=card_7_2_items functions="0" variables="3" lines="34" %}
{% include source-code-card.html title="bgmain.c" items=card_7_3_items functions="8" variables="16" lines="385" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_7_cards %}

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


{% capture card_8_1_items %}
- u8|||bm_Bgmode
- u32|||Zoom
- s32|||start_x
- s32|||start_y
- u16|||bg2pa
- u16|||bg2pb
- u16|||bg2pc
- u16|||bg2pd
- vs32|||bg2_center_x
- vs32|||bg2_center_y
- vu16|||rotate_value
- void|||bm_Main|||()
- void|||bm_v_blank_inter|||()
- void|||bm_init|||()
- int|||bm_key|||()
- void|||bm_mode_change|||(u8)
- void|||bm_rotate|||(s32)
- void|||bm_Bgmode3_Test|||()
- void|||bm_Bgmode4_Test|||()
- void|||bm_Bgmode5_Test|||()
{% endcapture %}

{% capture card_8_2_items %}
- char const*|||bm_title_str
- char const*|||bm_expl_str0
- char const**[]|||bm_expl_str_array
{% endcapture %}

{% capture section_8_cards %}
{% include source-code-card.html title="bitmap.c" items=card_8_1_items functions="9" variables="11" lines="202" %}
{% include source-code-card.html title="bmexpl.c" items=card_8_2_items functions="0" variables="3" lines="35" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_8_cards %}

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


{% capture card_9_1_items %}
- OamData[128]|||ce_OamBak
- s16|||ce_EVY_rate
- s16|||ce_eff_type
- s16|||ce_EVA_rate
- s16|||ce_EVB_rate
- u16[1024]|||ce_BgBak
- s16|||ce_obj_mode
- void|||ceMain|||()
- void|||ce_v_blank_intr|||()
- void|||ce_ObjMove|||()
- void|||ce_suji_pr|||(s16,s16,s32,s16)
- void|||ce_moji_pr|||(s16,s16,char*)
{% endcapture %}

{% capture card_9_2_items %}
- int const[1][2]|||ce_OamData_Sample
- char*[]|||ce_type_tbl
- int const[256]|||ce_bg1_Palette
- int const[3584]|||ce_bg1_Character
- int const[640]|||ce_bg1_Map
- int const[9152]|||ce_bg3_Character
- int const[640]|||ce_bg3_Map
- int const[256]|||ce_PS_hey5_Palette
- int const[2048]|||ce_PS_hey5_Char
- int[296]|||ce_moji_Character
{% endcapture %}

{% capture card_9_3_items %}
- u32 const[1][2]|||ce_OamData_Sample
- char*[4]|||ce_type_tbl
- u32[296]|||ce_moji_Character
{% endcapture %}

{% capture card_9_4_items %}
- char const*|||ce_title_str
- char const*|||ce_expl_str0
- char const**[]|||ce_expl_str_array
{% endcapture %}

{% capture section_9_cards %}
{% include source-code-card.html title="c_effect.c" items=card_9_1_items functions="5" variables="7" lines="289" %}
{% include source-code-card.html title="ce_dat.h" items=card_9_2_items functions="0" variables="10" lines="22" %}
{% include source-code-card.html title="ce_data.c" items=card_9_3_items functions="0" variables="3" lines="102" %}
{% include source-code-card.html title="ceexpl.c" items=card_9_4_items functions="0" variables="3" lines="33" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_9_cards %}

---
## Font prn (/functional_sample/fontprn)
This folder contains 

File Name | Extension | Description
---|---|---
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Used to build the source code in the folder (run make)
font8 | .h | Include file for declaring 
fontprn | .c, .h, .o | 


{% capture card_10_1_items %}
- int[15][1792]|||font8
{% endcapture %}

{% capture card_10_2_items %}
- u32 const[1][2]|||fontOamData
- fpData|||fpdata
- void|||FontPrintInit|||(u8,u8,u8,u8,u32,u8)
- void|||FontPalletLoad|||(u8)
- void|||FontColor|||(u8)
- void|||FontPrint|||(u8,u8,u8*)
- void|||NumPrint|||(u8,u8,s16,s16)
- void|||put_font_1d|||(u8,u8,u8*,u16)
- void|||put_font_2d|||(u8,u8,u8*,u16)
- void|||FontPrintC|||(u8,u8,u8,u8*)
- void|||NumPrintC|||(u8,u8,u8,s16,s16)
- void|||FontPrintCls|||()
- void|||FontPrintSync|||()
- char*|||fp_itoa|||(int,char*,int)
- char*|||_toa|||(unsigned int,char*,int)
- int|||_power|||(int,int)
{% endcapture %}

{% capture section_10_cards %}
{% include source-code-card.html title="font8.h" items=card_10_1_items functions="0" variables="1" lines="6858" %}
{% include source-code-card.html title="fontprn.c" items=card_10_2_items functions="14" variables="2" lines="503" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_10_cards %}

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


{% capture card_11_1_items %}
- char const*|||ob_title_str
- char const*|||ob_expl_str0
- char const**[]|||ob_expl_str_array
{% endcapture %}

{% capture card_11_2_items %}
- s16|||ob_pos_x
- s16|||ob_pos_y
- u16|||ob_affine
- u16|||ob_mosaic
- u16|||ob_scale_x
- u16|||ob_scale_y
- u16|||ob_rotate
- u16[16]|||ob_oam_buffer
- void|||obMain|||()
- void|||ob_v_blank_intr|||()
- void|||ob_init_param|||()
- void|||ob_init_oam|||()
- int|||ob_key_control|||()
- void|||ob_create_oam|||()
{% endcapture %}

{% capture section_11_cards %}
{% include source-code-card.html title="obexpl.c" items=card_11_1_items functions="0" variables="3" lines="35" %}
{% include source-code-card.html title="obmain.c" items=card_11_2_items functions="6" variables="8" lines="272" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_11_cards %}

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


{% capture card_12_1_items %}
- u16 const[256]|||sw_PS_hey5_Palette
- u8 const[2048]|||sw_PS_hey5_Char
- u16 const[10]|||sw_bg0_Palette
- u8 const[1120]|||sw_bg0_Character
- u16 const[640]|||sw_bg0_Map
- u8 const[384]|||sw_bg1_Character
- u16 const[640]|||sw_bg1_Map
- u8 const[384]|||sw_bg2_Character
- u16 const[640]|||sw_bg2_Map
- u8 const[384]|||sw_bg3_Character
- u16 const[640]|||sw_bg3_Map
{% endcapture %}

{% capture card_12_2_items %}
- char const*|||sw_title_str
- char const*|||sw_expl_str0
- char const**[]|||sw_expl_str_array
{% endcapture %}

{% capture card_12_3_items %}
- u32 const[1][2]|||sw_OamData_Sample
- OamData[128]|||sw_OamBak
- void|||swMain|||()
- void|||sw_v_blank_intr|||()
- void|||sw_ObjMove|||()
{% endcapture %}

{% capture section_12_cards %}
{% include source-code-card.html title="sw_dat.h" items=card_12_1_items functions="0" variables="11" lines="23" %}
{% include source-code-card.html title="swexpl.c" items=card_12_2_items functions="0" variables="3" lines="28" %}
{% include source-code-card.html title="window.c" items=card_12_3_items functions="3" variables="2" lines="149" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_12_cards %}

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


{% capture card_13_1_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[1][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_13_2_items %}
- u8 const[16]|||hexdata
- void|||DispCharSet8|||(OamData*,vu8*)
- void|||CharSet8BG|||(vu8*,vu8*)
{% endcapture %}

{% capture section_13_cards %}
{% include source-code-card.html title="data.c" items=card_13_1_items functions="0" variables="4" lines="514" %}
{% include source-code-card.html title="utility.c" items=card_13_2_items functions="2" variables="1" lines="40" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_13_cards %}

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


{% capture card_14_1_items %}
- u16[3]|||MultiBoot_required_data
- void|||MultiBootInit|||(MultiBootParam*)
- int|||MultiBootMain|||(MultiBootParam*)
- int|||MultiBootSend|||(MultiBootParam*,u16)
- void|||MultiBootStartProbe|||(MultiBootParam*)
- void|||MultiBootStartMaster|||(MultiBootParam*,u8*,int,u8,s8)
- int|||MultiBootCheckComplete|||(MultiBootParam*)
- int|||MultiBootHandShake|||(MultiBootParam*)
- void|||MultiBootWaitCycles|||(u32)
- void|||MultiBootWaitSendDone|||()
{% endcapture %}

{% capture card_14_2_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[72]|||IntrFuncBuf
- u8 const[15]|||MultiSioLib_Var
- void|||MultiSioInit|||()
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*)
- void|||MultiSioSendDataSet|||(void*)
- u32|||MultiSioRecvDataCheck|||(void*)
{% endcapture %}

{% capture card_14_3_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_14_4_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[4][2]|||HPos
- u16[4][2]|||VPos
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioFlags
- u32|||SioFlagsBak
- u8|||SioStartFlag
- IntrFuncp const[13]|||IntrTable
- IntrFuncp[14]|||IntrTableBuf
- void|||DemoMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
{% endcapture %}

{% capture card_14_5_items %}
- MultiBootParam|||multiboot_status
- u8*|||demo_bin_start
- u32|||demo_bin_length
- int|||frame_retval
- u8 const* const[]|||BgScDatap_ID
- void|||AgbMain|||()
{% endcapture %}

{% capture section_14_cards %}
{% include source-code-card.html title="MultiBoot.c" items=card_14_1_items functions="9" variables="1" lines="653" %}
{% include source-code-card.html title="MultiSio.c" items=card_14_2_items functions="6" variables="4" lines="291" %}
{% include source-code-card.html title="data.c" items=card_14_3_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="demo_main.c" items=card_14_4_items functions="5" variables="14" lines="229" %}
{% include source-code-card.html title="main.c" items=card_14_5_items functions="1" variables="5" lines="148" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_14_cards %}

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


{% capture card_15_1_items %}
- u16[3]|||MultiBoot_required_data
- void|||MultiBootInit|||(MultiBootParam*)
- int|||MultiBootMain|||(MultiBootParam*)
- int|||MultiBootSend|||(MultiBootParam*,u16)
- void|||MultiBootStartProbe|||(MultiBootParam*)
- void|||MultiBootStartMaster|||(MultiBootParam*,u8*,int,u8,s8)
- int|||MultiBootCheckComplete|||(MultiBootParam*)
- int|||MultiBootHandShake|||(MultiBootParam*)
- void|||MultiBootWaitCycles|||(u32)
- void|||MultiBootWaitSendDone|||()
{% endcapture %}

{% capture card_15_2_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[64]|||IntrFuncBuf
- u8 const[19]|||MultiSioLib_Var
- void|||MultiSioInit|||()
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*)
- void|||MultiSioSendDataSet|||(void*)
- u32|||MultiSioRecvDataCheck|||(void*)
- void|||MultiSioVSync|||()
- void|||MultiSioIntr|||()
{% endcapture %}

{% capture card_15_3_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_15_4_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioFlags
- u8|||SioStartFlag
- IntrFuncp const[13]|||IntrTable
- IntrFuncp[14]|||IntrTableBuf
- void|||DemoMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
{% endcapture %}

{% capture card_15_5_items %}
- MultiBootParam|||multiboot_status
- u8*|||demo_bin_start
- u32|||demo_bin_length
- int|||frame_retval
- u8 const* const[]|||BgScDatap_ID
- void|||AgbMain|||()
{% endcapture %}

{% capture card_15_6_items %}

{% endcapture %}

{% capture section_15_cards %}
{% include source-code-card.html title="MultiBoot.c" items=card_15_1_items functions="9" variables="1" lines="653" %}
{% include source-code-card.html title="MultiSio.c" items=card_15_2_items functions="8" variables="4" lines="289" %}
{% include source-code-card.html title="data.c" items=card_15_3_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="demo_main.c" items=card_15_4_items functions="5" variables="11" lines="217" %}
{% include source-code-card.html title="main.c" items=card_15_5_items functions="1" variables="5" lines="154" %}
{% include source-code-card.html title="types.h" items=card_15_6_items functions="0" variables="0" lines="18" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_15_cards %}

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


{% capture card_16_1_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[72]|||IntrFuncBuf
- u8 const[15]|||MultiSioLib_Var
- void|||MultiSioInit|||()
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*)
- void|||MultiSioSendDataSet|||(void*)
- u32|||MultiSioRecvDataCheck|||(void*)
{% endcapture %}

{% capture card_16_2_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_16_3_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[4][2]|||HPos
- u16[4][2]|||VPos
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioFlags
- u32|||SioFlagsBak
- u8|||SioStartFlag
- IntrFuncp const[13]|||IntrTable
- IntrFuncp[14]|||IntrTableBuf
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
{% endcapture %}

{% capture section_16_cards %}
{% include source-code-card.html title="MultiSio.c" items=card_16_1_items functions="6" variables="4" lines="291" %}
{% include source-code-card.html title="data.c" items=card_16_2_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="main.c" items=card_16_3_items functions="5" variables="14" lines="226" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_16_cards %}

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


{% capture card_17_1_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[64]|||IntrFuncBuf
- u8 const[19]|||MultiSioLib_Var
- void|||MultiSioInit|||()
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*)
- void|||MultiSioSendDataSet|||(void*)
- u32|||MultiSioRecvDataCheck|||(void*)
- void|||MultiSioVSync|||()
- void|||MultiSioIntr|||()
{% endcapture %}

{% capture card_17_2_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_17_3_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioFlags
- u8|||SioStartFlag
- IntrFuncp const[13]|||IntrTable
- IntrFuncp[14]|||IntrTableBuf
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
{% endcapture %}

{% capture section_17_cards %}
{% include source-code-card.html title="MultiSio.c" items=card_17_1_items functions="8" variables="4" lines="291" %}
{% include source-code-card.html title="data.c" items=card_17_2_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="main.c" items=card_17_3_items functions="5" variables="11" lines="218" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_17_cards %}

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


{% capture card_18_1_items %}
- IntrFuncp const[13]|||BgMoveIntrTable
- BgOffsetCnt[4]|||BgMoveOffsetBak
- u16[4][1024]|||BgMoveBgBak
- u8|||BgMove|||()
- void|||BgMoveVBlankIntr|||()
- void|||BgSnakeMove|||()
{% endcapture %}

{% capture card_18_2_items %}
- LinkData const[2]|||LinkData_Title
- u16 const[16][16]|||PlttData_Sample
- u32 const[1][2]|||OamData_Sample
- u16 const[640]|||BgScData_Title
- u16 const[640]|||BgScData_ObjMove
- u16 const[640]|||BgScData_BgMove0
- u16 const[640]|||BgScData_BgMove1
- u16 const[640]|||BgScData_BgMove2
- u16 const[640]|||BgScData_BgMove3
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_18_3_items %}
- u8|||SceneNo
- u16|||Cont
- u16|||Trg
- IntrFuncp[13]|||IntrTableBuf
- u32[512]|||IntrMainBuf
- s32[4]|||DataSecDummy
- void|||AgbMain|||()
{% endcapture %}

{% capture card_18_4_items %}
- IntrFuncp const[13]|||ObjMoveIntrTable
- OamData[128]|||ObjMoveOamBak
- u16[1024]|||ObjMoveBgBak
- u8|||ObjMove|||()
- void|||ObjMoveVBlankIntr|||()
- void|||ObjSnakeMove|||()
{% endcapture %}

{% capture card_18_5_items %}
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||ObjCursolMove|||(OamData*,LinkData*,u8*)
{% endcapture %}

{% capture card_18_6_items %}
- IntrFuncp const[13]|||TitleIntrTable
- u16[1024]|||TitleBgBak
- OamData[128]|||TitleOamBak
- u8|||Cursolp
- u8|||Title|||()
- void|||TitleVBlankIntr|||()
{% endcapture %}

{% capture card_18_7_items %}

{% endcapture %}

{% capture section_18_cards %}
{% include source-code-card.html title="bgmove.c" items=card_18_1_items functions="3" variables="3" lines="118" %}
{% include source-code-card.html title="data.c" items=card_18_2_items functions="0" variables="10" lines="636" %}
{% include source-code-card.html title="main.c" items=card_18_3_items functions="1" variables="6" lines="82" %}
{% include source-code-card.html title="objmove.c" items=card_18_4_items functions="3" variables="3" lines="119" %}
{% include source-code-card.html title="sub.c" items=card_18_5_items functions="3" variables="0" lines="76" %}
{% include source-code-card.html title="title.c" items=card_18_6_items functions="2" variables="4" lines="82" %}
{% include source-code-card.html title="types.h" items=card_18_7_items functions="0" variables="0" lines="27" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_18_cards %}

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


{% capture card_19_1_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[1][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_19_2_items %}
- u16|||Cont
- u16|||Trg
- u32[512]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- IntrFuncp const[13]|||IntrTable
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||KeyRead|||()
- void|||IntrDummy|||()
- void|||ObjSnakeMove|||()
{% endcapture %}

{% capture section_19_cards %}
{% include source-code-card.html title="data.c" items=card_19_1_items functions="0" variables="4" lines="514" %}
{% include source-code-card.html title="main.c" items=card_19_2_items functions="5" variables="6" lines="179" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_19_cards %}

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


{% capture card_20_1_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[1][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_20_2_items %}
- u16|||Cont
- u16|||Trg
- u32[512]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- IntrFuncp const[13]|||IntrTable
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||ObjSnakeMove|||()
{% endcapture %}

{% capture section_20_cards %}
{% include source-code-card.html title="data.c" items=card_20_1_items functions="0" variables="4" lines="514" %}
{% include source-code-card.html title="main.c" items=card_20_2_items functions="5" variables="6" lines="174" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_20_cards %}

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


{% capture card_21_1_items %}
- u16[3]|||MultiBoot_required_data
- void|||MultiBootInit|||(MultiBootParam*)
- int|||MultiBootMain|||(MultiBootParam*)
- int|||MultiBootSend|||(MultiBootParam*,u16)
- void|||MultiBootStartProbe|||(MultiBootParam*)
- void|||MultiBootStartMaster|||(MultiBootParam*,u8*,int,u8,s8)
- int|||MultiBootCheckComplete|||(MultiBootParam*)
- int|||MultiBootHandShake|||(MultiBootParam*)
- void|||MultiBootWaitCycles|||(u32)
- void|||MultiBootWaitSendDone|||()
{% endcapture %}

{% capture card_21_2_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[72]|||IntrFuncBuf
- u8 const[25]|||MultiSioLib_Var
- void|||MultiSioInit|||(u32)
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*,u32)
- void|||MultiSioSendDataSet|||(void*,u32)
- u32|||MultiSioRecvDataCheck|||(void*)
{% endcapture %}

{% capture card_21_3_items %}
- Sio32MultiLoadArea|||S32ml
- u8 const[21]|||MultiSioLib_Var
- void|||Sio32MultiLoadInit|||(u32,void*)
- u32|||Sio32MultiLoadMain|||(u32*)
- void|||Sio32MultiLoadIntr|||()
{% endcapture %}

{% capture card_21_4_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioFlags
- u32|||SioFlagsBak
- u8|||SioStartFlag
{% endcapture %}

{% capture card_21_5_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_21_6_items %}
- u16[4][2]|||HPos
- u16[4][2]|||VPos
- void|||DemoMain|||()
{% endcapture %}

{% capture card_21_7_items %}
- IntrFuncp[13]|||IntrTableBuf
- IntrFuncp const[13]|||IntrTable
{% endcapture %}

{% capture card_21_8_items %}
- u8 const* const[4]|||LoadTable
{% endcapture %}

{% capture card_21_9_items %}
- u8 const* const[4]|||LoadTable
{% endcapture %}

{% capture card_21_10_items %}
- u8*|||LoadCounterp
- u8|||RecvLoadCounter
- u8|||BurstLoad
- u32|||ProgressCounter
- void|||LoaderMain|||()
{% endcapture %}

{% capture card_21_11_items %}
- MultiBootParam|||multiboot_status
- u8*|||demo_bin_start
- u32|||demo_bin_length
- int|||frame_retval
- u8 const* const[]|||BgScDatap_ID
- void|||AgbMain|||()
{% endcapture %}

{% capture card_21_12_items %}
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
- void|||Data2BgSc|||(u32,u16*,u8,u8)
{% endcapture %}

{% capture section_21_cards %}
{% include source-code-card.html title="MultiBoot.c" items=card_21_1_items functions="9" variables="1" lines="653" %}
{% include source-code-card.html title="MultiSio.c" items=card_21_2_items functions="6" variables="4" lines="316" %}
{% include source-code-card.html title="Sio32MultiLoad.c" items=card_21_3_items functions="3" variables="2" lines="213" %}
{% include source-code-card.html title="bss.c" items=card_21_4_items functions="0" variables="10" lines="29" %}
{% include source-code-card.html title="data.c" items=card_21_5_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="demo_main.c" items=card_21_6_items functions="1" variables="2" lines="135" %}
{% include source-code-card.html title="intr_table.c" items=card_21_7_items functions="0" variables="2" lines="32" %}
{% include source-code-card.html title="load_table_dest.c" items=card_21_8_items functions="0" variables="1" lines="19" %}
{% include source-code-card.html title="load_table_src.c" items=card_21_9_items functions="0" variables="1" lines="20" %}
{% include source-code-card.html title="loader_main.c" items=card_21_10_items functions="1" variables="4" lines="190" %}
{% include source-code-card.html title="main.c" items=card_21_11_items functions="1" variables="5" lines="134" %}
{% include source-code-card.html title="sub.c" items=card_21_12_items functions="5" variables="0" lines="77" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_21_cards %}

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


{% capture card_22_1_items %}
- u16[3]|||MultiBoot_required_data
- void|||MultiBootInit|||(MultiBootParam*)
- int|||MultiBootMain|||(MultiBootParam*)
- int|||MultiBootSend|||(MultiBootParam*,u16)
- void|||MultiBootStartProbe|||(MultiBootParam*)
- void|||MultiBootStartMaster|||(MultiBootParam*,u8*,int,u8,s8)
- int|||MultiBootCheckComplete|||(MultiBootParam*)
- int|||MultiBootHandShake|||(MultiBootParam*)
- void|||MultiBootWaitCycles|||(u32)
- void|||MultiBootWaitSendDone|||()
{% endcapture %}

{% capture card_22_2_items %}
- MultiSioArea|||Ms
- u32[16]|||RecvFuncBuf
- u32[64]|||IntrFuncBuf
- u8 const[29]|||MultiSioLib_Var
- void|||MultiSioInit|||(u32)
- void|||MultiSioStart|||()
- void|||MultiSioStop|||()
- u32|||MultiSioMain|||(void*,void*,u32)
- void|||MultiSioSendDataSet|||(void*,u32)
- u32|||MultiSioRecvDataCheck|||(void*)
- void|||MultiSioVSync|||()
- void|||MultiSioIntr|||()
{% endcapture %}

{% capture card_22_3_items %}
- Sio32MultiLoadArea|||S32ml
- u8 const[21]|||MultiSioLib_Var
- void|||Sio32MultiLoadInit|||(u32,void*)
- u32|||Sio32MultiLoadMain|||(u32*)
- void|||Sio32MultiLoadIntr|||()
{% endcapture %}

{% capture card_22_4_items %}
- u16|||Cont
- u16|||Trg
- u32[256]|||IntrMainBuf
- u16[1024]|||BgBak
- OamData[128]|||OamBak
- u16[8]|||UsrSendBuf
- u16[4][8]|||UsrRecvBuf
- u32|||SioState
- u32|||SioFlags
- u32|||SioFlagsBak
- u8|||SioStartFlag
{% endcapture %}

{% capture card_22_5_items %}
- u16 const[640]|||BgScData_Sample
- u32 const[4][2]|||OamData_Sample
- u16 const[16][16]|||PlttData_Sample
- u32 const[1792]|||CharData_Sample
{% endcapture %}

{% capture card_22_6_items %}
- void|||DemoMain|||()
{% endcapture %}

{% capture card_22_7_items %}
- IntrFuncp[13]|||IntrTableBuf
- IntrFuncp const[13]|||IntrTable
{% endcapture %}

{% capture card_22_8_items %}
- u8 const* const[4]|||LoadTable
{% endcapture %}

{% capture card_22_9_items %}
- u8 const* const[4]|||LoadTable
{% endcapture %}

{% capture card_22_10_items %}
- u8*|||LoadCounterp
- u8|||RecvLoadCounter
- u8|||BurstLoad
- u32|||ProgressCounter
- void|||LoaderMain|||()
{% endcapture %}

{% capture card_22_11_items %}
- MultiBootParam|||multiboot_status
- u8*|||demo_bin_start
- u32|||demo_bin_length
- int|||frame_retval
- u8 const* const[]|||BgScDatap_ID
- void|||AgbMain|||()
{% endcapture %}

{% capture card_22_12_items %}
- void|||VBlankIntr|||()
- void|||IntrDummy|||()
- void|||KeyRead|||()
- void|||BgScSet|||(u8*,u16*,u8)
- void|||Data2BgSc|||(u32,u16*,u8,u8)
{% endcapture %}

{% capture section_22_cards %}
{% include source-code-card.html title="MultiBoot.c" items=card_22_1_items functions="9" variables="1" lines="653" %}
{% include source-code-card.html title="MultiSio.c" items=card_22_2_items functions="8" variables="4" lines="317" %}
{% include source-code-card.html title="Sio32MultiLoad.c" items=card_22_3_items functions="3" variables="2" lines="215" %}
{% include source-code-card.html title="bss.c" items=card_22_4_items functions="0" variables="11" lines="30" %}
{% include source-code-card.html title="data.c" items=card_22_5_items functions="0" variables="4" lines="536" %}
{% include source-code-card.html title="demo_main.c" items=card_22_6_items functions="1" variables="0" lines="112" %}
{% include source-code-card.html title="intr_table.c" items=card_22_7_items functions="0" variables="2" lines="32" %}
{% include source-code-card.html title="load_table_dest.c" items=card_22_8_items functions="0" variables="1" lines="19" %}
{% include source-code-card.html title="load_table_src.c" items=card_22_9_items functions="0" variables="1" lines="20" %}
{% include source-code-card.html title="loader_main.c" items=card_22_10_items functions="1" variables="4" lines="192" %}
{% include source-code-card.html title="main.c" items=card_22_11_items functions="1" variables="5" lines="136" %}
{% include source-code-card.html title="sub.c" items=card_22_12_items functions="5" variables="0" lines="88" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_22_cards %}
