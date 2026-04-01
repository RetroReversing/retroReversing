---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Original F-Zero Source Code (Gigaleak)
category: leak
image: /public/images/snes/SNES F-Zero Source Code.jpg
twitterimage: http://www.retroreversing.com/public/images/snes/SNES F-Zero Source Code.jpg
permalink: /f-zero-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Leaks
    url: /leaks
  - name: Nintendo Leaks
    url: /nintendoleaks
  - name: Gigaleak
    url: /gigaleak
  - name: Original F-Zero Source Code
    url: #
recommend: 
 - snes
 - leak
 - sourcecode
editlink: /leaks/Nintendo/FZero.md
updatedAt: '2026-03-28'
---

The Nintendo Gigaleak preserves a small but unusually useful F-Zero source archive under `other/SFC/ソースデータ/FZERO`.

This is not just a loose dump of assembly files.
It preserves the main game code, a dated title page, multiple regional build variants, and a whole suite of C tools that converted maps, panels, characters, rivals, bombs, and perspective data into the formats the game actually used.

{% include_cached link-to-other-post.html post="/gigaleak" description="For more information on the rest of the Gigaleak check out this post." %}

---
## At a Glance
This archive is especially useful because it preserves both halves of the project at once:

* the game-side 65C816 assembly for the shipped SNES codebase
* the PC-side asset pipeline used to build tracks, screen layouts, background data, and sprite graphics

It also preserves some genuinely nice historical details:

* `TITLE.DOC` dates the original program to **1 April 1989 - 1 September 1990**
* the SNES revision is dated **27 February 1991 - 14 May 1991**
* the credited programmers are **Y. Nishida**, **M. Kimura**, and **S. Yamashiro**
* most of the tools still identify the project by the older internal name **CAR RACE**
* the build scripts show a mixed regional codebase rather than a single clean PAL branch

---
# Root directory (SFC.7z/ソースデータ/FZERO)
When the Gigaleak SFC.7z archive is extracted it contains the source for several Super Famicom projects.
This post covers everything in the `FZERO` directory.

This folder contains the following sub-directories:
{% capture fzero_root_body %}
The archive is split very neatly into the game itself and the DOS-side tools used to generate its content.
{% endcapture %}

{% capture folder_items %}
- Game - Assembly source code for the game
- Tools - C source code for the tools used to make the game
{% endcapture %}

{% include connected-folder-tree.html folder="FZERO" path="/" body=fzero_root_body version="/" content=folder_items %}

That split is one of the best things about this leak.
It means the page can show not only what the F-Zero source code looked like, but also how Nintendo's team prepared the maps, screen data, sprite characters, and compressed background assets that fed into it.

---
## How Complete This Looks
This archive looks much closer to a real working source snapshot than a token sample.

The strongest signs in its favour are:

* the `Game` folder has the main program modules, headers, data files, regional variants, and makefiles
* the `Tools` folder preserves the PC-side content pipeline rather than just the final game code
* the makefiles name a coherent set of source modules and a standard build flow using `as65c`, `link`, `load`, and `insp`

That said, it is still safer to call this a **near-complete source snapshot** than a guaranteed fully self-contained rebuild package.

What is still missing or uncertain:

* the actual Nintendo assembler, linker, loader, and symbol tools are not included here
* the folder does not preserve built `.rel`, `.map`, `.sym`, or `.hex` outputs
* some SDK-level environment details may still have lived outside this copied folder

So the important distinction is:
the archive appears to preserve most of the real F-Zero source and tooling, but the leak page should not claim with full confidence that every last dependency needed for a clean rebuild is present unless the code has actually been rebuilt successfully.

There is one extra provenance detail worth noting here.
The same `Game` and `Tools` tree also survives under `other/NEWS/FZERO`, and that NEWS copy appears twice because the archive contains both `NEWS/FZERO` and `NEWS/FZERO/FZERO`.

Content-wise though, that does not currently change the picture.
The NEWS `Game` and `Tools` folders match the `other/SFC/ソースデータ/FZERO` copy exactly, so it looks like a duplicated workstation-side copy of the same source snapshot rather than a separate branch with extra code.

---
## Game (/Game)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Game</div>
  <div markdown="1" class="rr-post-markdown">
This folder contains the main 65C816 assembly source for F-Zero on the SNES.
Internally the project is still often called **CAR RACE**, which makes the archive feel much closer to a live development tree than a cleaned-up release package.

  </div>
