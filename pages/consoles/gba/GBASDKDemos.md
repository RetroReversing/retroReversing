---
layout: post
tags: 
- gba
- sdk
title: Game Boy Advance SDK Demos
category: gba
image: /public/images/gba/Game Boy Advance SDK Demos.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK Demos.jpg
permalink: /game-boy-advance-sdk-demos
breadcrumbs:
  - name: Home
    url: /
  - name: SDKs
    url: /sdks
  - name: Game Boy Advance (GBA)
    url: /gba
  - name: Game Boy Advance SDK Demos
    url: #
videocarousel:
  - title: Yoshi Demo
    image: http://img.youtube.com/vi/M_7uK6fvF8A/hqdefault.jpg
    youtube: 'M_7uK6fvF8A'
  - title: Dolphin Demo
    image: http://img.youtube.com/vi/9dwOMPNvtfc/hqdefault.jpg
    youtube: '9dwOMPNvtfc'
recommend: 
- sdk
- gba
- introduction
editlink: /consoles/gba/GBASDKDemos.md
updatedAt: '2021-03-28'
---
Version 3.0 of the Game Boy Advance Software Development Kit (SDK) was leaked on to the internet for everyone to enjoy.

There are some very interesting findings in this SDK, but this post will cover something particularly interesting, the demo games developed by Nintendo to show off the power of the GBA to developers.

If you look in the **src/demos** folder you will find two pretty cool GBA game source code projects. One is a **Yoshi's Story** example and the other is called **Dolphin** featuring Ricky the Dolphin!.

---
# Dolphin Demo
Dolphin is a demo game for the Game Boy Advance with very strong similarities to the Ecco the Dolphin series. You control a Dolphin called Ricky and can move through the water and go through rings. It is simple but a very nice tech demo for the possibilities of the GBA hardware.

You can see it in action in the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/9dwOMPNvtfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This folder contains the main source code and build scripts required to compile the Dolphin example into a working GBA ROM.

File Name | Extension | Description
---|---|---
Agb_c2_s | .bat | Window Batch script to use Cygwin GCC to compile main.c
Gasdepend | N/A | Lists dependencies for the GNU assembler to know when to reassemble crt0.s
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Main Makefile used to build the project
bg | .c, .h, .o | Code for drawing Background images, such as water and coral floor
crt0 | .o, .s | Implements the start function and bootstraps the program, all GBA games need this as it sets up the interrupts and jumps to the main function
dolphin | .bin, .elf, .map | The generated game in both ELF and .bin (GBA ROM) formats, along with the linker map file containing all the final locations of code inside the game
dolphin_readme | .txt | A Brief introduction to the game and how to play it
enemy | .c, .h, .o | Main enemy logic such as drawing and hit detection
enemy_dat | .c, .o | Enemy animation data (references images for each frame)
game_dat | .c, .o | Just contains pre-computer sin and cos tables
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
hitcheck | .c, .h, .o | Main collision detection logic
main | .c, .h, .o | This contains the **AgbMain** function which starts the game along with the other main game logic
player | .c, .h, .o | Main player logic such as drawing and moving
player_dat | .c, .o | Just contains player animation data, references to each of the images used and the delay of each frame
ring | .c, .h, .o | Contains all the logic for the rings, including drawing them and what happens when the dolphin moves through them
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs

<!-- cspell:disable -->
{% capture card_1_1_items %}
- BgAnmPat[4]|||wave2nd_pat
- Bg|||Light
- Bg|||Coral
- Bg|||OceanA
- Bg|||OceanB
- Bg|||Sky
- u16[1024]|||UmiA_ScreenDat
- u16[1024]|||Bg2_ScreenDat
- u16[1024]|||Sky_ScreenDat
- u16[1024]|||Sango_ScreenDat
- s32|||ocean_xPos
- s32|||sora_xPos
- u8|||DisplayArea
- BgAnm|||wave2nd
- void|||initwave2nd|||(BgAnm*)
- void|||Anm_wave2nd|||(BgAnm*)
- void|||InitBg|||()
- void|||BgProc|||(s32,s32)
- void|||Change_Bg_VRAM|||(s32,s32)
- void|||UpdateBg|||(s32,s32)
- void|||InitSky|||()
- void|||Init_Sky_ScreenDat|||()
- void|||DrawSky|||(s32,s32)
- void|||DeleteSky|||(s32,s32)
- void|||SoraRight|||()
- void|||SoraLeft|||()
- void|||InitCoral|||()
- void|||InitCoralScreenDat|||()
- void|||DrawCoral|||(s32,s32)
- void|||DeleteCoral|||(s32,s32)
- void|||CoralRight|||()
- void|||CoralLeft|||()
- void|||CoralUpDown|||()
- void|||InitLight|||()
- void|||InitLightScreenDat|||()
- void|||DrawLight|||(s32,s32)
- void|||DeleteLight|||(s32,s32)
- void|||InitOceanA|||()
- void|||InitOceanAScreenDat|||()
- void|||OceanA_Idle|||(Bg*,s32,s32)
- void|||DrawOceanA|||(s32,s32)
- void|||DeleteOceanA|||(s32,s32)
- void|||OceanA_Up|||(Bg*)
- void|||OceanA_Down|||(Bg*)
- void|||InitOceanB|||()
- void|||InitOceanBScreenDat|||()
- void|||DrawOceanB|||(s32,s32)
- void|||DeleteOceanB|||(s32,s32)
- void|||OceanB_Up|||()
- void|||OceanB_Down|||()
{% endcapture %}

