---
layout: post
tags: 
- n64
- sdk
- leak
title: Gigaleak 2 Electric Boogaloo - N64 Source Code Leak 
thumbnail: /public/consoles/Nintendo 64.png
image: /public/N64/N64 Gigaleak2.jpg
permalink: /gigaleak2
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Gigaleak 2 Electric Boogaloo - N64 Source Code Leak 
    url: #
recommend: n64
editlink: /n64/Gigaleak2.md
updatedAt: '2020-08-01'
twitterimage: https://www.retroreversing.com/public/N64/N64 Gigaleak2.jpg
---

On the 25th of July 2020, the day after the `Gigaleak`, its sequel Gigaleak 2 was uploaded to a thread on 4chan. This is a continuation of the leaks that were obtained from a iQue/BroadOn/Routefree hack earlier in the year. 

---
# Uploaded Files
This leak contained files for a Version Control Repository (CVS) owned by the creators of the Chinese iQue Player (Routefree). It mainly focussed on Nintendo 64 source code but also contained a few Gameboy Advance (AGB) files too. Note that this was sent from Nintendo to iQue for the purpose of creating a Chinese localised version of the main N64 games such as:
* 1080 snowboarding
* Animal Crossing/Forest
* Dr Mario 64
* F-Zero X
* Super Mario 64
* Mario Kart 64
* Wave Race 64
* Zelda (MM & OOT).

Files Leaked:
* bbgames.7z (just contains bbgames.tar)

## Step 1 - Extracting the tar
The first step after extracting the 7Zip file to to extract the tar archive, you can do this like so:
```bash
tar -xvf bbgames.tar
```
If you get an error such as "Cannot open: Invalid argument" it is due to some of the file names containing characters that are invalid on a FAT* based File System. So you will need to extract on a different file system such as NTSC [^1].

## Step 2 - Installing CVS and checking out files
You will need to first have the CVS command line utilities installed if you haven't already then you can install like so:
* Mac OSX: `brew install cvs`
* Ubuntu Linux: `apt-get install cvs`

Now run the command in a folder that you want to extract the files:
```bash
cvs -d path/to/download/d1/routefree/bbgames/depot checkout .
```

It is a very large repository so expect it to take a while to complete.

---
# Root directory (d1/routefree/bbgames/depot)
This section will give you an overview of all the main folder contained at the root directory of the extracted leak.
The table below gives a brief description of what is in each folder, most of the folder are game specific:

Folder Name | Description
---|---
1080 | Source code to 1080 Snowboarding
TFC | Source code for the Famicom emulator for NES used in Animal Crossing
cba | Source code for "Kobe Bryant in NBA Courtside"
cba2 | Source code for "NBA Courtside 2: Featuring Kobe Bryant"
certs | Certificates for iQue Player?
club | Source code for the iQue Club application
devkit | N64 Dev Kit 5.0 (both pc & sgi) & Sound Tools
devsys | Partner N64 Development Kit
dm64 | Dr Mario 64 Source code
f0x | Source code for F-Zero X
forest | Source code to Animal Crossing
game_manuals | Contains the Adobe Postscript files for the physical game manuals
marioAGB | Source code for Super Mario Advance
mk64 | Source code for Mario Kart 64
os20l | N64 SDK OS Library Version 2.0L
ostrees | Contains versions (2.0E, 2.0F, 2.0G) of the SGI versions of the SDK
release | Compiled release versions of the source codes in rom format
sf64 | Source code for Star Fox 64
sm64 | Source code for Super Mario 64
tex_viewer | Source code for the N64 Texture viewer [^2]
tools | A bunch of Python and Perl tools to convert and compress various formats
wario4land_gba_ique | Source code for "Wario land 4" for the GBA
wr64 | Source code for Wave Race 64
yoshi | Source code for Yoshi's Story
z_majora | Source code for Zelda Majora's Mask
z_ocarina | Source code for Zelda OOT
z_ocarina2 | Source code for Master Quest (Ura Zelda)

---
# 1080 Snowboarding (1080 folder)
The 1080 folder contains two main subfolders **apps** and **lib**, the **apps** folder is where the main source code and assets are contained and the **lib** folder just contains a single static library known as `libgdl_u64.a`

