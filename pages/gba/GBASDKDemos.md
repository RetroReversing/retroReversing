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
This folder contains the main source code and build scripts required to compile the Dolphin example into a working GBA ROM.

File Name | Extension | Description
---|---|---
Agb_c2_s | .bat | 
Gasdepend | N/A | 
Makedepend | N/A | 
Makefile | N/A | 
bg | .c, .h, .o | 
crt0 | .o, .s | 
dolphin | .bin, .elf, .map | 
dolphin_readme | .txt | 
enemy | .c, .h, .o | 
enemy_dat | .c, .o | 
game_dat | .c, .o | 
gdbrc | N/A | 
hitcheck | .c, .h, .o | 
main | .c, .h, .o | 
player | .c, .h, .o | 
player_dat | .c, .o | 
ring | .c, .h, .o | 
rom_header | .s | 

<main class="rr-main-cards">
	<section>
		<div class="rr-file-card">
			<img class="geopattern" data-title="bg.c" />
			<div>
				<h3>bg.c</h3>
				<ul>
					<li>
						<span class="rr-variable-type">void</span> initwave2nd<span class="rr-func-args">(BgAnm*)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> Anm_wave2nd<span class="rr-func-args">(BgAnm*)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitBg<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> BgProc<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> Change_Bg_VRAM<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> UpdateBg<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitSky<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> Init_Sky_ScreenDat<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DrawSky<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DeleteSky<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> SoraRight<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> SoraLeft<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitCoral<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitCoralScreenDat<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DrawCoral<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DeleteCoral<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> CoralRight<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> CoralLeft<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> CoralUpDown<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitLight<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitLightScreenDat<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DrawLight<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DeleteLight<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitOceanA<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitOceanAScreenDat<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> OceanA_Idle<span class="rr-func-args">(Bg*,s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DrawOceanA<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DeleteOceanA<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> OceanA_Up<span class="rr-func-args">(Bg*)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> OceanA_Down<span class="rr-func-args">(Bg*)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitOceanB<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> InitOceanBScreenDat<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DrawOceanB<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> DeleteOceanB<span class="rr-func-args">(s32,s32)</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> OceanB_Up<span class="rr-func-args">()</span>
					</li>
					<li>
						<span class="rr-variable-type">void</span> OceanB_Down<span class="rr-func-args">()</span>
					</li>
				</ul>
			</div>
			<div class="rr-file-stats"> </div>
		</div>
	</section>

</main>

---
## Dolphin/Doc
This folder contains a brief document describing the Dolphin demo and the features it shows off.

The document is simply called **DemoProgramDolphin.doc**.

---
## Bg_parts (dolphin/bg_parts)
This folder contains 

File Name | Extension | Description
---|---|---
light4 | .bmp, .c, .o | 
sango1024x256 | .bmp, .c, .o | 
sora | .bmp, .c, .o | 
umiA_ | .bmp | 
umi_ab_256x512 | .bmp, .c, .o | 
umia_ | .c, .o | 
wave2nd1 | .bmp, .c, .o | 
wave2nd2 | .bmp, .c, .o | 
wave2nd3 | .bmp, .c, .o | 


---
## Img (dolphin/img)
This folder contains 

File Name | Extension | Description
---|---|---
awa | .bmp | 
ring_32_64_left | .bmp | 
ring_32_64_right | .bmp | 


---
#### O_fukiya (dolphin/img/Oumgai/O_fukiya)
This folder contains 

File Name | Extension | Description
---|---|---
O_fukiya000 | .bmp | 


---
#### O_kihon (dolphin/img/Oumgai/O_kihon)
This folder contains 

File Name | Extension | Description
---|---|---
O_kihon001 | .bmp | 
O_kihon002 | .bmp | 
O_kihon003 | .bmp | 
O_kihon004 | .bmp | 
O_kihon005 | .bmp | 
O_kihon006 | .bmp | 
O_kihon007 | .bmp | 
O_kihon008 | .bmp | 
O_kihon009 | .bmp | 
O_kihon010 | .bmp | 


---
#### O_kougeki (dolphin/img/Oumgai/O_kougeki)
This folder contains 

File Name | Extension | Description
---|---|---
O_kougeki000 | .bmp | 
O_kougeki001 | .bmp | 
O_kougeki002 | .bmp | 
O_kougeki003 | .bmp | 
O_kougeki004 | .bmp | 
O_kougeki005 | .bmp | 
O_kougeki006 | .bmp | 
O_kougeki007 | .bmp | 
O_kougeki008 | .bmp | 
O_kougeki009 | .bmp | 
O_kougeki010 | .bmp | 
O_kougeki011 | .bmp | 
O_kougeki012 | .bmp | 
O_kougeki013 | .bmp | 
O_kougeki014 | .bmp | 
O_kougeki015 | .bmp | 
O_kougeki016 | .bmp | 
O_kougeki017 | .bmp | 
O_kougeki018 | .bmp | 
O_kougeki019 | .bmp | 
O_kougeki020 | .bmp | 


---
#### O_yarare (dolphin/img/Oumgai/O_yarare)
This folder contains 

File Name | Extension | Description
---|---|---
O_yarare000 | .bmp | 
O_yarare001 | .bmp | 
O_yarare002 | .bmp | 
O_yarare003 | .bmp | 
O_yarare004 | .bmp | 
O_yarare005 | .bmp | 
O_yarare006 | .bmp | 
O_yarare007 | .bmp | 
O_yarare008 | .bmp | 
O_yarare009 | .bmp | 
O_yarare010 | .bmp | 
O_yarare011 | .bmp | 
O_yarare012 | .bmp | 
O_yarare013 | .bmp | 
O_yarare014 | .bmp | 
O_yarare015 | .bmp | 
O_yarare016 | .bmp | 
O_yarare017 | .bmp | 
O_yarare018 | .bmp | 
O_yarare019 | .bmp | 
O_yarare020 | .bmp | 


---
#### R_attack (dolphin/img/Ricky/R_attack)
This folder contains 

File Name | Extension | Description
---|---|---
R_attack1 | .bmp | 
R_attack2 | .bmp | 
R_attack3 | .bmp | 
R_attack4 | .bmp | 
R_attack5 | .bmp | 
R_attack6 | .bmp | 
R_attack7 | .bmp | 


---
#### R_down (dolphin/img/Ricky/R_down)
This folder contains 

File Name | Extension | Description
---|---|---
R_down0 | .bmp | 
R_down1 | .bmp | 
R_down2 | .bmp | 
R_down3 | .bmp | 
R_down4 | .bmp | 
R_down5 | .bmp | 
R_down6 | .bmp | 
R_down7 | .bmp | 
R_down8 | .bmp | 


---
#### R_go_down (dolphin/img/Ricky/R_go_down)
This folder contains 

File Name | Extension | Description
---|---|---
R_go_down0 | .bmp | 
R_go_down1 | .bmp | 
R_go_down2 | .bmp | 
R_go_down3 | .bmp | 
R_go_down4 | .bmp | 
R_go_down5 | .bmp | 
R_go_down6 | .bmp | 
R_go_down7 | .bmp | 


---
#### R_go_up (dolphin/img/Ricky/R_go_up)
This folder contains 

File Name | Extension | Description
---|---|---
R_go_up0 | .bmp | 
R_go_up1 | .bmp | 
R_go_up2 | .bmp | 
R_go_up3 | .bmp | 
R_go_up4 | .bmp | 
R_go_up5 | .bmp | 
R_go_up6 | .bmp | 
R_go_up7 | .bmp | 


---
#### R_jump (dolphin/img/Ricky/R_jump)
This folder contains 

File Name | Extension | Description
---|---|---
R_jump0 | .bmp | 
R_jump1 | .bmp | 
R_jump10 | .bmp | 
R_jump2 | .bmp | 
R_jump3 | .bmp | 
R_jump4 | .bmp | 
R_jump5 | .bmp | 
R_jump6 | .bmp | 
R_jump7 | .bmp | 
R_jump8 | .bmp | 
R_jump9 | .bmp | 


---
#### R_kihon (dolphin/img/Ricky/R_kihon)
This folder contains 

File Name | Extension | Description
---|---|---
R_kihon0 | .bmp | 
R_kihon1 | .bmp | 
R_kihon2 | .bmp | 
R_kihon3 | .bmp | 
R_kihon4 | .bmp | 
R_kihon5 | .bmp | 
R_kihon6 | .bmp | 
R_kihon7 | .bmp | 


---
#### R_up (dolphin/img/Ricky/R_up)
This folder contains 

File Name | Extension | Description
---|---|---
R_up0 | .bmp | 
R_up1 | .bmp | 
R_up2 | .bmp | 
R_up3 | .bmp | 
R_up4 | .bmp | 
R_up5 | .bmp | 
R_up6 | .bmp | 
R_up7 | .bmp | 
R_up8 | .bmp | 


---
#### Small (dolphin/img/Ricky/small)
This folder contains 

File Name | Extension | Description
---|---|---
r_small0 | .bmp | 
r_small1 | .bmp | 
r_small2 | .bmp | 
r_small3 | .bmp | 
r_small4 | .bmp | 
r_small5 | .bmp | 
r_small6 | .bmp | 
r_small7 | .bmp | 


---
## Obj (dolphin/obj)
This folder contains 

File Name | Extension | Description
---|---|---
awa | .c, .o | 
o_fukiya000 | .c, .o | 
o_kihon001 | .c, .o | 
o_kihon002 | .c, .o | 
o_kihon003 | .c, .o | 
o_kihon004 | .c, .o | 
o_kihon005 | .c, .o | 
o_kihon006 | .c, .o | 
o_kihon007 | .c, .o | 
o_kihon008 | .c, .o | 
o_kihon009 | .c, .o | 
o_kihon010 | .c, .o | 
o_kougeki000 | .c, .o | 
o_kougeki001 | .c, .o | 
o_kougeki002 | .c, .o | 
o_kougeki003 | .c, .o | 
o_kougeki004 | .c, .o | 
o_kougeki005 | .c, .o | 
o_kougeki006 | .c, .o | 
o_kougeki007 | .c, .o | 
o_kougeki008 | .c, .o | 
o_kougeki009 | .c, .o | 
o_kougeki010 | .c, .o | 
o_kougeki011 | .c, .o | 
o_kougeki012 | .c, .o | 
o_kougeki013 | .c, .o | 
o_kougeki014 | .c, .o | 
o_kougeki015 | .c, .o | 
o_kougeki016 | .c, .o | 
o_kougeki017 | .c, .o | 
o_kougeki018 | .c, .o | 
o_kougeki019 | .c, .o | 
o_kougeki020 | .c, .o | 
o_yarare000 | .c, .o | 
o_yarare001 | .c, .o | 
o_yarare002 | .c, .o | 
o_yarare003 | .c, .o | 
o_yarare004 | .c, .o | 
o_yarare005 | .c, .o | 
o_yarare006 | .c, .o | 
o_yarare007 | .c, .o | 
o_yarare008 | .c, .o | 
o_yarare009 | .c, .o | 
o_yarare010 | .c, .o | 
o_yarare011 | .c, .o | 
o_yarare012 | .c, .o | 
o_yarare013 | .c, .o | 
o_yarare014 | .c, .o | 
o_yarare015 | .c, .o | 
o_yarare016 | .c, .o | 
o_yarare017 | .c, .o | 
o_yarare018 | .c, .o | 
o_yarare019 | .c, .o | 
o_yarare020 | .c, .o | 
r_attack1 | .c, .o | 
r_attack2 | .c, .o | 
r_attack3 | .c, .o | 
r_attack4 | .c, .o | 
r_attack5 | .c, .o | 
r_attack6 | .c, .o | 
r_attack7 | .c, .o | 
r_down0 | .c, .o | 
r_down1 | .c, .o | 
r_down2 | .c, .o | 
r_down3 | .c, .o | 
r_down4 | .c, .o | 
r_down5 | .c, .o | 
r_down6 | .c, .o | 
r_down7 | .c, .o | 
r_down8 | .c, .o | 
r_go_down0 | .c, .o | 
r_go_down1 | .c, .o | 
r_go_down2 | .c, .o | 
r_go_down3 | .c, .o | 
r_go_down4 | .c, .o | 
r_go_down5 | .c, .o | 
r_go_down6 | .c, .o | 
r_go_down7 | .c, .o | 
r_go_up0 | .c, .o | 
r_go_up1 | .c, .o | 
r_go_up2 | .c, .o | 
r_go_up3 | .c, .o | 
r_go_up4 | .c, .o | 
r_go_up5 | .c, .o | 
r_go_up6 | .c, .o | 
r_go_up7 | .c, .o | 
r_jump0 | .c, .o | 
r_jump1 | .c, .o | 
r_jump10 | .c, .o | 
r_jump2 | .c, .o | 
r_jump3 | .c, .o | 
r_jump4 | .c, .o | 
r_jump5 | .c, .o | 
r_jump6 | .c, .o | 
r_jump7 | .c, .o | 
r_jump8 | .c, .o | 
r_jump9 | .c, .o | 
r_kihon0 | .c, .o | 
r_kihon1 | .c, .o | 
r_kihon2 | .c, .o | 
r_kihon3 | .c, .o | 
r_kihon4 | .c, .o | 
r_kihon5 | .c, .o | 
r_kihon6 | .c, .o | 
r_kihon7 | .c, .o | 
r_up0 | .c, .o | 
r_up1 | .c, .o | 
r_up2 | .c, .o | 
r_up3 | .c, .o | 
r_up4 | .c, .o | 
r_up5 | .c, .o | 
r_up6 | .c, .o | 
r_up7 | .c, .o | 
r_up8 | .c, .o | 
ring_32_64_left | .c, .o | 
ring_32_64_right | .c, .o | 


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
