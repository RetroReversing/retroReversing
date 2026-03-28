---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Gigaleak - Original F-Zero Source Code (SNES)
thumbnail: /public/consoles/Nintendo Game Boy.png
image: /public/images/snes/SNES F-Zero Source Code.jpg
twitterimage: http://www.retroreversing.com/public/images/snes/SNES F-Zero Source Code.jpg
permalink: /f-zero-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - Original F-Zero Source Code (SNES)
    url: #
recommend: 
 - snes
 - leak
 - sourcecode
editlink: /leaks/Nintendo/FZero.md
updatedAt: '2023-05-08'
---

As part of the July 2020 Giga leak, the source code for the Super Nintendo game F-Zero was leaked, this post covers all the files related to F-Zero with a brief explanation of the purpose. If you know of any interesting finds from the **F-Zero** source code please get in touch!

{% include link-to-other-post.html post="/gigaleak" description="For more information on the rest of the Gigaleak check out this post." %}

# Root directory (SFC.7z/ソースデータ/FZERO)
When the Gigaleak SFC.7z archive (located inside Other.7z) is extracted it contains the source code for a bunch of Super Nintendo games, F-Zero is one of them, this post will cover evertthing in the **FZERO** directory from the extracted archive.

This folder contains the following sub-directories:
{% capture fzero_root_body %}
Root folder tree.
{% endcapture %}

{% capture folder_items %}
- Game - Assembly source code for the game
- Tools - C source code for the tools used to make the game
{% endcapture %}

{% include connected-folder-tree.html folder="FZERO" path="/" body=fzero_root_body version="/" content=folder_items %}

---
## Game (/Game)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Game</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the main game source code for the PAL version of F-Zero for the Super Nintendo which is also called **SFX CAR RACE** in some of the source files.

  </div>
</section>

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
ALPHA | N/A | Header file defining Alpha constants SP,RO,QU etc, unsure of purpose (18th June 1990)
ALPHA2 | N/A | Header file defining Alpha constants N0, N1 etc, unsure of purpose (5th December 1989)
ANK | N/A | ANK character font graphics in assembly format
ANK8 | N/A | Header file defining Alpha constants N0, N1 etc, unsure of purpose (5th December 1989)
BUFFER | N/A | Header file defining the main game buffer variables such as car acceleration etc (24th July 1990)
RP5A22_ | N/A | Header file defining SFX CPU registers
RP5C77_ | N/A | Header file defining SFX PPU registers
TITLE | .DOC | Just has some meta data information such as the dates this game was worked on, the programmers and copyright information
VARIABLE | N/A | Header file defining the main game variables such as game_level (23rd April 1990)
WORK | N/A |  Header file defining variables stored in WORK RAM
calculate | .asm | Contains functions such as Calculate_score
calculate_usa | .asm | Same as **calculate.asm** with a change to the Demo_stick_data variable
car_control | .asm | Car movement functions such as Drift_ctrl
control_data | .asm | Data for each of the cars such as maximum speed
data-5 | .asm | Contains Course (Track) data (no actual code)
data-6 | .asm | Contains Rival speed data (no actual code)
effect | .asm | Contains functions for special effects like shadows and lazers
en-check | .asm | Contains enemy check functions such as if they are on screen
en-data-1 | .asm | Contains enemy OAM data (no code)
en-data-2 | .asm | Second part of enemy OAM data
en-drive | .asm | Contains Ememy driving functions, controlling speed and acceleration
en-init-1 | .asm | enemy car Initialize Routine
en-init-3 | .asm | Open drive data sub routine
en-init-4 | .asm | enemy car Initialize Routine
fzero_main | .asm | Program entry for the game
fzero_main_pal | .asm | Program entry for the PAL version of the game
fzero_main_usa2 | .asm | Same as **fzero_main.asm** but fixes a few bugs
fzero_pal | .make | Makefile for the PAL version of the game
game_over | .asm | Contains game pause functions and the game over logic
game_over_usa | .asm | Same as **game_over.asm** but changes the Roll Data
makefile | N/A | Used to build the source code in the folder (run make)
play_main | .asm | Functions for screen select and initialization
play_main_pal | .asm | Same as **play_main.asm** but changes the frame count timer logic (50hz)
player | .asm | Player control functions such as **Player_explode**
set-obj | .asm | Obj functions like Smoke and explosions
set_back | , .asm | Background setup functions
set_bg1 | .asm | functions for transferring world and slit data
set_bg2 | .asm | functions for calculating perspective
set_bg2_usa | .asm | Same as **set_bg1.asm** with slightly different title data
sound | .asm | sound and music functions
title_main | .asm | title and car select screens
title_main_usa | .asm | same as **title_main.asm** with slightly different cusrsor values