{% capture card_1_2_items %}
- Enemy[10]|||dEnemy
- Awa[16]|||awa
- Fukiya[4]|||fukiya
- u32 const[1][2]|||Oam_def
- u32 const[1][2]|||Oam_32x32dot
- u32 const[1][2]|||Oam_16x16dot
- u32 const[1][2]|||Oam_8x8dot
- u8[12]|||anm_state
- void|||InitEnemy|||()
- void|||EnemyProc|||()
- void|||CreateTeki|||(Enemy*,CharMapData*)
- void|||HitCheck_Enemy|||(Enemy*)
- void|||HitEnemy|||(Enemy*)
- void|||DeadCheckEnemy|||(Enemy*)
- void|||ControlEnemyMove|||(Enemy*)
- void|||MoveShell1|||(Enemy*,u8)
- void|||MoveShell2|||(Enemy*,u8)
- void|||ShellAttackMove|||(Enemy*,u8)
- void|||DeadMove|||(Enemy*,u8)
- void|||LcdCheckEnemy|||(Enemy*,Player*)
- void|||ShellAnim|||(Enemy*)
- void|||ShellBaseAnim|||(Enemy*)
- void|||ShellAttackAnim|||(Enemy*)
- void|||ShellDamageAnim|||(Enemy*)
- void|||ShellDeadAnim|||(Enemy*)
- void|||DrawEnemy|||(OamData*,Enemy*)
- void|||EraseEnemy|||(OamData*,Enemy*)
- void|||InitAwa|||()
- void|||AwaProc|||()
- void|||CreateAwa|||(Enemy*)
- void|||AwaMove|||(Awa*)
- void|||DrawAwa|||(OamData*,Awa*)
- void|||InitFukiya|||()
- void|||FukiyaProc|||()
- void|||CreateFukiya|||(Fukiya*,Enemy*)
- void|||FukiyaMove|||(Fukiya*)
- void|||DrawFukiya|||(OamData*,Fukiya*)
{% endcapture %}

{% capture card_1_3_items %}
- u8 const*[10]|||shell_base_pix_tbl
- Anmpat[10]|||shell_base_anm_pat
- u8 const*[21]|||shell_attack_pix_tbl
- Anmpat[13]|||shell_attack_anm_pat
- u8 const*[21]|||shell_yarare_pix_tbl
- Anmpat[21]|||shell_yarare_anm_pat
- CharMapData[12]|||shell_map_dat
- Enemy_Oam_Data[10]|||enemy_Oam_Data
{% endcapture %}

{% capture card_1_4_items %}
- u32 const[1][2]|||Oam_16x8dot
- u32 const[1][2]|||OamData_Sample
- short[256]|||sin_tbl
- short[256]|||cos_tbl
- u8[256]|||sintable
{% endcapture %}

{% capture card_1_5_items %}
- void|||Fukiya2Dolphin|||(Player*,Fukiya*)
- void|||Dolphin2Enemy|||(Player*,Enemy*)
- void|||Ring2Dolphin|||(Ring*,Player*)
- u8|||RingPass|||(Ring*,Player*)
{% endcapture %}

{% capture card_1_6_items %}
- vu16|||IntrCheck
- u16|||Cont
- u16|||Trg
- u32[512]|||IntrMainBuf
- ObjBuf|||Oam
- u8[256]|||rasttable
- u8|||v_phase
- s8|||amp_r
- s8|||hz
- u8|||state
- s16|||counter
- u8|||offset
- void(*[2])()|||pGame_func_tbl
- IntrFuncp const[15]|||IntrTable
- void|||AgbMain|||()
- void|||VBlankIntr|||()
- void|||HBlankIntr|||()
- void|||VCountIntr|||()
- void|||IntrDammy|||()
- void|||KeyRead|||()
- void|||GameInit|||()
- void|||GameMain|||()
- void|||GameOver|||()
{% endcapture %}

{% capture card_1_7_items %}
- u8 const*[6]|||r_kihon_pixel_tbl
- u8 const*[8]|||r_kihon_idle_pixel_tbl
- u8 const*[6]|||r_attack_pixel_tbl
- u8 const*[9]|||r_down_pixel_tbl
- u8 const*[29]|||r_up_down_pixel_tbl
- u8 const*[19]|||r_jump_pixel_tbl
- AnmTable2[7]|||rick_normal_move_pat
- AnmTable2[8]|||rick_kihon_idle_pat
- AnmTable2[19]|||rick_jump_anm_pat
- AnmTable[6]|||rick_attack_pat
- AnmTable[11]|||rick_kihon_fast_pat
- AnmTable[25]|||rick_jump_pat
{% endcapture %}

