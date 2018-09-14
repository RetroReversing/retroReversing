---
layout: post
tags: 
- dreamcast
- dc
- games
- sourcecode
title: Chicken Run Source Code
thumbnail: /public/consoles/Sega Dreamcast.png
image: http://img.youtube.com/vi/thRXO3YwOCg/0.jpg
permalink: /Chicken-Run-Source-Code
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dc
  - name: Chicken Run Source Code
    url: #
videocarousel:
  - title: Chicken Run
    image: http://img.youtube.com/vi/thRXO3YwOCg/0.jpg
    youtube: 'thRXO3YwOCg'
recommend: dreamcast
references:
- Dreamcast Hub
editlink: dreamcast/Chicken Run Source Code.md
---

Developed by Blitz Games (formerly known as Interactive Studios) in 2000 as a cross platform action adventure game based on the movie with the same name.

Some of the source code for the game Chicken Run has been available to the internet as part of a "Dreamcast source code" bundle. After extracting the archive we are presented with two folders, "simple model shell" and "cr". 

Presumably cr stands for chicken run and the simple model shell is a tool to display some of the 3D models as they would appear in the game engine. 

# Simple Model Shell
This tool would have been very useful for artists when exporting their models from their modelling software such as 3ds max or maya, as it will show what optimizations need to be made to the model.

Filename | Description
--- | ---
DCK_Maths.c | 
DCK_Maths.h | 
DCK_System.c | 
DCK_System.h | 
DCK_Texture.c | Texture handler rountines
DCK_Texture.h | 
DCK_Types.h | 
actor2.c | 
actor2.h | 
bff_load.c | 
bff_load.h | 
crc32.c | 
crc32.h | 
fixed.c | 
fixed.h | 
gte.c | Gte playstation emulaution routines and structures
include.h | 
islfile.c  | 
islfont.c | font support - AM2 PS   (c) 1999-2001 ISL (AM2 = Action Man 2 Destruction X for PS1)
isltex.c | Texture and VRAM management
islutil.c | ISL PSX LIBRARY	(c) 1999 Interactive Studios Ltd.
islutil.h | 
layout.c | 
layout.h | 
main.c | Main core routine and system initialisation - This file is part of Frogger II, Copyright 2000 Interactive Studios Ltd
main.h | 
makefile | 
maths.c | This file is part of Frogger2, (c) 1999 Interactive Studios Ltd.
maths.h | 
newpsx.c | 
newpsx.h | 
psi.c | Playstation Model (i) Handler - PSX CORE (c) 1999 ISL
psi.h | 
psiactor.c | 
psiactor.h | Skinned model control routines
psitypes.h | ISL PSX LIBRARY	(c) 1999 Interactive Studios Ltd.
quatern.c | 
quatern.h | PSX CORE (c) 1999 ISL
sbinit.c | Copyright (C) 2000, Sega of America Dreamcast
shell.c | 
shell.h | 
sonylibs.h | 
sprite.c | This file is part of Frogger2, (c) 1999 Interactive Studios Ltd.
sprite.h | 
types.c | 
types.h | 
ultra64.h | n64 header (Copyright (C) 1994, Silicon Graphics, Inc.)


# CR (Chicken run source)