</section>

### What TITLE.DOC Reveals
`TITLE.DOC` is much better than a generic metadata note.
It gives a compact project history for the codebase:

Field | Value
---|---
Title | `F-ZERO`
Author | `Nintendo Co., Ltd.`
Completion year | `1990, 1991`
Original program | `April 01, 1989 - September 01, 1990`
Revision for SNS | `February 27, 1991 - May 14, 1991`
Programmers | `Y. Nishida`, `M. Kimura`, `S. Yamashiro`

That is an unusually nice preservation detail because it shows the SNES release as a revision of an older codebase, not a project that simply appeared fully formed in 1991.

---
### How the SNES Build Works
The build scripts make the toolchain very clear.
Both `makefile` and `fzero_pal.make` assemble every `.asm` file with `as65c`, then link the resulting `.rel` files with `link`, convert the linked image with `load`, and finally produce a symbol file with `insp`.

Output | Role
---|---
`.rel` | Assembled object output for each source file
`.map` | Linker map
`.sym` | Symbol file generated by `insp`
`.hex` | Final linked output image

The regional split is more interesting than the old page suggested.
The main `makefile` produces `fzero_usa2.hex`, while `fzero_pal.make` produces `fzero_pal.hex`.

The PAL build is not a completely separate source tree.
It mixes `fzero_main.asm` with `play_main_pal.asm`, but still pulls in several `*_usa` modules such as `title_main_usa`, `calculate_usa`, `set_bg2_usa`, and `game_over_usa`.
That makes the archive look more like a branch stack of targeted patches than a set of fully isolated regional folders.

---
### Interesting Game-Side Details
Several files are much more revealing than their names make them sound:

* `fzero_main.asm` is the real entry module and main mode dispatcher, with a four-state `Mode_vector` for title, select, gameplay, and game-over flow
* `fzero_main_usa2.asm` contains an explicit `BUG` routine and extra bug-fix logic not present in the base file
* `control_data.asm` is a huge tuning/data file for car handling, speed, friction, damage, turbo jet positions, credits text, and prerecorded demo stick input
* `data-5.asm` is not just "track data" in the abstract - it explicitly lays out `Course_address`, `Free_address`, and `Map_data_number` tables for the main cups and free-run/ending sequences
* `game_over.asm` includes the full staff roll flow and reads directly from `Staff_roll_data`
* `title_main.asm` and `play_main.asm` still preserve commented debug code and developer-only scene-selection hooks

One especially neat detail is `set_back`.
The folder contains both `set_back.asm` and a second older `set_back` file with no extension.
The extensionless file still carries the older 1990 copyright block and only credits **Y. Nishida**, so it looks like an earlier source snapshot that was kept alongside the later SNES revision.

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALPHA | N/A | Header/include file defining the encoded letter tokens used throughout text and credits data
ALPHA2 | N/A | Secondary encoded text/character constants
ANK | N/A | ANK character font graphics in assembly format
ANK8 | N/A | Additional text/character constants
BUFFER | N/A | Main runtime buffer definitions for gameplay state
RP5A22_ | N/A | 65C816 / SNES CPU register definitions
RP5C77_ | N/A | SNES PPU register definitions
TITLE | .DOC | Full project title sheet with development dates and programmer credits
VARIABLE | N/A | Main gameplay variable definitions
WORK | N/A | Work RAM layout definitions
calculate | .asm | Scoring, lap, and prerecorded demo-stick logic
calculate_usa | .asm | Regional variant with a different `Demo_stick_data` location
car_control | .asm | Car movement, drift, and jump/control behaviour
control_data | .asm | Core tuning data: acceleration, top speed, grip, damage, credits text, and demo input tables
data-5 | .asm | Course tables, start points, and cup/free-run map assignments
data-6 | .asm | Rival and AI-related tuning data
effect | .asm | Visual effects such as shadows, lasers, and other race feedback
en-check | .asm | Enemy visibility and state checks
en-data-1 | .asm | Enemy object/OAM data
en-data-2 | .asm | Additional enemy object/OAM data
en-drive | .asm | Rival driving logic and AI speed/acceleration handling
en-init-1 | .asm | Enemy initialization routines
en-init-3 | .asm | Course/open-drive setup tied to `Course_address`
en-init-4 | .asm | Additional enemy initialization routines
fzero_main | .asm | Main entry module and top-level mode dispatcher
fzero_main_pal | .asm | PAL startup variant with PPU mode changes
fzero_main_usa2 | .asm | USA revision with explicit bug-fix code
fzero_pal | .make | PAL build script
game_over | .asm | Game-over flow, pause logic, and staff roll handling
game_over_usa | .asm | USA variant with changed roll data
makefile | N/A | Main USA2 build script
play_main | .asm | Gameplay state setup and main loop support
play_main_pal | .asm | PAL gameplay variant with 50 Hz timing adjustments
player | .asm | Player car logic including crashes and edge-case fixes
set-obj | .asm | Object setup routines for smoke, explosions, and race objects
set_back | N/A | Older no-extension copy of the background-screen setup module
set_back | .asm | Background and HUD/screen setup module
set_bg1 | .asm | World/slit transfer and BG data handling
set_bg2 | .asm | Perspective/background calculation
set_bg2_usa | .asm | USA variant with altered title/background data
sound | .asm | Race music and sound-effect logic
title_main | .asm | Title screen and car-select flow
title_main_usa | .asm | USA title-screen variant with changed cursor/title data