## GDL Static Library (libgdl_u64.a)
It is not clear what the purpose of the GDL static library is yet or if it was used in any other games, but we do know it was created by **Giles Goddard** due to this line in the Makefile:
```
/usr/people/giles/src/stl/latest
```

There is also reference to a tool called **GDEDIT** in the same Makefile so it could be linked to this library or it could be that Giles just prefixed **GD** to the start of any tool he created.

There doesn't seem to be any source code in the leaks for this library but since a static library is just an archive, we can list the contents with the following command:
```
ar t libgdl_u64.a
```

The files contained in the library will be listed in the table below along with any descriptions that help identify the purpose of the objects:

File Name | Description
---|---
acos.o | 
actor.o | 
alloc.o | 
animate.o | 
animateio.o | 
app.o | 
asin.o | 
atan.o | 
binmgr.o | 
boot.o | 
callback.o | 
camera.o | 
clay.o | 
collide.o | 
colours.o | 
console.o | 
control.o | 
dl.o | 
dnode.o | 
env64x32_l1.o | 
env64x32_l2.o | 
env64x32a.o | 
env64x32b.o | 
env64x32c.o | 
euler.o | 
forcestick.o | 
fricstick.o | 
funcptr.o | 
gel.o | 
gfxlib.o | 
hair.o | 
hand1_tex.o | 
hand2_tex.o | 
hostio.o | 
ik.o | 
isstream.o | 
item.o | 
math.o | 
mblur.o | 
memory.o | 
memtrack.o | 
message.o | 
moji4b.o | 
mouse.o | 
node.o | 
nodelist.o | 
nus_mark_tex.o | 
parameter.o | 
particle.o | 
phong_ia8.o | 
printfault.o | 
qnode.o | 
ramp32x32_tex.o | 
rcpmgr.o | 
shadow.o | 
shadowc_tex.o | 
shape.o | 
skin.o | 
spot1_tex.o | 
spot2_tex.o | 
spot3_tex.o | 
spot4_tex.o | 
spotlight.o | 
spring.o | 
star_env_tex.o | 
stdgfx.o | 
stdio.o | 
stdobjs.o | 
stdsys.o | 
sun_64x32_tex.o | 
syslib.o | 
terrain.o | 
text.o | 
timer.o | 
u64cont.o | 
vrbox.o | 
water.o | 
widget.o | 
window.o | 

## Main Source Code (apps/ski folder)
The main source code is neatly organised into a bunch of sub folders, this makes it one of the tidiest source code folders in the leak.

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Ski" date="Main Source Code folder" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="data" desc="Contains Asset data such as Player animations, maps and effects" ></div>
      <div class="rr-info-gen" badge="flow" desc="Game Flow code - seems to be the main game code" ></div>
<div class="rr-info-gen" badge="gui" desc="The main game GUI" ></div>
<div class="rr-info-gen" badge="snow" desc="Code for snow effects, including board spray and trail" ></div>
<div class="rr-info-gen" badge="u64" desc="Contains the standard build toolchain such as makefiles, boot code and rom specs" ></div>
<div class="rr-info-gen" badge="world" desc="World Editor pre-compiled code" ></div>
    </ul>
</div>

Unfortunately there is no uncompiled source code for 1080 snowboarding, so don't expect any *.c or *.h files here, but the precompiled ELF objects *.o can be very interesting indeed.

If anyone is interested in a full rundown of what each of the pre-compiled objects contains and how they are related to the final ROM then let us know and we can create a new page for this purpose.

---
# Dr Mario 64 (dm64 folder)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The full complete source code to Dr Mario 64 has been successfully compiled! <a href="https://twitter.com/hashtag/n64?src=hash&amp;ref_src=twsrc%5Etfw">#n64</a> <a href="https://twitter.com/hashtag/nintendoleak?src=hash&amp;ref_src=twsrc%5Etfw">#nintendoleak</a> <a href="https://t.co/y66ryCOmgJ">https://t.co/y66ryCOmgJ</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1287691481772326919?ref_src=twsrc%5Etfw">July 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# F-Zero X (f0x folder)
The source code for F-Zero X is nowhere near as well organised as the 1080 Snowboarding code, BUT it actually has source code and not just pre-compiled object files!