{% capture card_1_8_items %}
- Player|||player
- Player_Awa[4]|||player_awa
- void|||InitPlayer|||()
- void|||PlayerProc|||()
- void|||DrawPlayer|||()
- void|||RestrictPlayerPosition|||(Player*)
- void|||PlayerActionControl|||()
- void|||Chang_Dir|||(Player*)
- void|||MovePlayer|||()
- void|||ChangeWaterSpeed|||()
- void|||Action1|||()
- void|||JumpPlayer|||()
- void|||Action3|||()
- void|||InitPlayerAnim|||()
- void|||PlayerAnim|||()
- void|||Player_kihon_anm|||()
- void|||Player_kihon_idle_anm|||()
- void|||Player_updown_anm|||()
- void|||Player_jump_anm|||()
- void|||Player_idle_anm|||()
- void|||Player_attack_anm|||()
- void|||Player_move_rl_anm|||()
- void|||Player_head_attack_anm|||()
- void|||Ajust_Light_Reflection|||(Player*)
- void|||BlinkPlayer|||(Player*)
- void|||InitPlayer_Awa|||()
- void|||Player_AwaProc|||()
- void|||CreatePlayer_Awa|||(Player_Awa*,Player*)
- void|||Player_AwaMove|||(Player_Awa*,Player*)
- void|||DrawPlayer_Awa|||(OamData*,Player_Awa*)
{% endcapture %}

{% capture card_1_9_items %}
- Ring[20]|||ring
- RingMapData[30]|||ring_map_dat
- u32 const[1][2]|||Oam_32x64dot
- void|||InitRing|||()
- void|||RingProc|||()
- void|||RingStateControl|||(Ring*)
- void|||CreateRing|||(Player*)
- void|||DrawRing|||(Ring*)
- void|||RingNormal|||(Ring*,u8)
- void|||RingPassed|||(Ring*,u8)
- void|||RingHit|||(Ring*,u8)
{% endcapture %}

{% capture section_1_cards %}
{% include_cached source-code-card.html title="bg.c" items=card_1_1_items functions="36" variables="14" lines="790" %}
{% include_cached source-code-card.html title="enemy.c" items=card_1_2_items functions="29" variables="8" lines="733" %}
{% include_cached source-code-card.html title="enemy_dat.c" items=card_1_3_items functions="0" variables="8" lines="143" %}
{% include_cached source-code-card.html title="game_dat.c" items=card_1_4_items functions="0" variables="5" lines="112" %}
{% include_cached source-code-card.html title="hitcheck.c" items=card_1_5_items functions="4" variables="0" lines="201" %}
{% include_cached source-code-card.html title="main.c" items=card_1_6_items functions="9" variables="14" lines="325" %}
{% include_cached source-code-card.html title="player_dat.c" items=card_1_7_items functions="0" variables="12" lines="270" %}
{% include_cached source-code-card.html title="player.c" items=card_1_8_items functions="28" variables="2" lines="852" %}
{% include_cached source-code-card.html title="ring.c" items=card_1_9_items functions="8" variables="3" lines="260" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=section_1_cards %}
<!-- cspell:enable -->

---
## Dolphin/Doc
This folder contains a brief document describing the Dolphin demo and the features it shows off.

The document is simply called **DemoProgramDolphin.doc**, it is only 2 pages long and mainly contains details about how to play the game.

However there are a few interesting parts including a very basic UML diagram for the game flow created in Microsoft Word.

The document mentions a few key features of the demo:
* Usage of light reflections for the dolphin underwater
* Character animation via DMA transfer to VRAM
* H-Blank raster scroll processing 

It's funny how in the game source code the Dolphin's name is Ricky but they only refer to him a "Dolphin" in the document, why give him a name like Ricky in the first place?

---
## Bg_parts (dolphin/bg_parts)
This folder contains each part of the Background that makes up the game, in the original BMP format and the converted C source code equivalent and its compiled object. 

The BMP files are the only files of interest here as they would be fed to a tool called **bmp2map** that automatically converts it to a C-file (basically just encodes each byte of the BMP as an element of an array in C). The generated C files would then be compiled using the standard GBA toolchain compilers (GCC) and the object file (.o) would be created as the result.

These object files would then be linked with the rest of the game code to generate the final ELF executable of the game, which would then be converted to a valid GBA ROM, whew!

File Name | Extension | Description
---|---|---
light4 | .bmp, .c, .o | A texture used to map on to Ricky when he is swimming under water to mimic underwater light
sango1024x256 | .bmp, .c, .o | The Coral right at the bottom of the sea
sora | .bmp, .c, .o | The sky image
umiA_ | .bmp, .c, .o | water image
umi_ab_256x512 | .bmp, .c, .o | Contains the water and sea floor
wave2nd1 | .bmp, .c, .o | Wave image used for animating at the top of the water
wave2nd2 | .bmp, .c, .o | Wave image used for animating at the top of the water
wave2nd3 | .bmp, .c, .o | Wave image used for animating at the top of the water


---
## Images (dolphin/img)
This folder contains all the sprite images used in the game. In the foot folder we have a few Misc sprites such as a bubble and the ring sprites, most of the other sprites are in the **Oumgai** and **Ricky** folders.

File Name | Extension | Description
---|---|---
awa | .bmp | Bubble sprite
ring_32_64_left | .bmp | left sprite of the ring
ring_32_64_right | .bmp | right sprite of the ring


---
#### Oumgai sprites (dolphin/img/Oumgai)
In the Oumgai folder we have tons of animation frames for a sea creature known as a **Nautilus** in English and **Oumgai** in Japanese. 

These are all in BMP but the resulting .c and .o files are in the **dolphin/Obj** folder.

