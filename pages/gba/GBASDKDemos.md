---
layout: post
tags: 
- gba
- sdk
- demos
title: Game Boy Advance SDK Demos
thumbnail: /public/consoles/Nintendo Game Boy Advance.png
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
  - title: Dolphin Demo
    image: http://img.youtube.com/vi/9dwOMPNvtfc/hqdefault.jpg
    youtube: '9dwOMPNvtfc'
recommend: 
- sdk
- gba
editlink: /gba/GBASDKDemos.md
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

<div class="rr-source-code-title">Code Files</div>
<section class="rr-main-cards">
		
<div class="rr-file-card">
  <img class="geopattern" data-title="bg.c" />
  <h3>bg.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">36</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">790</div>  </div>
</div>
    
<div class="rr-file-card">
  <img class="geopattern" data-title="enemy.c" />
  <h3>enemy.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">29</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">733</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="enemy_dat.c" />
  <h3>enemy_dat.c</h3><ul>
    <li><span>u8 const*[10]</span> shell_base_pix_tbl</li> 
    <li><span>Anmpat[10]</span> shell_base_anm_pat</li> 
    <li><span>u8 const*[21]</span> shell_attack_pix_tbl</li> 
    <li><span>Anmpat[13]</span> shell_attack_anm_pat</li> 
    <li><span>u8 const*[21]</span> shell_yarare_pix_tbl</li> 
    <li><span>Anmpat[21]</span> shell_yarare_anm_pat</li> 
    <li><span>CharMapData[12]</span> shell_map_dat</li> 
    <li><span>Enemy_Oam_Data[10]</span> enemy_Oam_Data</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">143</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="game_dat.c" />
  <h3>game_dat.c</h3><ul>
    <li><span>u32 const[1][2]</span> Oam_16x8dot</li> 
    <li><span>u32 const[1][2]</span> OamData_Sample</li> 
    <li><span>short[256]</span> sin_tbl</li> 
    <li><span>short[256]</span> cos_tbl</li> 
    <li><span>u8[256]</span> sintable</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">5</div>    <div class="rr-file-stat rr-file-stats-lines">112</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="hitcheck.c" />
  <h3>hitcheck.c</h3><ul>
    <li><span>void</span> Fukiya2Dolphin<span class="rr-func-args">(Player*,Fukiya*)</span></li> 
    <li><span>void</span> Dolphin2Enemy<span class="rr-func-args">(Player*,Enemy*)</span></li> 
    <li><span>void</span> Ring2Dolphin<span class="rr-func-args">(Ring*,Player*)</span></li> 
    <li><span>u8</span> RingPass<span class="rr-func-args">(Ring*,Player*)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">201</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="main.c" />
  <h3>main.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">9</div>    <div class="rr-file-stat rr-file-stats-variables">14</div>    <div class="rr-file-stat rr-file-stats-lines">325</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="player_dat.c" />
  <h3>player_dat.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">12</div>    <div class="rr-file-stat rr-file-stats-lines">270</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="player.c" />
  <h3>player.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">28</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">852</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="ring.c" />
  <h3>ring.c</h3><ul>
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
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">3</div>    <div class="rr-file-stat rr-file-stats-lines">260</div>  </div>
</div>
    
</section>


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