All the .asm files get assembled with the official SNES SDK assember (as65c) and then linked together with the **link** tool.

---
## Tools (/Tools)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Tools</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the source code for various C-program that were used to help develop the game, such as file format converters for maps.

  </div>
</section>

They read and write a number of file formats:
 * .MTB - Possible Map Table?
 * .MAP - Game Map (Track?) data
 * .TBL - Possible Table data?
 * .SCR - Screen data
 * .SLT - Slit data
 * .OBJ - Sprite character data
 * .CHR - Character data
 * .CGX - 8-bit character data
 * .PCK - Panel Check File
 * .PNL - Panel Data file
 * .WTB - World Table?

The files in this folder are described in the table below:

File Name | Extension | Description
---|---|---
armap | .c | Map data archiver, seems to read a .MTB file and exports a .MAP file
carmap | .c | Map data generator, seems to read a .TBL and .SCR file and exports a .MAP file
chrar | .c | Character data archiver, takes in a table (.TBL?) and CHR files and exports a ?
cmpbuf | .s | Assembly source file containing an efficient buffer comparison routine
cmppnl | .s | Assembly source file containing an implementation of a function int cmppnl( char* pnlbuf, char* panel, int pnlcnt )	, compare panels?
enemy | .c | OBJ character data archiver, takes in a .TBL and writes to a .CHR file
mkback | .c | Back screen data compress
mkbgchr | .c | Convert 8bit mode file into screen mode 7 file, takes in a .CGX file and exports to a .CHR file
mkenemy | .c | Enemy car character data archiver takes in a .TBL and exports to a .CHR file
mkmap | .c | Map data generator takes in .PCK and .WTB files and exports to SLT and WLD files
mkpanel | .c | Map panel data generator takes in a .TBL and generates a .PCK and .PNL file
mkpers | .c | Demo pers data compress
mkrival | .c | Rival car character data archiver, reads a .TBL file and exports a .CHR file
mkselect | .c | Car select screen data compress
mkspchr | .c | OBJ character data compress takes in OBJ and CHR files and creates a **OBJECT.CHR** file
schpnl | .s | Assembly source file containing implementation for int schpnl(char* pnlofs, char* pnlbuf, char* panel, int pnlcnt )
setbomb | .c | Set bomb data takes in a slit address and a Panel data file (.PNL), Map (.WLD) and a slit data file (.SLT)
slitpress | .c | Slit data compress takes in .SLT and compresses to .SLT2


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

{% capture code_cards %}
{% include source-code-card.html title="armap.c" items=armap_items functions="4" variables="7" lines="136" %}
{% include source-code-card.html title="carmap.c" items=carmap_items functions="19" variables="20" lines="500" %}
{% include source-code-card.html title="chrar.c" items=chrar_items functions="5" variables="7" lines="156" %}
{% include source-code-card.html title="enemy.c" items=enemy_items functions="6" variables="18" lines="221" %}
{% include source-code-card.html title="mkback.c" items=mkback_items functions="3" variables="7" lines="127" %}
{% include source-code-card.html title="mkbgchr.c" items=mkbgchr_items functions="6" variables="7" lines="150" %}
{% include source-code-card.html title="mkenemy.c" items=mkenemy_items functions="6" variables="16" lines="212" %}
{% include source-code-card.html title="mkmap.c" items=mkmap_items functions="18" variables="18" lines="475" %}
{% include source-code-card.html title="mkpanel.c" items=mkpanel_items functions="11" variables="8" lines="325" %}
{% include source-code-card.html title="mkpers.c" items=mkpers_items functions="4" variables="4" lines="98" %}
{% include source-code-card.html title="mkrival.c" items=mkrival_items functions="6" variables="16" lines="209" %}
{% include source-code-card.html title="mkselect.c" items=mkselect_items functions="4" variables="8" lines="120" %}
{% include source-code-card.html title="mkspchr.c" items=mkspchr_items functions="8" variables="11" lines="234" %}
{% include source-code-card.html title="setbomb.c" items=setbomb_items functions="10" variables="12" lines="291" %}
{% include source-code-card.html title="slitpress.c" items=slitpress_items functions="4" variables="2" lines="97" %}
{% endcapture %}

{% include source-code-card-grid.html title="Code Files" content=code_cards %}