File Name | Extension | Description
---|---|---
/Oumgai/O_fukiya | .bmp | A pink japanese Blowgun?!
/Oumgai/O_kihon/O_kihon00(0-10) | .bmp | Normal animation frames
/Oumgai/O_kougeki/O_kougeki000(0-20) | .bmp | Animation frames of movement
/Oumgai/O_yarare/O_yarare0(0-20) | .bmp | Animation frames of movement

---
#### Ricky sprites (dolphin/img/Ricky)
In the Ricky folder we have tons of animation frames for the Ricky sprite, moving up/down/jumping etc. 

These are all in BMP but the resulting .c and .o files are in the **dolphin/Obj** folder.

File Name | Extension | Description
---|---|---
/Ricky/R_attack/R_attack(0-7) | .bmp | This folder contains animation frame of Ricky's right attack
/Ricky/R_down/R_down(0-8) | .bmp | This folder contains animation frames of Ricky looking down.
/Ricky/R_up/R_up(0-8) | .bmp | This folder contains animation frames of Ricky looking up.
/Ricky/R_go_down/R_go_down(0-7)| .bmp | This folder contains animation frames of Ricky moving down
/Ricky/R_go_up/R_go_up(0-7)| .bmp | This folder contains animation frames of Ricky moving up
/Ricky/R_jump/R_jump(0-10)| .bmp | This folder contains animation frames of Ricky jumping
/Ricky/small/r_small(0-7) | .bmp | This folder contains small images of Ricky, not currently sure why
/Ricky/R_kihon/R_kihon(0-7) | .bmp | This folder contains animation frames of Ricky moving forward

---
## Obj (dolphin/obj)
This folder contains the generated output of all the image folder's BMP files, the GBA SDK tends to refer to Sprites as **Objects** hence the name of this folder. 

These were generated by a tool called **bmp2agb** and then compiled from .c to .o in order to be linked into the final game. 

There is no point in listing these files as they are exactly the same as the BMP files listed in the IMG folder.

---
# Yoshi (/yoshi)
This folder contains a demo game based on the Nintendo 64 title **Yoshi's story**, this was a very impressive example running on the GBA hardware.

You can see it in action in the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ikG2TURwovc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

All the source code is here to build the example yourself and it makes an excellent project to learn how to reverse GBA games as you can see the original source code.

File Name | Extension | Description
---|---|---
Gasdepend | N/A | Lists dependencies for the GNU assembler to know when to reassemble crt0.s
Makedepend | N/A | Lists dependencies to tell Make when to re-compile files
Makefile | N/A | Main Makefile used to build the project
Readme | .txt | Fairly detailed instructions for the game and how to build it
bg_proc | .c, .o | Logic for drawing the background layers
crt0 | .o, .s | Implements the start function and bootstraps the program, all GBA games need this as it sets up the interrupts and jumps to the main function
etc_bmp | .h | Include file that just exports pointers to each of the bmp images
gdbrc | N/A | Configuration for the GNU debugger for debugging the game
isle_bmp | .h | Include file for declaring pointers to every image of the rotating island sprite
ldscript | .x | Ld script that tells the Linker where to place data in the resulting ELF
menu | .c, .o | 
menu_bmp | .h | Include file for declaring pointers to every image of the menu
menu_dat | .c, .h, .o | 
oam_proc | .c, .h, .o | 
reverbpatch | .o | 
rom_header | .s | Assembly code that implements the common GBA ROM reader required of all GBA ROMs
soundpatch | .o | 
yos_anm | .c, .h, .o | 
yos_bmp | .h | Include file for declaring pointers to every image of the main game sprites
yos_game | .c, .ext, .h, .o | 
yos_game_dat | .c, .h, .o | 
yos_game_mov | .c, .h, .o | 
yos_game_pr | .c, .h, .o | 
yos_game_sub | .c, .h, .o | 
yos_main | .c, .ext, .h, .o | 
yos_main_dat | .c, .h, .o | Just contains pre-generated sin/cos tables
yos_sound | .h | Include file for declaring a few preprocessor macros used for sound effects
yos_type | .h | Include file for declaring a few custom coordinate types such as **xyPos_tag**
yoshi | .bin, .elf, .map | The main game executable in ELF format and the converted GBA rom file (.bin) along with the symbol MAP which shows where the code is inside the game

It is worth reading the **Readme.txt** file in this directory, most of the time Readmes are not that interesting but in this case you would be worse off not reading it. It provides an excellent overview of what the demo is showcasing and how it all works.

<!-- cspell:disable -->



<!-- cspell:enable -->

---
## BMP images (yoshi/bmp/\*)
This folder contains images used in the game in bmp format and the compiled versions in .c and .o formats (created with **bmp2map**).

