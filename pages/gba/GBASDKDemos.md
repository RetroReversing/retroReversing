---
layout: post
tags: 
- gba
- sdk
- demos
title: Game Boy Advance SDK Demos
thumbnail: /public/consoles/Game Boy Advance.png
image: /public/images/gba/Game Boy Advance SDK Demos.jpg
twitterimage: https://www.retroreversing.com/public/images/gba/Game Boy Advance SDK Demos.jpg
permalink: /game-boy-advance-sdk-demos/
breadcrumbs:
  - name: Home
    url: /
  - name: Game Boy Advance (GBA)
    url: /gba
  - name: Game Boy Advance SDK Demos
    url: #
videocarousel:
  - title: Yoshi Demo
    image: http://img.youtube.com/vi/M_7uK6fvF8A/hqdefault.jpg
    youtube: 'M_7uK6fvF8A'
recommend: 
- sdk
- gba
editlink: /gba/GBASDKDemos.md
---
Version 3.0 of the Game Boy Advance Software Development Kit (SDK) was leaked on to the internet for everyone to enjoy.

There are some very interesting findings in this SDK, but this post will cover something particularly interesting, the demo games developed by Nintendo to show off the power of the GBA to developers.

If you look in the **src/demos** folder you will find two pretty cool GBA game source code projects. One is a Yoshi's Story example and the other is called Dolphin.

# Dolphin
Dolphin is a demo game for the Game Boy Advance with very strong similarities to the Ecco the Dolphin series. You control a Dolphin called Ricky and can move through the water and go through rings. It is simple but a very nice tech demo for the possibilities of the GBA hardware.

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
enemy | .c, .h, .o | 
enemy_dat | .c, .o | 
game_dat | .c, .o | 
gdbrc | N/A | 
hitcheck | .c, .h, .o | Collision detection logic
main | .c, .h, .o | 
player | .c, .h, .o | 
player_dat | .c, .o | 
ring | .c, .h, .o | 
rom_header | .s | 

<div class="rr-source-code-title">Code Files</div>
<section class="rr-main-cards">
		
<div class="rr-file-card">
  <img class="geopattern" data-title="bg.c" />
  <div><h3>bg.c</h3><ul>
    <li><span>BgAnmPat[4]</span> wave2nd_pat</li> 
    <li><span>Bg</span> Light</li> 
    <li><span>Bg</span> Coral</li> 
    <li><span>Bg</span> OceanA</li> 
    <li><span>Bg</span> OceanB</li> 
    <li><span>Bg</span> Sky</li> 
    <li><span>u16[1024]</span> UmiA_ScreenDat</li> 
    <li><span>u16[1024]</span> Bg2_ScreenDat</li> 
    <li><span>u16[1024]</span> Sky_ScreenDat</li> 
    <li><span>u16[1024]</span> Sango_ScreenDat</li> 
    <li><span>s32</span> ocean_xPos</li> 
    <li><span>s32</span> sora_xPos</li> 
    <li><span>u8</span> DisplayArea</li> 
    <li><span>BgAnm</span> wave2nd</li> 
    <li><span>void</span> initwave2nd<span class="rr-func-args">(BgAnm*)</span></li> 
    <li><span>void</span> Anm_wave2nd<span class="rr-func-args">(BgAnm*)</span></li> 
    <li><span>void</span> InitBg<span class="rr-func-args">()</span></li> 
    <li><span>void</span> BgProc<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> Change_Bg_VRAM<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> UpdateBg<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> InitSky<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Init_Sky_ScreenDat<span class="rr-func-args">()</span></li> 
    <li><span>void</span> DrawSky<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> DeleteSky<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> SoraRight<span class="rr-func-args">()</span></li> 
    <li><span>void</span> SoraLeft<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitCoral<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitCoralScreenDat<span class="rr-func-args">()</span></li> 
    <li><span>void</span> DrawCoral<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> DeleteCoral<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> CoralRight<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CoralLeft<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CoralUpDown<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitLight<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitLightScreenDat<span class="rr-func-args">()</span></li> 
    <li><span>void</span> DrawLight<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> DeleteLight<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> InitOceanA<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitOceanAScreenDat<span class="rr-func-args">()</span></li> 
    <li><span>void</span> OceanA_Idle<span class="rr-func-args">(Bg*,s32,s32)</span></li> 
    <li><span>void</span> DrawOceanA<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> DeleteOceanA<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> OceanA_Up<span class="rr-func-args">(Bg*)</span></li> 
    <li><span>void</span> OceanA_Down<span class="rr-func-args">(Bg*)</span></li> 
    <li><span>void</span> InitOceanB<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitOceanBScreenDat<span class="rr-func-args">()</span></li> 
    <li><span>void</span> DrawOceanB<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> DeleteOceanB<span class="rr-func-args">(s32,s32)</span></li> 
    <li><span>void</span> OceanB_Up<span class="rr-func-args">()</span></li> 
    <li><span>void</span> OceanB_Down<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">36</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">790</div>  </div>