Also this is not just the code to the N64 version but also contains the 64DD course editor!

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="F0X" date="Main Source Code folder" ></div>
    <ul class="rr-changelog-more">
      <div class="rr-info-gen" badge="audio" desc="Pre-compiled audio code" ></div>
 <div class="rr-info-gen" badge="CAD" desc="Contains Sprites in RGB format" ></div>
       <div class="rr-info-gen" badge="cheat" desc="" ></div>
	 <div class="rr-info-gen" badge="cheat_code" desc="Same as Cheat folder" ></div>
 <div class="rr-info-gen" badge="i10n" desc="Localization (Text used for translations)" ></div>
 <div class="rr-info-gen" badge="IMAGES" desc="Texture files" ></div>
 <div class="rr-info-gen" badge="metadata" desc="Metadata information for iQue Player" ></div>
 <div class="rr-info-gen" badge="MOJI" desc="Alphabet Textures" ></div>
 <div class="rr-info-gen" badge="sound" desc="Audio data" ></div>
    </ul>
</div>

The source files seem to be named after the developer that was responsible for them, this was common practise in the early days of software development before good quality source control.

The table below covers the most common prefixes found in the F-Zero source code.

Prefix | Description
---|---
dai_ | Written by daisuke tsujimura
ko_ | Written by keizo ohta
kn_ | Written by masahiro kawano?
mo_ | Written by shiro mouri ?
ot_ | Written by tsutomu kaneshige?
sot_ | Written by hiroki sotoike


## Source Code Files
The following table below just contains the uncompiled source code files present in the root directory of the F-Zero X source code.

Name | Description
---|---
dai_autoline.h | 
dai_camera.h | 
dai_e_steng.h | 
dai_ending.h | 
dai_engine.h | 
dai_fireworks.h | 
dai_letter.c | 
dai_letter.h | 
dai_m_size.h | 
dai_machine.h | 
dai_me_size.h | 
dai_ssletter.c | 
dai_ssletter.h | 
dai_ssletter2.c | 
dai_ssletter2.h | 
dai_ssletter3.c | 
dai_ssletter3.h | 
dai_steng.h | 
dai_traveling.c | 
dai_traveling.h | 
debug.h | 
kn_backedit.h | 
kn_backinit.c | 
kn_backup.c | 
kn_backup.h | 
kn_camera.h | 
kn_cameraedit.h | 
kn_common.h | 
kn_disk.h | 
kn_dlsub.h | 
kn_endgp.c | 
kn_endgp.h | 
kn_font.h | 
kn_option.c | 
kn_option.h | 
kn_record.c | 
kn_record.h | 
kn_recordsub.c | 
kn_ssrecord.c | 
kn_suidashi.h | 
kn_window.h | 
kn_wipe.h | 
kn_world.h | 
kn_worldobj.h | 
ko_abc.c | 
ko_abc.h | 
ko_block.h | 
ko_csel.c | 
ko_csel.h | 
ko_define.h | 
ko_dtabc.c | 
ko_dtcsel.c | 
ko_dtgsel.c | 
ko_dtmsel.h | 
ko_dtmsel2.c | 
ko_dttitle.c | 
ko_dtwin.c | 
ko_gsel.c | 
ko_gsel.h | 
ko_gsub.h | 
ko_language.h | 
ko_main.h | 
ko_memory.h | 
ko_msel.c | 
ko_msel.h | 
ko_pcgraph.h | 
ko_pctask.h | 
ko_protect.h | 
ko_ramman.h | 
ko_select.c | 
ko_select.h | 
ko_title.c | 
ko_title.h | 
ko_win.c | 
ko_win.h | 
l_math.h | 
l_static.h | 
mo_color.h | 
mo_commonprg.c | 
mo_commonstatic.h | 
mo_controller.h | 
mo_declare.h | 
mo_diskproc.h | 
mo_drawkanji.c | 
mo_drawkanji.h | 
mo_editor.c | 
mo_editor.h | 
mo_kbuffer.c | 
mo_kbuffer.h | 
mo_machinemenu.c | 
mo_macro.h | 
mo_macro2.h | 
mo_main.h | 
mo_message.c | 
mo_printerr.c | 
mo_printerr.h | 
mo_reaction.h | 
mo_rom.c | 
mo_rom.h | 
mo_romkbuf.c | 
mo_setting.h | 
mo_setupkanji.c | 
mo_sseditor.c | 
mo_sseditor.h | 
mo_ssmachine.h | 
mo_ssmenutex.c | 
mo_ssmenutex.h | 
mo_sssetting.c | 
mo_static.h | 
n64dd.h | 
ot_course.h | 
ot_editcar.h | 
ot_effect.h | 
ot_header.h | 
ot_letter.h | 
ot_machine.h | 
ot_menu.h | 
ot_pcaudio.h | 
ot_race.h | 
ot_sseffect.c | 
ot_sseffect2.c | 
ot_sub.h | 
ot_system.h | 
person.h | 
sot_buffer.h | 
sot_buffer8m.h | 
sot_camera.h | 
sot_code.h | 
sot_course.h | 
sot_cpuletter.h | 
sot_crsobj.h | 
sot_define.h | 
sot_disk.c | 
sot_disk.h | 
sot_diskproc.h | 
sot_disksys.c | 
sot_disksys.h | 
sot_draw.c | 
sot_draw.h | 
sot_dynamic.h | 
sot_editbuf.h | 
sot_efect.h | 
sot_entry.c | 
sot_entry.h | 
sot_error.h | 
sot_filelist.c | 
sot_filelist.h | 
sot_ghost.h | 
sot_help.c | 
sot_help.h | 
sot_kanji.h | 
sot_leo.c | 
sot_letter.c | 
sot_letter.h | 
sot_main.h | 
sot_mapselect.h | 
sot_math.h | 
sot_matrix.h | 
sot_menu.c | 
sot_menu.h | 
sot_menudata.c | 
sot_mesdata.c | 
sot_message.c | 
sot_message.h | 
sot_minimap.h | 
sot_nameinput.h | 
sot_pack.h | 
sot_pad.h | 
sot_rominfo.h | 
sot_sscrsedit.c | 
sot_sseditor.c | 
sot_ssletter.c | 
sot_ssletter.h | 
sot_ssletter2.c | 
sot_static.h | 
sot_string.c | 
sot_string.h | 
sot_sub.h | 
sot_system.h | 
sotleo.c | 
ucode_f.h |