File Name | Extension | Description
---|---|---
\*/Makefile | N/A | Makefile to convert .bmp files into .o files by running **bmp2map**
\*/bmpfiles | N/A | List of all the BMP files to convert (read from the Makefile)
islebmp/libislebmp | .a | Static Library archive of all the island animation images
islebmp/yoshi_island_990907_0_(1-60) | .bmp, .o | Each image is a frame in an animation of the island spinning around
menubmp/grade | .bmp, .o | Gradient image used for the menu
menubmp/kumo | .bmp, .o | Static-like texture used for the menu
menubmp/libmenubmp | .a | Static Library archive of all the menu images
menubmp/umi64 | .bmp, .o | Water image used for the menu
yosbgbmp/bg1 | .bmp, .c, .o, .plb | The background image used for the platforms/path that Yoshi walks on
yosbgbmp/bg2 | .bmp, .c, .o | The background image used for the hills in the background
yosbgbmp/bg2_5 | .bmp | The background image used for the hills in the background but with a texture applied to it
yosbgbmp/bg3 | .bmp, .c, .o | The background image used for the Sky (says made in japan on it)
yosbgbmp/libyosbgbmp | .a | Static Library archive of all the background images used in the level
yosbgbmp/tmp | .bmp | I think this is a tileset image?

What is the **bg1.plb** file and what is it used for? Possibly collision detection?

---
### Yosbmp (yoshi/bmp/yosbmp)
This folder contains sprites used in the Yoshi level including all the animation frames.

This folder contains .imb files which are the result of calling **bmp2bin** on the BMP images and .o files which are the result of calling **objcopy** on the same images.