</div>
    
<div class="rr-file-card">
  <img class="geopattern" data-title="enemy.c" />
  <div><h3>enemy.c</h3><ul>
    <li><span>Enemy[10]</span> dEnemy</li> 
    <li><span>Awa[16]</span> awa</li> 
    <li><span>Fukiya[4]</span> fukiya</li> 
    <li><span>u32 const[1][2]</span> Oam_def</li> 
    <li><span>u32 const[1][2]</span> Oam_32x32dot</li> 
    <li><span>u32 const[1][2]</span> Oam_16x16dot</li> 
    <li><span>u32 const[1][2]</span> Oam_8x8dot</li> 
    <li><span>u8[12]</span> anm_state</li> 
    <li><span>void</span> InitEnemy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> EnemyProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CreateTeki<span class="rr-func-args">(Enemy*,CharMapData*)</span></li> 
    <li><span>void</span> HitCheck_Enemy<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> HitEnemy<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> DeadCheckEnemy<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> ControlEnemyMove<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> MoveShell1<span class="rr-func-args">(Enemy*,u8)</span></li> 
    <li><span>void</span> MoveShell2<span class="rr-func-args">(Enemy*,u8)</span></li> 
    <li><span>void</span> ShellAttackMove<span class="rr-func-args">(Enemy*,u8)</span></li> 
    <li><span>void</span> DeadMove<span class="rr-func-args">(Enemy*,u8)</span></li> 
    <li><span>void</span> LcdCheckEnemy<span class="rr-func-args">(Enemy*,Player*)</span></li> 
    <li><span>void</span> ShellAnim<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> ShellBaseAnim<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> ShellAttackAnim<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> ShellDamageAnim<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> ShellDeadAnim<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> DrawEnemy<span class="rr-func-args">(OamData*,Enemy*)</span></li> 
    <li><span>void</span> EraseEnemy<span class="rr-func-args">(OamData*,Enemy*)</span></li> 
    <li><span>void</span> InitAwa<span class="rr-func-args">()</span></li> 
    <li><span>void</span> AwaProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CreateAwa<span class="rr-func-args">(Enemy*)</span></li> 
    <li><span>void</span> AwaMove<span class="rr-func-args">(Awa*)</span></li> 
    <li><span>void</span> DrawAwa<span class="rr-func-args">(OamData*,Awa*)</span></li> 
    <li><span>void</span> InitFukiya<span class="rr-func-args">()</span></li> 
    <li><span>void</span> FukiyaProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CreateFukiya<span class="rr-func-args">(Fukiya*,Enemy*)</span></li> 
    <li><span>void</span> FukiyaMove<span class="rr-func-args">(Fukiya*)</span></li> 
    <li><span>void</span> DrawFukiya<span class="rr-func-args">(OamData*,Fukiya*)</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">29</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">733</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="enemy_dat.c" />
  <div><h3>enemy_dat.c</h3><ul>
    <li><span>u8 const*[10]</span> shell_base_pix_tbl</li> 
    <li><span>Anmpat[10]</span> shell_base_anm_pat</li> 
    <li><span>u8 const*[21]</span> shell_attack_pix_tbl</li> 
    <li><span>Anmpat[13]</span> shell_attack_anm_pat</li> 
    <li><span>u8 const*[21]</span> shell_yarare_pix_tbl</li> 
    <li><span>Anmpat[21]</span> shell_yarare_anm_pat</li> 
    <li><span>CharMapData[12]</span> shell_map_dat</li> 
    <li><span>Enemy_Oam_Data[10]</span> enemy_Oam_Data</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">143</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="game_dat.c" />
  <div><h3>game_dat.c</h3><ul>
    <li><span>u32 const[1][2]</span> Oam_16x8dot</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>short[256]</span> sin_tbl</li> 
    <li><span>short[256]</span> cos_tbl</li> 
    <li><span>u8[256]</span> sintable</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">112</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="hitcheck.c" />
  <div><h3>hitcheck.c</h3><ul>
    <li><span>void</span> Fukiya2Dolphin<span class="rr-func-args">(Player*,Fukiya*)</span></li> 
    <li><span>void</span> Dolphin2Enemy<span class="rr-func-args">(Player*,Enemy*)</span></li> 
    <li><span>void</span> Ring2Dolphin<span class="rr-func-args">(Ring*,Player*)</span></li> 
    <li><span>u8</span> RingPass<span class="rr-func-args">(Ring*,Player*)</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">201</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <div><h3>main.c</h3><ul>
    <li><span>vu16</span> IntrCheck</li> 
    <li><span>u16</span> Cont</li> 
    <li><span>u16</span> Trg</li> 
    <li><span>u32[512]</span> IntrMainBuf</li> 
    <li><span>ObjBuf</span> Oam</li> 
    <li><span>u8[256]</span> rasttable</li> 
    <li><span>u8</span> v_phase</li> 
    <li><span>s8</span> amp_r</li> 
    <li><span>s8</span> hz</li> 
    <li><span>u8</span> state</li> 
    <li><span>s16</span> counter</li> 
    <li><span>u8</span> offset</li> 
    <li><span>void(*[2])()</span> pGame_func_tbl</li> 
    <li><span>IntrFuncp const[15]</span> IntrTable</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> HBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VCountIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDammy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> GameInit<span class="rr-func-args">()</span></li> 
    <li><span>void</span> GameMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> GameOver<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">325</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="player_dat.c" />
  <div><h3>player_dat.c</h3><ul>
    <li><span>u8 const*[6]</span> r_kihon_pixel_tbl</li> 
    <li><span>u8 const*[8]</span> r_kihon_idle_pixel_tbl</li> 
    <li><span>u8 const*[6]</span> r_attack_pixel_tbl</li> 
    <li><span>u8 const*[9]</span> r_down_pixel_tbl</li> 
    <li><span>u8 const*[29]</span> r_up_down_pixel_tbl</li> 
    <li><span>u8 const*[19]</span> r_jump_pixel_tbl</li> 
    <li><span>AnmTable2[7]</span> rick_normal_move_pat</li> 
    <li><span>AnmTable2[8]</span> rick_kihon_idle_pat</li> 
    <li><span>AnmTable2[19]</span> rick_jump_anm_pat</li> 
    <li><span>AnmTable[6]</span> rick_attack_pat</li> 
    <li><span>AnmTable[11]</span> rick_kihon_fast_pat</li> 
    <li><span>AnmTable[25]</span> rick_jump_pat</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">12</div>    <div class="rr-file-stat rr-file-stats-lines">270</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="player.c" />
  <div><h3>player.c</h3><ul>
    <li><span>Player</span> player</li> 
    <li><span>Player_Awa[4]</span> player_awa</li> 
    <li><span>void</span> InitPlayer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> PlayerProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> DrawPlayer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> RestrictPlayerPosition<span class="rr-func-args">(Player*)</span></li> 
    <li><span>void</span> PlayerActionControl<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Chang_Dir<span class="rr-func-args">(Player*)</span></li> 
    <li><span>void</span> MovePlayer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> ChangeWaterSpeed<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Action1<span class="rr-func-args">()</span></li> 
    <li><span>void</span> JumpPlayer<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Action3<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitPlayerAnim<span class="rr-func-args">()</span></li> 
    <li><span>void</span> PlayerAnim<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_kihon_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_kihon_idle_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_updown_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_jump_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_idle_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_attack_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_move_rl_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_head_attack_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Ajust_Light_Reflection<span class="rr-func-args">(Player*)</span></li> 
    <li><span>void</span> BlinkPlayer<span class="rr-func-args">(Player*)</span></li> 
    <li><span>void</span> InitPlayer_Awa<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Player_AwaProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> CreatePlayer_Awa<span class="rr-func-args">(Player_Awa*,Player*)</span></li> 
    <li><span>void</span> Player_AwaMove<span class="rr-func-args">(Player_Awa*,Player*)</span></li> 
    <li><span>void</span> DrawPlayer_Awa<span class="rr-func-args">(OamData*,Player_Awa*)</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">28</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">852</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="ring.c" />
  <div><h3>ring.c</h3><ul>
    <li><span>Ring[20]</span> ring</li> 
    <li><span>RingMapData[30]</span> ring_map_dat</li> 
    <li><span>u32 const[1][2]</span> Oam_32x64dot</li> 
    <li><span>void</span> InitRing<span class="rr-func-args">()</span></li> 
    <li><span>void</span> RingProc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> RingStateControl<span class="rr-func-args">(Ring*)</span></li> 
    <li><span>void</span> CreateRing<span class="rr-func-args">(Player*)</span></li> 
    <li><span>void</span> DrawRing<span class="rr-func-args">(Ring*)</span></li> 
    <li><span>void</span> RingNormal<span class="rr-func-args">(Ring*,u8)</span></li> 
    <li><span>void</span> RingPassed<span class="rr-func-args">(Ring*,u8)</span></li> 
    <li><span>void</span> RingHit<span class="rr-func-args">(Ring*,u8)</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">260</div>  </div>