---
## Tools (/Tools)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Tools</div>
  <div markdown="1" class="rr-post-markdown">
This folder is the real production pipeline for F-Zero.
It contains the DOS-side C programs and helper assembly routines used to turn editable map, panel, screen, and graphics data into the game-ready formats consumed by the SNES code.

  </div>
</section>

---
### What the Toolchain Shows
Nearly every tool still calls the project **CAR RACE** and most of them were written by **Y. Nishida** between 1989 and 1990.
That makes this folder one of the clearest preserved examples of Nintendo's early SNES content pipeline in the leak.

Tool | Version/date in source header | What it does
---|---|---
`carmap.c` | `version 1.01` - `May.18, 1989` | Early map generator from `.TBL` and `.SCR`
`chrar.c` | `version 1.01` - `Mar.27, 1989` | Character data archiver for `CAR RACE II`
`enemy.c` | `version 1.02` - `Jul.21, 1989` | OBJ character archiver for enemy graphics
`mkback.c` | `version 1.00` - `Feb.08, 1990` | Background-screen compressor
`mkpers.c` | `version 1.00` - `Feb.09, 1990` | Demo perspective-data compressor
`mkpanel.c` | `version 1.10` - `Apr.10, 1990` | Panel generator producing `.PCK` and `.PNL`
`setbomb.c` | `version 1.21` - `Apr.20, 1990` | Bomb-placement generator from map/panel/slit/world data
`mkmap.c` | `version 3.20` - `May.10, 1990` | Much later map generator for a `32*16 world`
`mkspchr.c` | `version 1.20` - `May.21, 1990` | OBJ character compressor
`slitpress.c` | `version 1.00` - `May.28, 1990` | Slit-data compressor producing `.SLT2`
`mkbgchr.c` | `Jun.06, 1989` | Converts 8-bit source graphics into Mode 7-ready character data
`armap.c` | `version 1.20` - `Jun.25, 1990` | Packs map data into archived output

That version spread is useful because it shows the tooling matured alongside the game.
`carmap.c` is an early 1989 generator, while `mkmap.c` is a much later 1990 rework for a larger world layout.

---
### Likely Asset Pipeline
The file extensions make much more sense once the tools are viewed together as one workflow:

Extension | Likely role in the pipeline
---|---
`.SCR` | Per-screen source layout input
`.TBL` | Character/tile lookup or source-table input
`.PCK` | Packed panel data
`.PNL` | Panel-layout data
`.WTB` | World table input
`.WLD` | Generated world data output
`.SLT` | Slit data used by the perspective/road system
`.SLT2` | Compressed slit-data output
`.MAP` | Generated or archived map package
`.CHR` | Character/tile graphics
`.OBJ` | Object/sprite source graphics
`.CGX` | 8-bit graphics source converted into SNES-ready character data

