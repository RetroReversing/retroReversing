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
updatedAt: 1st August 2020
twitterimage: https://www.retroreversing.com/public/N64/N64 Gigaleak2.jpg
---

On the 25th of July 2020, the day after the `Gigaleak`, its sequel Gigaleak 2 was uploaded to a thread on 4chan. This is a continuation of the leaks that were obtained from a iQue/BroadOn/Routefree hack earlier in the year. 

---
# Uploaded Files
This leak contained files for a Version Control Repository (CVS) owned by the creators of the Chinese iQue Player (Routefree). It mainly focussed on Nintendo 64 source code but also contained a few Gameboy Advance (AGB) files too. Note that this was sent from Nintendo to iQue for the purpose of creating a Chinese localised version of the main N64 games such as:
* 1080 snowboarding
* Animal Crossing/Forest
* Dr Mario 64
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
f0x | Source code for Star Fox 64
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
The 1080 folder contains two main subfolders apps and lib, apps is where the main soruce code and assets arec ontains and the lib folder just contains a single static library known as `libgdl_u64.a`

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
# Release Folder (Compiled Roms)
The **/release** folder contains the result of compiling the source code for each game in this leak, in both english and Chinese roms.


---
# References
[^1]: [filenames - What is tar error message " Cannot open: Invalid argument" - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/349914/what-is-tar-error-message-cannot-open-invalid-argument)
[^2]: [Multi Texture Viewer Manual](http://n64devkit.square7.ch/niff/mtv/index.htm)