</div>
    
</section>


---
## Dolphin/Doc
This folder contains a brief document describing the Dolphin demo and the features it shows off.

The document is simply called **DemoProgramDolphin.doc**.

---
## Bg_parts (dolphin/bg_parts)
This folder contains each part of the Background that makes up the game, in the original BMP format and the converted C source code equivalent and it's compiled object. 

The BMP files are the only files of interest here as they would be fed to a tool that automatically converts it to a C-file (basically just encodes each byte of the BMP as an element of an array in C). The generated C files would then be compiled using the standard GBA toolchain compilers (GCC) and the object file (.o) would be created as the result.

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
This folder contains all the sprite images used in the game. In the foot folder we have a few Misc sprites such as a buddle and the ring sprites, most of the other sprites are in the Oumgai and Ricky folders.

File Name | Extension | Description
---|---|---
awa | .bmp | Bubble sprite
ring_32_64_left | .bmp | left sprite of the ring
ring_32_64_right | .bmp | right sprite of the ring


---
#### Oumgai sprites (dolphin/img/Oumgai)
In the Oumgai folder we have tons of animation framesfor a sea creature known as nautilus in English and **Oumgai** in Japanese. These are all in BMP but the resulting .c and .o files are in the **dolphin/Obj** folder.

File Name | Extension | Description
---|---|---
/Oumgai/O_fukiya | .bmp | A pink japanese Blowgun?!
/Oumgai/O_kihon/O_kihon00(0-10) | .bmp | Normal animation frames
/Oumgai/O_kougeki/O_kougeki000(0-20) | .bmp | Animation frames of movement
/Oumgai/O_yarare/O_yarare0(0-20) | .bmp | Animation frames of movement