## Textures (IMAGES folder)

There are some interesting images in the F-Zero X source code, including an image of Beavis from Beavis and Butthead.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I FOUND THIS IN THE F-ZERO X TEXTURES <a href="https://t.co/tlu1I2Tv9c">pic.twitter.com/tlu1I2Tv9c</a></p>&mdash; Zeether (@Zeether77) <a href="https://twitter.com/Zeether77/status/1287421325477392391?ref_src=twsrc%5Etfw">July 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

---
# Animal Crossing (forest folder)
Animal Forest (Animal Crossing in the west) source code was initially based on the Zelda source code and thus has a few similar files to the OOT source also present in the leak.

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="Forest" date="Main Source Code folder" ></div>
    <ul class="rr-changelog-more">
        <div class="rr-info-gen" badge="data" desc="Assets (3D Models)" ></div>
 <div class="rr-info-gen" badge="flash" desc="Flash library (pre-compiled)" ></div>
 <div class="rr-info-gen" badge="forest_audio" desc="Pre-compiled sound files" ></div>
 <div class="rr-info-gen" badge="forest_lib" desc="Pre-compiled source code for F3DZEX2 and Famicom emulator" ></div>
 <div class="rr-info-gen" badge="lib" desc="Libraries for N64DD (leo) and N64 Master Data Utility" ></div>
 <div class="rr-info-gen" badge="rtcsrc" desc="Source code for the Real Time Clock library (librtc.a)" ></div>
 <div class="rr-info-gen" badge="src" desc="Header files and a few C source files from the main game" ></div>
 <div class="rr-info-gen" badge="tarball" desc="Tar archives sent from Nintendo" ></div>
 <div class="rr-info-gen" badge="zelda_tool_copy" desc="Command Line tools (probably copied from Zelda but not specific to Zelda)" ></div>
    </ul>
</div>