`mkmap.c` is especially revealing here.
It reads a `.PCK` panel file and a `.WTB` world-table file, then generates `.SLT` and `.WLD` outputs.
It even prints `Map data generator for CAR RACE version 3.20 ( 32*16 world )`, which is a very direct clue about the map format it expects.

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
armap | .c | Map-data archiver that packs `.MTB` input into `.MAP` output
carmap | .c | Early map generator that reads `.TBL` and `.SCR` data and emits `.MAP`
chrar | .c | Character-data archiver used to pack CHR resources
cmpbuf | .s | Assembly source file containing an efficient buffer comparison routine
cmppnl | .s | Helper routine for comparing candidate panels against the panel buffer
enemy | .c | OBJ character-data archiver for enemy sprite graphics
mkback | .c | Background-screen compressor
mkbgchr | .c | Converts `.CGX` 8-bit source art into screen/Mode 7 `.CHR` data
mkenemy | .c | Enemy-car character-data archiver
mkmap | .c | Later map generator that turns `.PCK` and `.WTB` into `.SLT` and `.WLD`
mkpanel | .c | Panel generator that turns `.TBL` input into `.PCK` and `.PNL`
mkpers | .c | Demo perspective-data compressor
mkrival | .c | Rival-car character-data archiver
mkselect | .c | Car-select screen compressor
mkspchr | .c | OBJ character compressor that creates `OBJECT.CHR`
schpnl | .s | Panel-search helper used by the panel generation path
setbomb | .c | Bomb-placement generator using `.PNL`, `.WLD`, and `.SLT`
slitpress | .c | Slit-data compressor that turns `.SLT` into `.SLT2`


{% capture armap_items %}
- unshort::pointer[32]
- unshort::length[32]
- int::counter
- int::address
- int::datasize
- ::main::(int argc, char* argv)
- ::set_mapname::(char* ss)
- ::archive::(char* fname, FILE wp)
- ::save_pointer::(char* fname)
{% endcapture %}

{% capture carmap_items %}
- arptr::sltptr[MAXSLT]
- unchar::pnlbuf[MAXPNL][4]
- unshort::sltbuf[MAXSLT][16]
- unshort::rombuf[MAXROM][16]
- unshort::wldbuf[WLDLNY][WLDLNX]
- unshort::sltofs[MAXSLT]
- int::pnlcnt
- int::sltcnt
- int::romcnt
- int::wldcnt
- int::sltlen
- int::clrcode
- ::main::(int argc, char* argv)
- ::set_sname::(char* ss)
- ::makemap::(int nn, char fname)
- ::chkclr::(unchar *buf)
- ::setpnl::(unchar *pnl)
- ::setslt::(unshort *slt)
- ::setroom::(unshort *rom)
- ::setwld::(unshort wld)
- ::memcmp::(register unchar *s1, register unchar *s2, register intnn)
- ::memcpy::(register unchar *dd, register unchar *ss, register int)
- ::arslit::()
- ::fit_slit::(int ln, int sc)
- ::int_slpt::()
- ::st_slofs::()
- ::genmap::(char *fname)
- ::genpnl::(FILE *wp, int ad)
- ::genslt::(FILE *wp, int ad)
- ::genrom::(FILE *wp, int ad)
- ::genwld::(FILE *wp, int ad)
{% endcapture %}

{% capture chrar_items %}
- int::chrlen[6]
- int::chralc[6][40]
- char::chrbuf[DSIZE][32]
- ::main::(int argc, char* argv)
- ::archive::(int mo,FILE *tp, FILE *wp)
- ::flip::(unchar *dat, *buf, int len)
- ::getnum::(FILE *fp)
- ::readchar::(int argc,char **argv, buf)
{% endcapture %}

{% capture enemy_items %}
- struct::patndata pat[12]
- short::patn00[24]
- short::patn01[20]
- short::patn02[12]
- short::patn03[9]
- short::patn04[6]
- short::patn05[4]
- short::patn06[2]
- short::patn07[1]
- short::patn08[12]
- short::patn09[6]
- short::patn10[4]
- short::patn11[2]
- unchar::chrbuf[DSIZE][32]
- int::chrcnt
- int::total
- ::main::(int argc, char* argv)
- ::init_ptr::()
- ::set_cname::(char* ss)
- ::archive::(FILE *wp, char dat)
- ::getnum::(char* dat)
- ::readchar::(char* fname)
{% endcapture %}

{% capture mkback_items %}
- int::bincnt
- int::norcnt
- int::comcnt2
- int::comcnt3
- int::nulcnt
- ::main::(int argc, char * argv)
- void::make_data::(FILE *rp,*wp)
- ::write_data::(int code, int cnt, FILE wp)
{% endcapture %}

{% capture mkbgchr_items %}
- unchar::chrdat[DATSIZE]
- unchar::chrbuf[BUFSIZE]
- ::main::(int argc, char * argv)
- ::chread::(char *fname,*buff, int size)
- ::chwrite::(char *fname,*buff, int size)
- ::convert::(unchar *data,int size)
- ::archive::(unchar *data,*buff,int size)
- ::getbnk::(unchar *data)
{% endcapture %}