---
#### Ricky sprites (dolphin/img/Ricky)
In the Ricky folder we have tons of animation frames for the Ricky sprite, moving up/down/jumping etc. These are all in BMP but the resulting .c and .o files are in the **dolphin/Obj** folder.

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
This folder contains the generated output of all the image folder's BMP files. These were generated by a tool and then compiled from .c to .o in order to be linked into the final game. There is no point in listing these files as they are exactly the same as the BMP files listed in the IMG folder.

---
# Yoshi (yoshi)
This folder contains 

File Name | Extension | Description
---|---|---
Gasdepend | N/A | 
Makedepend | N/A | 
Makefile | N/A | 
Readme | .txt | 
bg_proc | .c, .o | 
crt0 | .o, .s | 
etc_bmp | .h | 
gdbrc | N/A | 
isle_bmp | .h | 
ldscript | .x | 
menu | .c, .o | 
menu_bmp | .h | 
menu_dat | .c, .h, .o | 
oam_proc | .c, .h, .o | 
reverbpatch | .o | 
rom_header | .s | 
soundpatch | .o | 
yos_anm | .c, .h, .o | 
yos_bmp | .h | 
yos_game | .c, .ext, .h, .o | 
yos_game_dat | .c, .h, .o | 
yos_game_mov | .c, .h, .o | 
yos_game_pr | .c, .h, .o | 
yos_game_sub | .c, .h, .o | 
yos_main | .c, .ext, .h, .o | 
yos_main_dat | .c, .h, .o | 
yos_sound | .h | 
yos_type | .h | 
yoshi | .bin, .elf, .map | 


---
### Islebmp (yoshi/bmp/islebmp)
This folder contains 