## Assets (data folder)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">TIL: Noesis has an ELF loader! <a href="https://twitter.com/hashtag/nintendoleaks?src=hash&amp;ref_src=twsrc%5Etfw">#nintendoleaks</a> <a href="https://t.co/WVxpLS3qjB">https://t.co/WVxpLS3qjB</a></p>&mdash; RetroReversing.com (@RetroReversing) <a href="https://twitter.com/RetroReversing/status/1289577386975977472?ref_src=twsrc%5Etfw">August 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## CLI Tools (zelda_tool_copy folder)
The **zelda_tool_copy** founds far more interesting than it actually is, it is really just a subset of command line tools provided in the N64 and iQue sdks and none of them are zelda specific, these tools were used to create most games.

Note that if you are interest in the source code for any of these tools then you can find it in "BroadOn Leak".

{% include link-to-other-post.html post="/broadon-archive" description="For more information about the BroadOn N64 Leak." %}

Name | Description
---|---
romalign | Align a ROM file to a certain boundary
romfill  |  Source code for this tool in BroadOn leak
romaddress |  Possibly new version of the romaddress perl script from the N64 OS SDK
romdivide |   ?
rommap | Prints out a map of the ROM, similar to  the rommap perl script from the N64 OS SDK
rommap_new  |Modified version of rommap
slidec | SLI decompressor decompresses a szp or szs file (Version 1.0)
slicnv |  SLI converter, converts szpfile to szsfile (Version 1.0)
sliencV11 | SLI compressor (Version 1.1)
 
What is interesting about the tools above is that it uses the SZS extension for compression, so Nintendo have been using this format from at least the N64 until present day Switch titles!

--- 
# Mario Kart 64 (mk64 folder)
The source code for Mario Kart 64 seems to be missing most of the game engins source code, and appears to be mainly the game assets and code for screens that are heavily localized such as the Menus and End screens of the game.

<div class="rr-changelog-category">
  <div class="rr-version-gen" version="mk64" date="Main Source Code folder" ></div>
    <ul class="rr-changelog-more">
        <div class="rr-info-gen" badge="audio" desc="Pre-compiled Audio data" ></div>
<div class="rr-info-gen" badge="enemy_source" desc="Enemy AI C Source code in one massive C file" ></div>
<div class="rr-info-gen" badge="i10n" desc="Tools for Localisation and data in both Chinese and English" ></div>
<div class="rr-info-gen" badge="image" desc="Images stored in C files as Byte arrays" ></div>
<div class="rr-info-gen" badge="include" desc="C Header files for the game logic" ></div>
<div class="rr-info-gen" badge="KT_data" desc="Track Data?" ></div>
<div class="rr-info-gen" badge="map" desc="Track Drawing Data" ></div>
<div class="rr-info-gen" badge="metadata" desc="iQue metadata for the game" ></div>
<div class="rr-info-gen" badge="mkartDiffSource" desc="Contains USA and JP source code differences" ></div>
<div class="rr-info-gen" badge="object" desc="Drawing data for 2D Spries such as Banana power up" ></div>
<div class="rr-info-gen" badge="player" desc="Player Kart Sprites" ></div>
<div class="rr-info-gen" badge="RESULT" desc="race result Ending data & credits" ></div>
<div class="rr-info-gen" badge="select" desc="Player Selection Screen & Title at start of game" ></div>

    </ul>
</div>

## Assets

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This F1 car is found in a few Mario Kart 64 source folders. There is a version stored in the same format as Super FX models (GEO/3DG1), and a version converted to N64 source code. It was probably used in early tests and does not mean that MK64 was to be a F1 racing game. <a href="https://t.co/hsi0ULrM8W">pic.twitter.com/hsi0ULrM8W</a></p>&mdash; Starxxon (@vl_tone) <a href="https://twitter.com/vl_tone/status/1289639440814489600?ref_src=twsrc%5Etfw">August 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


---
# Release Folder (Compiled ROM files)
The **/release** folder contains the result of compiling the source code for each game in this leak, in both english and Chinese ROM files.


---
# References
[^1]: [filenames - What is tar error message " Cannot open: Invalid argument" - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/349914/what-is-tar-error-message-cannot-open-invalid-argument)
[^2]: [Multi Texture Viewer Manual](http://n64devkit.square7.ch/niff/mtv/index.htm)