{% capture mkenemy_items %}
- struct::patndata pat[10]
- short::patn00[24]
- short::patn01[15]
- short::patn02[12]
- short::patn03[6]
- short::patn04[4]
- short::patn05[1]
- short::patn06[12]
- short::patn07[6]
- short::patn08[2]
- short::patn09[9]
- unchar::chrbuf[DSIZE][32]
- int::chrcnt
- int::total
- ::main::(int argc, char* argv)
- ::init_ptr::()
- ::set_cname::(char* ss)
- ::archive::(FILE *wp, char dat)
- ::getnum::(char* dat)char *dat
- ::readchar::(char* fname)
{% endcapture %}

{% capture mkmap_items %}
- arptr::sltptr[MAXSLT]
- unshort::sltofs[MAXSLT]
- unshort::pnlofs[MAXPNL]
- unchar::pnlbuf[MAXPNL *4]
- unshort::sltbuf[MAXSLT][16]
- unshort::rombuf[MAXROM][16]
- unshort::wldbuf[WLDLNY][WLDLNX]
- int::pnlcnt
- int::sltcnt
- int::romcnt
- int::wldcnt
- int::pnllen
- int::sltlen
- int::errcnt
- int::slttop
- int::clrcode
- ::main::(int argc, char* argv)
- ::set_sname::(char* ss)
- int::getaddr::(char* str)
- ::readpnl::(char* fname)
- ::makemap::(int nn, char fname)
- ::chkclr::(unchar *buf)
- ::chkpnl::(unchar *pnl)
- ::setslt::(unshort *slt)
- ::setroom::(unshort *rom)
- ::setwld::(unshort wld)
- ::prsslt::()
- ::fit_slit::(int ln, int sc)
- ::int_slpt::()
- ::st_slofs::()
- ::genmap::(char* wld_name, char* slt_name)
- ::genslt::(FILE *wp)
- ::genrom::(FILE *wp)
- ::genwld::(FILE *wp)
{% endcapture %}

{% capture mkpanel_items %}
- arptr::pnlptr[MAXPNL]
- unshort::pnlofs[MAXPNL]
- unchar::pnlbuf[MAXPNL][4]
- int::pnllen
- int::pnlcnt
- int::clrcode
- ::main::(int argc, char* argv)
- ::set_sname::(char* ss)
- ::mkpanel::(int nn, char fname)
- ::chkclr::(unchar *buf)
- ::setpnl::(unchar *pnl)
- ::prspnl::()
- ::fit_panel::(int ln, int sc)
- ::int_pnpt::()
- ::st_pnofs::()
- ::genpck::(char *fname)
- ::genpnl::(char *fname)
{% endcapture %}

{% capture mkpers_items %}
- int::bincnt
- ::main::(int argc, char* argv)
- void::make_data::(FILE *rp,*wp)
- ::fgetnum::(unshort *num, FILE rp)
- ::fputnum::(int num, FILE wp)
{% endcapture %}

{% capture mkrival_items %}
- struct::patndata pat[10]
- short::patn00[24]
- short::patn01[15]
- short::patn02[12]
- short::patn03[6]
- short::patn04[4]
- short::patn05[1]
- short::patn06[12]
- short::patn07[6]
- short::patn08[2]
- short::patn09[9]
- unchar::chrbuf[DSIZE][32]
- int::chrcnt
- int::total
- ::main::(int argc, char * argv)
- ::init_ptr::()
- ::set_cname::(char* ss)
- ::archive::(FILE *wp, char dat)
- ::getnum::(dat)char *dat
- ::readchar::(fname)char *fname
{% endcapture %}

{% capture mkselect_items %}
- int::bincnt
- int::norcnt
- int::chrcnt
- int::atrcnt
- ::main::(argc,argv)int argc
- char *::argv
- void::make_data::(FILE *rp,*wp)
- int::write_char::(FILE *wp, int len)
- int::write_attr::(FILE *wp, int len, unchar buf)
{% endcapture %}

{% capture mkspchr_items %}
- struct data::header[34]
- unchar::chrbuf[DSIZE][32]
- int::chrcnt
- int::bincnt
- ::main::(int argc, char* argv)
- void::make_data::(FILE *fp)
- int::make1::(FILE *fp, int code, int cnum, int leng)
- int::make2::(FILE *fp,int code, int cnum, int leng)
- int::make3::(FILE *fp, int code,int cnum, int leng)
- int::make4::(FILE *fp, int code,int cnum, int leng)
- int::wthalf::(char *buff, FILE fp)
- int::read_char::(char* fname, int code, int size)
{% endcapture %}