<div class="rr-source-code-title">Code Files</div>
<section class="rr-main-cards">
  
  <div class="rr-file-card">
  <img class="geopattern" data-title="bg_proc.c" />
  <div><h3>bg_proc.c</h3><ul>
    <li><span>short[256]</span> tsin</li> 
    <li><span>short[256]</span> tcos</li> 
    <li><span>u8[4096]</span> Bg1_ScreenDat</li> 
    <li><span>u16[1024]</span> Bg2_ScreenDat</li> 
    <li><span>u16[1024]</span> Bg3_ScreenDat</li> 
    <li><span>u8</span> Bg_Mode</li> 
    <li><span>s32</span> prev_x</li> 
    <li><span>s32</span> prev_y</li> 
    <li><span>BgDat</span> Bg1</li> 
    <li><span>BgDat</span> Bg2</li> 
    <li><span>BgDat</span> Bg3</li> 
    <li><span>s32</span> rot_center_x</li> 
    <li><span>s32</span> rot_center_y</li> 
    <li><span>vs32</span> bg2pa</li> 
    <li><span>vs32</span> bg2pb</li> 
    <li><span>vs32</span> bg2pc</li> 
    <li><span>vs32</span> bg2pd</li> 
    <li><span>vs32</span> bg2_center_x</li> 
    <li><span>vs32</span> bg2_center_y</li> 
    <li><span>vu32</span> scale_x</li> 
    <li><span>vu32</span> scale_y</li> 
    <li><span>vu16</span> rotate_value</li> 
    <li><span>int</span> move_val_x</li> 
    <li><span>int</span> move_val_y</li> 
    <li><span>float</span> Bg1_Offset_X</li> 
    <li><span>float</span> Bg1_Offset_Y</li> 
    <li><span>float</span> Bg3_Offset_Y</li> 
    <li><span>int</span> Counter</li> 
    <li><span>u8</span> Biyoon_Count</li> 
    <li><span>s32</span> Sa</li> 
    <li><span>int</span> tileX</li> 
    <li><span>int</span> tileY</li> 
    <li><span>int</span> MapX</li> 
    <li><span>int</span> MapY</li> 
    <li><span>int</span> SoundSize</li> 
    <li><span>void</span> bg_init<span class="rr-func-args">(s8)</span></li> 
    <li><span>void</span> bg_init_first<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_init_gameover<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_init_dead<span class="rr-func-args">()</span></li> 
    <li><span>void</span> bg_modified<span class="rr-func-args">(s32,s32,s32)</span></li> 
    <li><span>void</span> Bgmode1<span class="rr-func-args">(s32,s32,s32)</span></li> 
    <li><span>void</span> siro_anm<span class="rr-func-args">(s16)</span></li> 
    <li><span>void</span> Bgmode3<span class="rr-func-args">()</span></li> 
    <li><span>void</span> Bg2_UpDown<span class="rr-func-args">(s32)</span></li> 
    <li><span>void</span> SetBgTextControl<span class="rr-func-args">(vu16*,u16,u16,u16,u16,u16,u16)</span></li> 
    <li><span>void</span> SetBgRotationControl<span class="rr-func-args">(vu16*,u16,u16,u16,u16,u16,u16,u16)</span></li> 
    <li><span>void</span> SetDispControl<span class="rr-func-args">(vu16*,u16,u16,u16,u16,u16,u16,u16,u16,u16,u16,u16,u16,u16)</span></li> 
    <li><span>void</span> InitBg1<span class="rr-func-args">()</span></li> 
    <li><span>u8</span> InitBg1_Map<span class="rr-func-args">(u8,u8)</span></li> 
    <li><span>void</span> BgUpdate<span class="rr-func-args">(s32,s32,s32)</span></li> 
    <li><span>void</span> RightBg1<span class="rr-func-args">()</span></li> 
    <li><span>void</span> LeftBg1<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitBg2<span class="rr-func-args">()</span></li> 
    <li><span>u16</span> InitBg2_Map<span class="rr-func-args">(u8,u8)</span></li> 
    <li><span>void</span> RightBg2<span class="rr-func-args">()</span></li> 
    <li><span>void</span> LeftBg2<span class="rr-func-args">()</span></li> 
    <li><span>void</span> InitBg3<span class="rr-func-args">()</span></li> 
    <li><span>u16</span> InitBg3_Map<span class="rr-func-args">(u8,u8)</span></li> 
    <li><span>void</span> RightBg3<span class="rr-func-args">()</span></li> 
    <li><span>void</span> LeftBg3<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">25</div>    <div class="rr-file-stat rr-file-stats-variables">35</div>    <div class="rr-file-stat rr-file-stats-lines">990</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="menu_dat.c" />
  <div><h3>menu_dat.c</h3><ul>
    <li><span>u16 const[256]</span> p0_yoshi_island_Palette</li> 
    <li><span>u8 const*[60]</span> p0_isle_tbl</li> 
    <li><span>u8 const[60]</span> p0_size_tbl</li> 
    <li><span>u8 const*[60]</span> p0_map_tbl</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">183</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="menu.c" />
  <div><h3>menu.c</h3><ul>
    <li><span>s16</span> p0_isle_frm</li> 
    <li><span>s16</span> p0_count</li> 
    <li><span>s16[228]</span> p0_h_org_b</li> 
    <li><span>s16[228]</span> p0_h_tmp_b</li> 
    <li><span>s16[256][4]</span> p0_h_bg2p</li> 
    <li><span>u8[1024]</span> p0_BgBak</li> 
    <li><span>s32</span> p0_hsy_org</li> 
    <li><span>void</span> p0_set_umi_sora<span class="rr-func-args">()</span></li> 
    <li><span>void</span> proc_0<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p0_VIntrFunc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p0_VCountIntr<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">390</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="oam_proc.c" />
  <div><h3>oam_proc.c</h3><ul>
    <li><span>s8[10]</span> OamList</li> 
    <li><span>u8</span> oamNode_end</li> 
    <li><span>u8</span> oamWaitFlg</li> 
    <li><span>OamListNode[128]</span> OamNode</li> 
    <li><span>AffineParamWork[32]</span> affineWork</li> 
    <li><span>DmaReqDat[64]</span> dmaReqArray</li> 
    <li><span>u16</span> dmaReqNum</li> 
    <li><span>AnmWork[64]</span> anmWork</li> 
    <li><span>void</span> make_OamBuf<span class="rr-func-args">()</span></li> 
    <li><span>void</span> clear_OamList<span class="rr-func-args">()</span></li> 
    <li><span>void</span> add_OamList<span class="rr-func-args">(u8,s8)</span></li> 
    <li><span>OamData*</span> new_OamData<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> dmaReqSet<span class="rr-func-args">(u8*,u16,u16)</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">111</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_anm.c" />
  <div><h3>yos_anm.c</h3><ul>
    <li><span>u8 const*[]</span> p1_yoshi_pixel_tbl</li> 
    <li><span>AnmTbl const[3]</span> yoshi_anm_normal</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_walk</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_run</li> 
    <li><span>AnmTbl const[9]</span> yoshi_anm_l2r</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_jump</li> 
    <li><span>AnmTbl const[65]</span> yoshi_anm_kyoro</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_tyouhatu</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_funbari</li> 
    <li><span>AnmTbl const[2]</span> yoshi_anm_kururinha</li> 
    <li><span>AnmTbl const[40]</span> yoshi_anm_die</li> 
    <li><span>AnmTbl const[9]</span> yoshi_anm_bring1</li> 
    <li><span>AnmTbl const[16]</span> yoshi_anm_bring2</li> 
    <li><span>AnmTbl const*[12]</span> p1_yoshi_anm_patern</li> 
    <li><span>AnmTbl const[9]</span> hei_anm_walk</li> 
    <li><span>AnmTbl const[5]</span> hei_anm_turn</li> 
    <li><span>u8 const*[]</span> p1_heiho_pixel_tbl</li> 
    <li><span>u8 const*[]</span> p1_heiho_b_pixel_tbl</li> 
    <li><span>u8 const*[]</span> p1_heiho_g_pixel_tbl</li> 
    <li><span>u8 const*[]</span> p1_heiho_y_pixel_tbl</li> 
    <li><span>u8 const*[]</span> p1_heihoL_pixel_tbl</li> 
    <li><span>AnmTbl const*[3]</span> p1_heiho_anm_patern</li> 
    <li><span>AnmTbl const[3]</span> mbox_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_mbox_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_mbox_anm_patern</li> 
    <li><span>AnmTbl const[4]</span> sun_anm_d</li> 
    <li><span>AnmTbl const[4]</span> sun_anm_c</li> 
    <li><span>AnmTbl const[4]</span> sun_anm_normal</li> 
    <li><span>AnmTbl const[4]</span> sun_anm_s</li> 
    <li><span>AnmTbl const[4]</span> sun_anm_sp</li> 
    <li><span>u8 const*[]</span> p1_sun_pixel_tbl</li> 
    <li><span>AnmTbl const*[6]</span> p1_sun_anm_patern</li> 
    <li><span>AnmTbl const[12]</span> killerS_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_killerS_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_killerS_anm_patern</li> 
    <li><span>AnmTbl const[5]</span> kokamek_anm_normal</li> 
    <li><span>AnmTbl const[5]</span> kokamek_anm_ura</li> 
    <li><span>u8 const*[]</span> p1_kokamek_pixel_tbl</li> 
    <li><span>AnmTbl const*[3]</span> p1_kokamek_anm_patern</li> 
    <li><span>AnmTbl const[9]</span> hosi_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_hosi_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_hosi_anm_patern</li> 
    <li><span>AnmTbl const[9]</span> kurukemu_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_kurukemu_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_kurukemu_anm_patern</li> 
    <li><span>AnmTbl const[15]</span> balloon_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_balloon_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_balloon_anm_patern</li> 
    <li><span>AnmTbl const[9]</span> bomb_anm_normal</li> 
    <li><span>u8 const*[]</span> p1_bomb_pixel_tbl</li> 
    <li><span>AnmTbl const*[2]</span> p1_bomb_anm_patern</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">51</div>    <div class="rr-file-stat rr-file-stats-lines">1082</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_game_dat.c" />
  <div><h3>yos_game_dat.c</h3><ul>
    <li><span>CharMapData const[36]</span> p1_charMapData</li> 
    <li><span>xyPos const[26]</span> p1_mapALine</li> 
    <li><span>u32 const[1][2]</span> p1_OamData_Sample</li> 
    <li><span>xyPos const</span> p1_yoshi_start_pos</li> 
    <li><span>CharSpecData const[34]</span> p1_charSpecData</li> 
    <li><span>ObjChr const[39]</span> p1_objChrTbl</li> 
    <li><span>ObjChr const[4]</span> p1_objChrTbl2</li> 
    <li><span>AnmInfo const[64]</span> p1_anmInfo_def</li> 
    <li><span>xyPos const[8]</span> p1_hanabira_pos</li> 
    <li><span>s16[8]</span> p1_hanabira_rot_tbl</li> 
    <li><span>s32 const[10]</span> p1_tatenobi_tbl</li> 
    <li><span>u16 const[256]</span> p1_obj_Palette</li> 
    <li><span>xyPos const[4]</span> p1_kokamekPos</li> 
    <li><span>s32 const[4][3]</span> p1_koumoriDat</li> 
    <li><span>xyPos const[8]</span> p1_balloon_randv_tbl</li> 
    <li><span>xyPos[1]</span> p1_balloon_pos</li> 
    <li><span>u8**[4]</span> p1_heiho_pix_tbl</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">17</div>    <div class="rr-file-stat rr-file-stats-lines">350</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_game_mov.c" />
  <div><h3>yos_game_mov.c</h3><ul>
    <li><span>s16[3]</span> p1_egg_se_tbl</li> 
    <li><span>void</span> p1_yoshi_init1<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_jump_se_set<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_yoshiMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_yos_histry_set<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_heiho_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_heihoL_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_killerS_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_balloon_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_omori_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_bomb_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_kokamek_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_toge_move<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_hakoMove<span class="rr-func-args">(u8)</span></li> 
    <li><span>void</span> p1_charMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_hanabiraMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_eggMove<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_effectMove<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">17</div>    <div class="rr-file-stat rr-file-stats-variables">1</div>    <div class="rr-file-stat rr-file-stats-lines">1885</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_game_pr.c" />
  <div><h3>yos_game_pr.c</h3><ul>
    <li><span>void</span> p1_yoshiPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_yoshiKagePrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_eggPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_charPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_gagePrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_heiKagePrint<span class="rr-func-args">(xyPos,s8)</span></li> 
    <li><span>void</span> p1_heiKagePrintL<span class="rr-func-args">(xyPos)</span></li> 
    <li><span>void</span> p1_bombKagePrint<span class="rr-func-args">(xyPos)</span></li> 
    <li><span>void</span> p1_effectPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_kokamekPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_kumoPrint<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_koumoriPrint<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">12</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">607</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_game_sub.c" />
  <div><h3>yos_game_sub.c</h3><ul>
    <li><span>void</span> p1_workInit0<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_affineWorkInit0<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_charWorkInit0<span class="rr-func-args">()</span></li> 
    <li><span>s16</span> p1_yos_hit_yoko<span class="rr-func-args">(xyPos,s16*)</span></li> 
    <li><span>s16</span> p1_yos_hit_tate<span class="rr-func-args">(xyPos,s16*)</span></li> 
    <li><span>s8</span> p1_jimen_cross_chk_yoko<span class="rr-func-args">(xyPos,xyPos)</span></li> 
    <li><span>s8</span> p1_jimen_cross_chk<span class="rr-func-args">(xyPos,xyPos)</span></li> 
    <li><span>s8</span> p1_line_cross_chk_tate<span class="rr-func-args">(xyPos,xyPos,xyPos,xyPos)</span></li> 
    <li><span>u32</span> p1_getMap<span class="rr-func-args">(long)</span></li> 
    <li><span>s8</span> p1_line_cross_chk_yoko<span class="rr-func-args">(xyPos,xyPos,xyPos,xyPos)</span></li> 
    <li><span>s32</span> p1_get_rel_pos<span class="rr-func-args">(s32)</span></li> 
    <li><span>s32</span> p1_get_lap_pos<span class="rr-func-args">(s32)</span></li> 
    <li><span>void</span> p1_yoshi_dead_set<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_yoshi_jump_set<span class="rr-func-args">(s32)</span></li> 
    <li><span>void</span> p1_effectSet<span class="rr-func-args">(s8,xyPos,xyPos*)</span></li> 
    <li><span>void</span> p1_balloon_dead<span class="rr-func-args">(s16)</span></li> 
    <li><span>void</span> p1_anim_work_proc<span class="rr-func-args">()</span></li> 
    <li><span>s8</span> p1_turekomi_fly_pos_set<span class="rr-func-args">(s32)</span></li> 
    <li><span>void</span> p1_clear_anm<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_key_chk<span class="rr-func-args">()</span></li> 
    <li><span>void</span> p1_calcDispPosition<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">21</div>    <div class="rr-file-stat rr-file-stats-variables">0</div>    <div class="rr-file-stat rr-file-stats-lines">962</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_game.c" />
  <div><h3>yos_game.c</h3><ul>
    <li><span>gGames</span> p1_gGame</li> 
    <li><span>u8</span> p1_sub_status</li> 
    <li><span>s32</span> p1_line_count</li> 
    <li><span>YoshiWork</span> p1_yoshiWork</li> 
    <li><span>EffectWork[32]</span> p1_effWork</li> 
    <li><span>CharacterWork[3]</span> p1_eggWork</li> 
    <li><span>CharacterWork[4]</span> p1_kokamekWork</li> 
    <li><span>CharacterWork[8]</span> p1_hanabiraWork</li> 
    <li><span>CharacterWork[48]</span> p1_charWork</li> 
    <li><span>func_ptr const[4]</span> func_tbl</li> 
    <li><span>void</span> yos_game<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VIntrFunc<span class="rr-func-args">()</span></li> 
    <li><span>void</span> game_init0<span class="rr-func-args">()</span></li> 
    <li><span>void</span> game_init1<span class="rr-func-args">()</span></li> 
    <li><span>void</span> game_main<span class="rr-func-args">()</span></li> 
    <li><span>void</span> game_over0<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">10</div>    <div class="rr-file-stat rr-file-stats-lines">487</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_main_dat.c" />
  <div><h3>yos_main_dat.c</h3><ul>
    <li><span>s16 const[256]</span> fix_sin</li> 
    <li><span>s16 const[256]</span> fix_cos</li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">0</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">80</div>  </div>