Filename | Description
--- | ---
DCK_Maths.c | 
DCK_Maths.h | 
DCK_System.c | 
DCK_System.h | 
DCK_Texture.c | 
DCK_Texture.h | 
DCK_Types.h | 
DC_TIM.c | 
DC_TIM.h | 
DISPSTR.C | 
DISPSTR.H | 
PSX_PC.h | 
USR.H | 
Usr.c | 
actor.c | 
actor.h | 
actor2.c | 
actor2.h | 
adxtest.c | 
adxtest.h | 
anim.c | 
anim.h | 
backup.c | 
backup.h | 
bff_load.c | 
bff_load.h | 
bpacsetup.c | 
bpacsetup.h | 
bpamsetup.c | 
bpamsetup.h | 
camera.c | 
camera.h | 
card.c | 
card.h | 
catapult.c | 
catapult.h | 
charactr.c | 
charactr.h | 
chase.c | 
chase.h | 
chicken.scr | 
chickenrun.cpj | 
cntrscn.c | 
cntrscreen.c | 
collide.c | 
collide.h | 
construct.c | 
construct.h | 
cr | 
cr.dsp | 
cr.dsw | 
cr.ncb | 
cr.opt | 
crate.c | 
crate.h | 
crc32.c | 
crc32.h | 
credits.c | 
credits.h | 
curtains.c | 
curtains.h | 
cus_anim.c | 
cus_dyn.c | 
cus_full.c | 
custom.c | 
custom.h | 
custom2.c | 
dc_timer.c | 
dc_timer.h | 
dctext.xls | 
debris.c | 
debris.h | 
demo.c | 
demo.h | 
deth.c | 
deth.h | 
dogchase.c | 
dogchase.h | 
dualshock.c | 
dualshock.h | 
ectsmenu.c | 
ectsmenu.h | 
egglaying.c | 
egglaying.h | 
empty.c | 
empty.h | 
enemies.c | 
enemies.h | 
engine.c | 
engine.h | 
error.h | 
fireworks.c | 
fireworks.h | 
fixed.c | 
fixed.h | 
fma.c | 
fma.h | 
fx.c | 
fx.h | 
fxtest.c | 
fxtest.h | 
gallery.c | 
gallery.h | 
gametext.h | 
gametext.txt | 
global.h | 
gte.c | 
help.c | 
help.h | 
incbn | 
include.h | 
includeps | 
inventory.c | 
inventory.h | 
islcard.c | 
islfile.c | 
islfont.c | 
isllocal.c | 
islpad.c | 
islsfx2.c | 
isltex.c | 
islutil.c | 
islvideo.c | 
islxa.c | 
language.c | 
language.h | 
layout.c | 
layout.h | 
lcdicons.h | 
lev_flow.c | 
lev_flow.h | 
lights.c | 
lights.h | 
loading.h | 
loadlnd.h | 
loadsnd.c | 
loadsnd.h | 
main.c | 
main.h | 
makefile | 
map.c | 
map.h | 
map_draw.c | 
map_draw.h | 
map_play.c | 
map_play.h | 
map_view.c | 
map_view.h | 
maths.c | 
maths.h | 
menu.c | 
menu.h | 
mssccprj.scc | 
newpsx.c | 
newpsx.h | 
nme_dogs.c | 
nme_mrst.c | 
ok.h | 
options.c | 
options.h | 
overlay.h | 
overlay1.c | 
overlay2.c | 
overlays.c | 
overlays.h | 
pad.c | 
pad.h | 
particle.c | 
particle.h | 
pause.c | 
pause.h | 
platcoll.c | 
platform.c | 
platform.h | 
powerbar.c | 
powerbar.h | 
psi.c | 
psi.h | 
psiactor.c | 
psiactor.h | 
psitypes.h | 
puzzles.c | 
puzzles.h | 
quatern.c | 
quatern.h | 
ranges.h | 
route.c | 
route.h | 
saveicon.h | 
saving.h | 
sbinit.c | 
scenics.c | 
scenics.h | 
seesaw.c | 
seesaw.h | 
sfxtest.c | 
sfxtest.h | 
shell.c | 
shell.h | 
snapshot.c | 
snapshot.h | 
sonylibs.h | 
sound.c | 
sound.h | 
source | 
sprite.c | 
sprite.h | 
sprouts.c | 
sprouts.h | 
sptstream.c | 
sptstream.h | 
startup.c | 
startup.h | 
station.c | 
station.h | 
stilts.c | 
stilts.h | 
subgame.c | 
subgame.h | 
test.c | 
text_ids.h | 
timer.c | 
timer.h | 
types.c | 
types.h | 
ultra64.h | 
viewer.c | 
viewer.h | 
vmucheck.c |
vmucheck.h | 
vssver.scc | 
wings.c | 
wings.h | 


<div class="mermaid">
graph LR
        A-->B
        B-->C
        C-->A
        D-->C
</div>