{% capture setbomb_items %}
- unchar::pnlbuf[MAXPNL]
- unchar::sltbuf[MAXSLT]
- unchar::wldbuf[MAXWLD]
- unchar::rombuf[MAXROM]
- struct STACK::bomb[MAXBOMB]
- int::bombct
- int::romcnt
- int::romptr
- int::sltptr
- int::pnlptr
- int::sltofs
- ::main::(int argc, char* argv)
- ::set_bomb::()
- ::push_pos::()
- ::search::(int loc_x, int loc_y)
- ::sch_room::(int loc_x, int loc_y)
- int::getaddr::(char *str)
- ::readpnl::(char *fname)
- ::readwld::(char *fname)
- ::readslt::(char *fname)
- ::makewld::(char *fname)
{% endcapture %}

{% capture slitpress_items %}
- ::main::(int argc, char* argv)
- void::press_slit::(FILE *rp, FILE *wp)
- void::fputw::(int data, FILE fp)
- int::fgetw::(FILE *fp)
{% endcapture %}

The cards below are easier to follow when grouped by role.
Taken together they look like a rough production pipeline for building F-Zero's race worlds and visual assets.

---
### Map and World Tools
These are the top-level world-building tools.
They generate or archive the main race data, assemble world layouts, and place gameplay objects such as bombs.

{% capture map_world_cards %}
{% include_cached source-code-card.html title="armap.c" items=armap_items functions="4" variables="7" lines="136" %}
{% include_cached source-code-card.html title="carmap.c" items=carmap_items functions="19" variables="20" lines="500" %}
{% include_cached source-code-card.html title="mkmap.c" items=mkmap_items functions="18" variables="18" lines="475" %}
{% include_cached source-code-card.html title="setbomb.c" items=setbomb_items functions="10" variables="12" lines="291" %}
{% endcapture %}

{% include source-code-card-grid.html title="Map and World Tools" content=map_world_cards %}

---
### Panel and Slit Processing
These are the bridge tools between raw screen data and the final world/map outputs.
They handle packed panel data and compressed slit data for the road/perspective system.

{% capture panel_slit_cards %}
{% include_cached source-code-card.html title="mkpanel.c" items=mkpanel_items functions="11" variables="8" lines="325" %}
{% include_cached source-code-card.html title="slitpress.c" items=slitpress_items functions="4" variables="2" lines="97" %}
{% endcapture %}

{% include source-code-card-grid.html title="Panel and Slit Processing" content=panel_slit_cards %}

---
### Character and Sprite Tools
These are the asset-packaging tools for vehicles, objects, and SNES-ready character graphics.

{% capture character_cards %}
{% include_cached source-code-card.html title="chrar.c" items=chrar_items functions="5" variables="7" lines="156" %}
{% include_cached source-code-card.html title="enemy.c" items=enemy_items functions="6" variables="18" lines="221" %}
{% include_cached source-code-card.html title="mkbgchr.c" items=mkbgchr_items functions="6" variables="7" lines="150" %}
{% include_cached source-code-card.html title="mkenemy.c" items=mkenemy_items functions="6" variables="16" lines="212" %}
{% include_cached source-code-card.html title="mkrival.c" items=mkrival_items functions="6" variables="16" lines="209" %}
{% include_cached source-code-card.html title="mkspchr.c" items=mkspchr_items functions="8" variables="11" lines="234" %}
{% endcapture %}

{% include source-code-card-grid.html title="Character and Sprite Tools" content=character_cards %}

---
### Compression and Screen-Specific Tools
These are the smaller helper tools for particular presentation tasks such as background compression, demo perspective data, and the car-select screen.

{% capture support_cards %}
{% include_cached source-code-card.html title="mkback.c" items=mkback_items functions="3" variables="7" lines="127" %}
{% include_cached source-code-card.html title="mkpers.c" items=mkpers_items functions="4" variables="4" lines="98" %}
{% include_cached source-code-card.html title="mkselect.c" items=mkselect_items functions="4" variables="8" lines="120" %}
{% endcapture %}

{% include source-code-card-grid.html title="Compression and Screen-Specific Tools" content=support_cards %}