File Name | Extension | Description
---|---|---
CCCC_A | .bmp, .imb, .o | 
CCCC_B | .bmp, .imb, .o | 
CCCC_C | .bmp, .imb, .o | 
DDDD_A | .bmp, .imb, .o | 
DDDD_B | .bmp, .imb, .o | 
DDDD_C | .bmp, .imb, .o | 
HANABIRA1 | .bmp, .imb, .o | 
HANABIRA2 | .bmp, .imb, .o | 
HANABIRA3 | .bmp, .imb, .o | 
HANABIRAn_1 | .bmp, .imb, .o | 
HANABIRAn_2 | .bmp, .imb, .o | 
HANABIRAn_3 | .bmp, .imb, .o | 
HANABIRAy_1 | .bmp, .imb, .o | 
HANABIRAy_2 | .bmp, .imb, .o | 
HANABIRAy_3 | .bmp, .imb, .o | 
HEIHO929_001 | .bmp, .imb, .o | 
HEIHO929_001_b | .bmp, .imb, .o | 
HEIHO929_001_g | .bmp, .imb, .o | 
HEIHO929_001_y | .bmp, .imb, .o | 
HEIHO929_003 | .bmp, .imb, .o | 
HEIHO929_003_b | .bmp, .imb, .o | 
HEIHO929_003_g | .bmp, .imb, .o | 
HEIHO929_003_y | .bmp, .imb, .o | 
HEIHO929_005 | .bmp, .imb, .o | 
HEIHO929_005_b | .bmp, .imb, .o | 
HEIHO929_005_g | .bmp, .imb, .o | 
HEIHO929_005_y | .bmp, .imb, .o | 
HEIHO929_007 | .bmp, .imb, .o | 
HEIHO929_007_b | .bmp, .imb, .o | 
HEIHO929_007_g | .bmp, .imb, .o | 
HEIHO929_007_y | .bmp, .imb, .o | 
HEIHO929_009 | .bmp, .imb, .o | 
HEIHO929_009_b | .bmp, .imb, .o | 
HEIHO929_009_g | .bmp, .imb, .o | 
HEIHO929_009_y | .bmp, .imb, .o | 
HEIHO929_011 | .bmp, .imb, .o | 
HEIHO929_011_b | .bmp, .imb, .o | 
HEIHO929_011_g | .bmp, .imb, .o | 
HEIHO929_011_y | .bmp, .imb, .o | 
HEIHO929_013 | .bmp, .imb, .o | 
HEIHO929_013_b | .bmp, .imb, .o | 
HEIHO929_013_g | .bmp, .imb, .o | 
HEIHO929_013_y | .bmp, .imb, .o | 
HEIHO929_015 | .bmp, .imb, .o | 
HEIHO929_015_b | .bmp, .imb, .o | 
HEIHO929_015_g | .bmp, .imb, .o | 
HEIHO929_015_y | .bmp, .imb, .o | 
HEIHO_l_001 | .bmp, .imb, .o | 
HEIHO_l_003 | .bmp, .imb, .o | 
HEIHO_l_005 | .bmp, .imb, .o | 
HEIHO_l_007 | .bmp, .imb, .o | 
HEIHO_l_009 | .bmp, .imb, .o | 
HEIHO_l_011 | .bmp, .imb, .o | 
HEIHO_l_013 | .bmp, .imb, .o | 
HEIHO_l_015 | .bmp, .imb, .o | 
HEIHO_l_turn_002 | .bmp, .imb, .o | 
HEIHO_l_turn_003 | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_002 | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_002_b | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_002_g | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_002_y | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_003 | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_003_b | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_003_g | .bmp, .imb, .o | 
HEIHO_normal_walk_turn_003_y | .bmp, .imb, .o | 
Makefile | N/A | 
NNNN_A | .bmp, .imb, .o | 
NNNN_B | .bmp, .o | 
NNNN_C | .bmp, .o | 
PS_MEPACHI_B2 | .bmp, .o | 
PS_MEPACHI_B3 | .bmp, .o | 
PS_MEPACHI_B4 | .bmp, .o | 
PS_MEPACHI_B5 | .bmp, .o | 
PS_MEPACHI_B6 | .bmp, .o | 
PS_MEPACHI_M2 | .bmp, .o | 
PS_MEPACHI_M3 | .bmp, .o | 
PS_MEPACHI_M4 | .bmp, .o | 
PS_MEPACHI_M5 | .bmp, .o | 
PS_MEPACHI_M6 | .bmp, .o | 
PS_MEPACHI_Y2 | .bmp, .o | 
PS_MEPACHI_Y3 | .bmp, .o | 
PS_MEPACHI_Y4 | .bmp, .o | 
PS_MEPACHI_Y5 | .bmp, .o | 
PS_MEPACHI_Y6 | .bmp, .o | 
PS_U_turn1 | .bmp, .o | 
PS_U_turn2 | .bmp, .o | 
PS_U_turn3 | .bmp, .o | 
PS_U_turn4 | .bmp, .o | 
PS_U_turn5 | .bmp, .o | 
PS_U_turn6 | .bmp, .o | 
PS_U_turn7 | .bmp, .o | 
PS_U_turn8 | .bmp, .o | 
PS_hey1 | .bmp, .o | 
PS_hey2 | .bmp, .o | 
PS_hey3 | .bmp, .o | 
PS_hey4 | .bmp, .o | 
PS_hey5 | .bmp, .o | 
PS_hey6 | .bmp, .o | 
PS_hey7 | .bmp, .o | 
PS_hey8 | .bmp, .o | 
PS_jump1 | .bmp, .o | 
PS_jump2 | .bmp, .o | 
PS_jump3 | .bmp, .o | 
PS_jump4 | .bmp, .o | 
PS_jump5 | .bmp, .o | 
PS_jump6 | .bmp, .o | 
PS_jump7 | .bmp, .o | 
PS_jump8 | .bmp, .o | 
PS_kihon_M | .bmp, .o | 
PS_kihon_Y | .bmp, .o | 
PS_kyoro_B | .bmp, .o | 
PS_kyoro_B10 | .bmp, .o | 
PS_kyoro_B11 | .bmp, .o | 
PS_kyoro_B2 | .bmp, .o | 
PS_kyoro_B3 | .bmp, .o | 
PS_kyoro_B4 | .bmp, .o | 
PS_kyoro_B5 | .bmp, .o | 
PS_kyoro_B6 | .bmp, .o | 
PS_kyoro_B7 | .bmp, .o | 
PS_kyoro_B8 | .bmp, .o | 
PS_kyoro_B9 | .bmp, .o | 
PS_kyoro_M10 | .bmp, .o | 
PS_kyoro_M11 | .bmp, .o | 
PS_kyoro_M2 | .bmp, .o | 
PS_kyoro_M3 | .bmp, .o | 
PS_kyoro_M4 | .bmp, .o | 
PS_kyoro_M5 | .bmp, .o | 
PS_kyoro_M6 | .bmp, .o | 
PS_kyoro_M7 | .bmp, .o | 
PS_kyoro_M8 | .bmp, .o | 
PS_kyoro_M9 | .bmp, .o | 
PS_kyoro_Y10 | .bmp, .o | 
PS_kyoro_Y11 | .bmp, .o | 
PS_kyoro_Y2 | .bmp, .o | 
PS_kyoro_Y3 | .bmp, .o | 
PS_kyoro_Y4 | .bmp, .o | 
PS_kyoro_Y5 | .bmp, .o | 
PS_kyoro_Y6 | .bmp, .o | 
PS_kyoro_Y7 | .bmp, .o | 
PS_kyoro_Y8 | .bmp, .o | 
PS_kyoro_Y9 | .bmp, .o | 
PS_kyoro_YR10 | .bmp, .o | 
PS_kyoro_YR11 | .bmp, .o | 
PS_kyoro_YR2 | .bmp, .o | 
PS_kyoro_YR3 | .bmp, .o | 
PS_kyoro_YR4 | .bmp, .o | 
PS_kyoro_YR5 | .bmp, .o | 
PS_kyoro_YR6 | .bmp, .o | 
PS_kyoro_YR7 | .bmp, .o | 
PS_kyoro_YR8 | .bmp, .o | 
PS_kyoro_YR9 | .bmp, .o | 
PS_turn1 | .bmp, .o | 
PS_turn2 | .bmp, .o | 
PS_turn3 | .bmp, .o | 
PS_turn4 | .bmp, .o | 
PS_turn5 | .bmp, .o | 
PS_turn6 | .bmp, .o | 
PS_turn7 | .bmp, .o | 
PS_turn_L1 | .bmp, .o | 
PS_turn_L2 | .bmp, .o | 
PS_turn_L3 | .bmp, .o | 
PS_turn_L4 | .bmp, .o | 
PS_turn_L5 | .bmp, .o | 
PS_turn_L6 | .bmp, .o | 
PS_turn_L7 | .bmp, .o | 
PS_turn_back1 | .bmp, .o | 
PS_turn_back2 | .bmp, .o | 
PS_turn_back3 | .bmp, .o | 
PS_turn_back4 | .bmp, .o | 
PS_turn_back5 | .bmp, .o | 
PS_turn_back6 | .bmp, .o | 
PS_turn_back7 | .bmp, .o | 
PS_turn_mae1 | .bmp, .o | 
PS_turn_mae2 | .bmp, .o | 
PS_turn_mae3 | .bmp, .o | 
PS_turn_mae4 | .bmp, .o | 
PS_turn_mae5 | .bmp, .o | 
PS_turn_mae6 | .bmp, .o | 
PS_turn_mae7 | .bmp, .o | 
PS_walk_B1 | .bmp, .o | 
PS_walk_B10 | .bmp, .o | 
PS_walk_B11 | .bmp, .o | 
PS_walk_B12 | .bmp, .o | 
PS_walk_B13 | .bmp, .o | 
PS_walk_B14 | .bmp, .o | 
PS_walk_B15 | .bmp, .o | 
PS_walk_B16 | .bmp, .o | 
PS_walk_B2 | .bmp, .o | 
PS_walk_B3 | .bmp, .o | 
PS_walk_B4 | .bmp, .o | 
PS_walk_B5 | .bmp, .o | 
PS_walk_B6 | .bmp, .o | 
PS_walk_B7 | .bmp, .o | 
PS_walk_B8 | .bmp, .o | 
PS_walk_B9 | .bmp, .o | 
PS_walk_M1 | .bmp, .o | 
PS_walk_M10 | .bmp, .o | 
PS_walk_M11 | .bmp, .o | 
PS_walk_M12 | .bmp, .o | 
PS_walk_M13 | .bmp, .o | 
PS_walk_M14 | .bmp, .o | 
PS_walk_M15 | .bmp, .o | 
PS_walk_M16 | .bmp, .o | 
PS_walk_M2 | .bmp, .o | 
PS_walk_M3 | .bmp, .o | 
PS_walk_M4 | .bmp, .o | 
PS_walk_M5 | .bmp, .o | 
PS_walk_M6 | .bmp, .o | 
PS_walk_M7 | .bmp, .o | 
PS_walk_M8 | .bmp, .o | 
PS_walk_M9 | .bmp, .o | 
PS_walk_Y1 | .bmp, .o | 
PS_walk_Y10 | .bmp, .o | 
PS_walk_Y11 | .bmp, .o | 
PS_walk_Y12 | .bmp, .o | 
PS_walk_Y13 | .bmp, .o | 
PS_walk_Y14 | .bmp, .o | 
PS_walk_Y15 | .bmp, .o | 
PS_walk_Y16 | .bmp, .o | 
PS_walk_Y2 | .bmp, .o | 
PS_walk_Y3 | .bmp, .o | 
PS_walk_Y4 | .bmp, .o | 
PS_walk_Y5 | .bmp, .o | 
PS_walk_Y6 | .bmp, .o | 
PS_walk_Y7 | .bmp, .o | 
PS_walk_Y8 | .bmp, .o | 
PS_walk_Y9 | .bmp, .o | 
SSSS_A | .bmp, .o | 
SSSS_B | .bmp, .o | 
SSSS_C | .bmp, .o | 
balloon | .bmp, .o | 
balloon01 | .bmp, .o | 
balloon02 | .bmp, .o | 
balloon03 | .bmp, .o | 
balloon04 | .bmp, .o | 
balloon05 | .bmp, .o | 
balloon06 | .bmp, .o | 
balloon07 | .bmp, .o | 
balloon08 | .bmp, .o | 
balloon09 | .bmp, .o | 
balloon10 | .bmp, .o | 
balloon11 | .bmp, .o | 
balloon12 | .bmp, .o | 
balloon13 | .bmp, .o | 
batabata1 | .bmp, .o | 
batabata2 | .bmp, .o | 
batabata3 | .bmp, .o | 
batabata4 | .bmp, .o | 
batabata5 | .bmp, .o | 
batabata6 | .bmp, .o | 
batabata7 | .bmp, .o | 
batabata8 | .bmp, .o | 
bmpfiles | N/A | 
bomb_1 | .bmp, .o | 
bomb_2 | .bmp, .o | 
bomb_3 | .bmp, .o | 
bomb_4 | .bmp, .o | 
bomb_5 | .bmp, .o | 
casle1 | .bmp, .o | 
casle1p | .bmp, .o | 
casle3 | .bmp, .o | 
casle3p | .bmp, .o | 
casle4 | .bmp, .o | 
casle4p | .bmp, .o | 
casle5 | .bmp, .o | 
casle5p | .bmp, .o | 
casle6 | .bmp, .o | 
casle6p | .bmp, .o | 
casle7 | .bmp, .o | 
casle7p | .bmp, .o | 
dokan | .bmp, .o | 
egg | .bmp, .o | 
hana | .bmp, .o | 
hosi1 | .bmp, .o | 
hosi2 | .bmp, .o | 
hosi3 | .bmp, .o | 
hosi4 | .bmp, .o | 
hosi5 | .bmp, .o | 
hosi6 | .bmp, .o | 
hosi7 | .bmp, .o | 
hosi8 | .bmp, .o | 
kage0 | .bmp, .o | 
kagel | .bmp, .o | 
killer_l1 | .bmp, .o | 
killer_l2 | .bmp, .o | 
killer_l3 | .bmp, .o | 
killer_lA | .bmp, .o | 
killer_lAA | .bmp, .o | 
killer_lB | .bmp, .o | 
killer_lC | .bmp, .o | 
killer_lD | .bmp, .o | 
killer_lE | .bmp, .o | 
killer_s1 | .bmp, .o | 
killer_s2 | .bmp, .o | 
killer_s3 | .bmp, .o | 
killer_sA | .bmp, .o | 
killer_sAA | .bmp, .o | 
killer_sB | .bmp, .o | 
killer_sC | .bmp, .o | 
killer_sD | .bmp, .o | 
killer_sE | .bmp, .o | 
kokamek_a | .bmp, .o | 
kokamek_c | .bmp, .o | 
kokamek_d | .bmp, .o | 
kokamek_e | .bmp, .o | 
koumori | .bmp, .o | 
kuki | .bmp, .o | 
kumo_nuki_l | .bmp, .o | 
kumo_nuki_r | .bmp, .o | 
kururi1 | .bmp, .o | 
kururi2 | .bmp, .o | 
kururi3 | .bmp, .o | 
kururi4 | .bmp, .o | 
kururi5 | .bmp, .o | 
kururi6 | .bmp, .o | 
kururi7 | .bmp, .o | 
kururi8 | .bmp, .o | 
libyosbmp | .a | 
mBOX1 | .bmp, .o | 
mBOX2 | .bmp, .o | 
omori5t | .bmp, .o | 
sPPPP_A | .bmp, .o | 
sPPPP_B | .bmp, .o | 
sPPPP_C | .bmp, .o | 
toge | .bmp, .o | 