</div>

<div class="rr-file-card">
  <img class="geopattern" data-title="yos_main.c" />
  <div><h3>yos_main.c</h3><ul>
    <li><span>gMainVal</span> gMain</li> 
    <li><span>IntrFuncp[15]</span> IntrTable</li> 
    <li><span>IntrFuncp const[14]</span> IntrTable_0</li> 
    <li><span>void(*[2])()</span> proc_func_tbl</li> 
    <li><span>void</span> AgbMain<span class="rr-func-args">()</span></li> 
    <li><span>void</span> IntrDummy<span class="rr-func-args">()</span></li> 
    <li><span>void</span> VBlankIntr<span class="rr-func-args">()</span></li> 
    <li><span>void</span> KeyRead<span class="rr-func-args">()</span></li> 
  </ul></div>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">165</div>  </div>
</div>

</section>

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

{% include link-to-other-post.html post="/game-boy-advance-sdk-m4a/" description="For more information about the M4A Sound library check out this post." %}

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

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A long-rumored Zelda II tech demo for GBA has finally surfaced, ROM and source code included!<br><br>It&#39;s a included as reference in the GBA SDK, found on a Spongebob GBA dev disc uploaded by <a href="https://twitter.com/JacobLenstar?ref_src=twsrc%5Etfw">@JacobLenstar</a>.<br><br>ROM + Source:<a href="https://t.co/p9aCkSF8Q1">https://t.co/p9aCkSF8Q1</a><br><br>Full archive:<a href="https://t.co/7hquBy9lnX">https://t.co/7hquBy9lnX</a> <a href="https://t.co/mrvtbkudJ8">pic.twitter.com/mrvtbkudJ8</a></p>&mdash; MrTalida (@MrTalida) <a href="https://twitter.com/MrTalida/status/1208849338073411584?ref_src=twsrc%5Etfw">December 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