File Name | Extension | Description
---|---|---
Makefile | N/A | 
bmpfiles | N/A | 
libislebmp | .a | 
yoshi_island_990907_0_1 | .bmp, .o | 
yoshi_island_990907_0_10 | .bmp, .o | 
yoshi_island_990907_0_11 | .bmp, .o | 
yoshi_island_990907_0_12 | .bmp, .o | 
yoshi_island_990907_0_13 | .bmp, .o | 
yoshi_island_990907_0_14 | .bmp, .o | 
yoshi_island_990907_0_15 | .bmp, .o | 
yoshi_island_990907_0_16 | .bmp, .o | 
yoshi_island_990907_0_17 | .bmp, .o | 
yoshi_island_990907_0_18 | .bmp, .o | 
yoshi_island_990907_0_19 | .bmp, .o | 
yoshi_island_990907_0_2 | .bmp, .o | 
yoshi_island_990907_0_20 | .bmp, .o | 
yoshi_island_990907_0_21 | .bmp, .o | 
yoshi_island_990907_0_22 | .bmp, .o | 
yoshi_island_990907_0_23 | .bmp, .o | 
yoshi_island_990907_0_24 | .bmp, .o | 
yoshi_island_990907_0_25 | .bmp, .o | 
yoshi_island_990907_0_26 | .bmp, .o | 
yoshi_island_990907_0_27 | .bmp, .o | 
yoshi_island_990907_0_28 | .bmp, .o | 
yoshi_island_990907_0_29 | .bmp, .o | 
yoshi_island_990907_0_3 | .bmp, .o | 
yoshi_island_990907_0_30 | .bmp, .o | 
yoshi_island_990907_0_31 | .bmp, .o | 
yoshi_island_990907_0_32 | .bmp, .o | 
yoshi_island_990907_0_33 | .bmp, .o | 
yoshi_island_990907_0_34 | .bmp, .o | 
yoshi_island_990907_0_35 | .bmp, .o | 
yoshi_island_990907_0_36 | .bmp, .o | 
yoshi_island_990907_0_37 | .bmp, .o | 
yoshi_island_990907_0_38 | .bmp, .o | 
yoshi_island_990907_0_39 | .bmp, .o | 
yoshi_island_990907_0_4 | .bmp, .o | 
yoshi_island_990907_0_40 | .bmp, .o | 
yoshi_island_990907_0_41 | .bmp, .o | 
yoshi_island_990907_0_42 | .bmp, .o | 
yoshi_island_990907_0_43 | .bmp, .o | 
yoshi_island_990907_0_44 | .bmp, .o | 
yoshi_island_990907_0_45 | .bmp, .o | 
yoshi_island_990907_0_46 | .bmp, .o | 
yoshi_island_990907_0_47 | .bmp, .o | 
yoshi_island_990907_0_48 | .bmp, .o | 
yoshi_island_990907_0_49 | .bmp, .o | 
yoshi_island_990907_0_5 | .bmp, .o | 
yoshi_island_990907_0_50 | .bmp, .o | 
yoshi_island_990907_0_51 | .bmp, .o | 
yoshi_island_990907_0_52 | .bmp, .o | 
yoshi_island_990907_0_53 | .bmp, .o | 
yoshi_island_990907_0_54 | .bmp, .o | 
yoshi_island_990907_0_55 | .bmp, .o | 
yoshi_island_990907_0_56 | .bmp, .o | 
yoshi_island_990907_0_57 | .bmp, .o | 
yoshi_island_990907_0_58 | .bmp, .o | 
yoshi_island_990907_0_59 | .bmp, .o | 
yoshi_island_990907_0_6 | .bmp, .o | 
yoshi_island_990907_0_60 | .bmp, .o | 
yoshi_island_990907_0_7 | .bmp, .o | 
yoshi_island_990907_0_8 | .bmp, .o | 
yoshi_island_990907_0_9 | .bmp, .o | 


---
### Menubmp (yoshi/bmp/menubmp)
This folder contains 

File Name | Extension | Description
---|---|---
Makefile | N/A | 
grade | .bmp, .o | 
kumo | .bmp, .o | 
libmenubmp | .a | 
umi64 | .bmp, .o | 


---
### Yosbgbmp (yoshi/bmp/yosbgbmp)
This folder contains 

File Name | Extension | Description
---|---|---
Makefile | N/A | 
bg1 | .bmp, .c, .o, .plb | 
bg2 | .bmp, .c, .o | 
bg2_5 | .bmp | 
bg3 | .bmp, .c, .o | 
libyosbgbmp | .a | 
tmp | .bmp | 


---
### Yosbmp (yoshi/bmp/yosbmp)
This folder contains 

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
This folder contains 

File Name | Extension | Description
---|---|---
SoundDat | .o | 
Soundfiles | N/A | 
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