---
## Sound (yoshi/sound)
Just as the name might imply this folder contains the sounds used in the demo, it is using a GBA Sound library library called **m4alib** which you can find out more about in our other post.

{% include_cached link-to-other-post.html post="/game-boy-advance-sdk-m4a" description="For more information about the M4A Sound library check out this post." %}

This folder only contains the pre-compiled object files, presumably these have been converted from a sound format and compiled into these for easy linking with the rest of the game. 

Sadly the original sound files don't seem to exist.

File Name | Extension | Description
---|---|---
SoundDat | .o | 
Soundfiles | N/A | List of all sound object files to link to the game, used by the Makefile
bm_atri | .o | 
c_gaonn | .o | 
e_derup | .o | 
e_onpp1 | .o | 
e_torup | .o | 
ht_atar | .o | 
ht_ware | .o | 
i_b_sx | .o | 
i_bell | .o | 
i_bscl | .o | 
i_drm1 | .o | 
i_drm2 | .o | 
i_elsn | .o | 
i_mari | .o | 
i_strg | .o | 
i_timp | .o | 
i_vb_t | .o | 
i_vibe | .o | 
ki_sid2 | .o | 
km_ukuu | .o | 
m4aLib | .h, .o | 
m5t_dsin | .o | 
mc_gaonn | .o | 
me_derup | .o | 
me_onpp1 | .o | 
me_onpp2 | .o | 
me_onpp3 | .o | 
me_torup | .o | 
mh_kaitn | .o | 
mht_apir | .o | 
mht_atar | .o | 
mht_ware | .o | 
mki_sid1 | .o | 
mki_sid2 | .o | 
mkm_ukuu | .o | 
mm_1game | .o | 
mm_gover | .o | 
mm_title | .o | 
mov_arra | .o | 
mtg_raka | .o | 
mtp_stat | .o | 
my_dmgn1 | .o | 
my_dmgn2 | .o | 
my_dwnau | .o | 
my_hipha | .o | 
my_hipkr | .o | 
my_jmpfm | .o | 
my_jmph1 | .o | 
my_jmpst | .o | 
my_jmpy1 | .o | 
my_pakon | .o | 
my_stph1 | .o | 
my_stpn1 | .o | 
my_tont1 | .o | 
my_tont2 | .o | 
my_upup | .o | 
ov_arra | .o | 
ov_basa | .o | 
ov_hkob | .o | 
ov_konn | .o | 
ov_shaa | .o | 
ov_sir2 | .o | 
t5_dsin | .o | 
t5_undr | .o | 
tg_raka | .o | 
y_dmgn1 | .o | 
y_dmgn2 | .o | 
y_dwnau | .o | 
y_hipha | .o | 
y_hipkr | .o | 
y_jmpfm | .o | 
y_jmph1 | .o | 
y_jmpst | .o | 
y_jmpy1 | .o | 
y_pakon | .o | 
y_runtn | .o | 
y_stph1 | .o | 
y_stpn1 | .o | 
y_stpqu | .o | 
y_tont1 | .o | 
y_tont2 | .o | 
y_upup | .o | 
y_ywiha | .o | 

---
# Zelda 2 Tech demo

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A long-rumored Zelda II tech demo for GBA has finally surfaced, ROM and source code included!<br><br>It&#39;s a included as reference in the GBA SDK, found on a Spongebob GBA dev disc uploaded by <a href="https://twitter.com/JacobLenstar?ref_src=twsrc%5Etfw">@JacobLenstar</a>.<br><br>ROM + Source:<a href="https://t.co/p9aCkSF8Q1">https://t.co/p9aCkSF8Q1</a><br><br>Full archive:<a href="https://t.co/7hquBy9lnX">https://t.co/7hquBy9lnX</a> <a href="https://t.co/mrvtbkudJ8">pic.twitter.com/mrvtbkudJ8</a></p>&mdash; MrTalida (@MrTalida) <a href="https://twitter.com/MrTalida/status/1208849338073411584?ref_src=twsrc%5Etfw">December 22, 2019</a></blockquote> 
