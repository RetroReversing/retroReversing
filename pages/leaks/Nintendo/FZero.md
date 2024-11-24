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
<div class="rr-changelog-category">
  <div class="rr-version-gen" version="/" date="Root Folder Tree" ></div>
    <ul class="rr-changelog-more">
      <li class="rr-info-gen">Game - Assembly source code for the game</li>
      <li class="rr-info-gen">Tools - C Source code for the tools used to make the game</li>
    </ul>
</div>

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


<div class="rr-source-code-title">Code Files</div>
  <section class="rr-main-cards">
 <div class="rr-file-card">
  <img class="geopattern" data-title="armap.c" />
  <h3>armap.c</h3>
  <ul>
    <li><span>unshort</span> pointer[32]</li> 
    <li><span>unshort</span> length[32]</li> 
    <li><span>int</span> counter</li> 
    <li><span>int</span> address</li> 
    <li><span>int</span> datasize</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> set_mapname<span>(char* ss)</span></li> 
    <li><span></span> archive<span>(char* fname, FILE wp)</span></li> 
    <li><span></span> save_pointer<span>(char* fname)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">136</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="carmap.c" />
  <h3>carmap.c</h3>
  <ul>
    <li><span>arptr</span> sltptr[MAXSLT]</li> 
    <li><span>unchar</span> pnlbuf[MAXPNL][4]</li> 
    <li><span>unshort</span> sltbuf[MAXSLT][16]</li> 
    <li><span>unshort</span> rombuf[MAXROM][16]</li> 
    <li><span>unshort</span> wldbuf[WLDLNY][WLDLNX]</li> 
    <li><span>unshort</span> sltofs[MAXSLT]</li> 
    <li><span>int</span> pnlcnt</li> 
    <li><span>int</span> sltcnt</li> 
    <li><span>int</span> romcnt</li> 
    <li><span>int</span> wldcnt</li> 
    <li><span>int</span> sltlen</li> 
    <li><span>int</span> clrcode</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> set_sname<span>(char* ss)</span></li> 
    <li><span></span> makemap<span>(int nn, char fname)</span></li> 
    <li><span></span> chkclr<span>(unchar *buf)</span></li> 
    <li><span></span> setpnl<span>(unchar *pnl)</span></li> 
    <li><span></span> setslt<span>(unshort *slt)</span></li> 
    <li><span></span> setroom<span>(unshort *rom)</span></li> 
    <li><span></span> setwld<span>(unshort wld)</span></li> 
    <li><span></span> memcmp<span>(register unchar *s1, register unchar *s2, register intnn)</span></li> 
    <li><span></span> memcpy<span>(register unchar *dd, register unchar *ss, register int)</span></li> 
    <li><span></span> arslit<span>()</span></li> 
    <li><span></span> fit_slit<span>(int ln, int sc)</span></li> 
    <li><span></span> int_slpt<span>()</span></li> 
    <li><span></span> st_slofs<span>()</span></li> 
    <li><span></span> genmap<span>(char *fname)</span></li> 
    <li><span></span> genpnl<span>(FILE *wp, int ad)</span></li> 
    <li><span></span> genslt<span>(FILE *wp, int ad)</span></li> 
    <li><span></span> genrom<span>(FILE *wp, int ad)</span></li> 
    <li><span></span> genwld<span>(FILE *wp, int ad)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">19</div>    <div class="rr-file-stat rr-file-stats-variables">20</div>    <div class="rr-file-stat rr-file-stats-lines">500</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="chrar.c" />
  <h3>chrar.c</h3>
  <ul>
    <li><span>int</span> chrlen[6]</li> 
    <li><span>int</span> chralc[6][40]</li> 
    <li><span>char</span> chrbuf[DSIZE][32]</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> archive<span>(int mo,FILE *tp, FILE *wp)</span></li> 
    <li><span></span> flip<span>(unchar *dat, *buf, int len)</span></li> 
    <li><span></span> getnum<span>(FILE *fp)</span></li> 
    <li><span></span> readchar<span>(int argc,char **argv, buf)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">5</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">156</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="enemy.c" />
  <h3>enemy.c</h3>
  <ul>
    <li><span>struct</span> patndata pat[12]</li> 
    <li><span>short</span> patn00[24]</li> 
    <li><span>short</span> patn01[20]</li> 
    <li><span>short</span> patn02[12]</li> 
    <li><span>short</span> patn03[9]</li> 
    <li><span>short</span> patn04[6]</li> 
    <li><span>short</span> patn05[4]</li> 
    <li><span>short</span> patn06[2]</li> 
    <li><span>short</span> patn07[1]</li> 
    <li><span>short</span> patn08[12]</li> 
    <li><span>short</span> patn09[6]</li> 
    <li><span>short</span> patn10[4]</li> 
    <li><span>short</span> patn11[2]</li> 
    <li><span>unchar</span> chrbuf[DSIZE][32]</li> 
    <li><span>int</span> chrcnt</li> 
    <li><span>int</span> total</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(char* ss)</span></li> 
    <li><span></span> archive<span>(FILE *wp, char dat)</span></li> 
    <li><span></span> getnum<span>(char* dat)</span></li> 
    <li><span></span> readchar<span>(char* fname)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">18</div>    <div class="rr-file-stat rr-file-stats-lines">221</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkback.c" />
  <h3>mkback.c</h3>
  <ul>
    <li><span>int</span> bincnt</li> 
    <li><span>int</span> norcnt</li> 
    <li><span>int</span> comcnt2</li> 
    <li><span>int</span> comcnt3</li> 
    <li><span>int</span> nulcnt</li> 
    <li><span></span> main<span>(int argc, char * argv)</span></li> 
    <li><span>void</span> make_data<span>(FILE *rp,*wp)</span></li> 
    <li><span></span> write_data<span>(int code, int cnt, FILE wp)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">127</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkbgchr.c" />
  <h3>mkbgchr.c</h3>
  <ul>
    <li><span>unchar</span> chrdat[DATSIZE]</li> 
    <li><span>unchar</span> chrbuf[BUFSIZE]</li> 
    <li><span></span> main<span>(int argc, char * argv)</span></li> 
    <li><span></span> chread<span>(char *fname,*buff, int size)</span></li> 
    <li><span></span> chwrite<span>(char *fname,*buff, int size)</span></li> 
    <li><span></span> convert<span>(unchar *data,int size)</span></li> 
    <li><span></span> archive<span>(unchar *data,*buff,int size)</span></li> 
    <li><span></span> getbnk<span>(unchar *data)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">150</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkenemy.c" />
  <h3>mkenemy.c</h3>
  <ul>
    <li><span>struct</span> patndata pat[10]</li> 
    <li><span>short</span> patn00[24]</li> 
    <li><span>short</span> patn01[15]</li> 
    <li><span>short</span> patn02[12]</li> 
    <li><span>short</span> patn03[6]</li> 
    <li><span>short</span> patn04[4]</li> 
    <li><span>short</span> patn05[1]</li> 
    <li><span>short</span> patn06[12]</li> 
    <li><span>short</span> patn07[6]</li> 
    <li><span>short</span> patn08[2]</li> 
    <li><span>short</span> patn09[9]</li> 
    <li><span>unchar</span> chrbuf[DSIZE][32]</li> 
    <li><span>int</span> chrcnt</li> 
    <li><span>int</span> total</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(char* ss)</span></li> 
    <li><span></span> archive<span>(FILE *wp, char dat)</span></li> 
    <li><span></span> getnum<span>(char* dat)char *dat</span></li> 
    <li><span></span> readchar<span>(char* fname)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">16</div>    <div class="rr-file-stat rr-file-stats-lines">212</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkmap.c" />
  <h3>mkmap.c</h3>
  <ul>
    <li><span>arptr</span> sltptr[MAXSLT]</li> 
    <li><span>unshort</span> sltofs[MAXSLT]</li> 
    <li><span>unshort</span> pnlofs[MAXPNL]</li> 
    <li><span>unchar</span> pnlbuf[MAXPNL *4]</li> 
    <li><span>unshort</span> sltbuf[MAXSLT][16]</li> 
    <li><span>unshort</span> rombuf[MAXROM][16]</li> 
    <li><span>unshort</span> wldbuf[WLDLNY][WLDLNX]</li> 
    <li><span>int</span> pnlcnt</li> 
    <li><span>int</span> sltcnt</li> 
    <li><span>int</span> romcnt</li> 
    <li><span>int</span> wldcnt</li> 
    <li><span>int</span> pnllen</li> 
    <li><span>int</span> sltlen</li> 
    <li><span>int</span> errcnt</li> 
    <li><span>int</span> slttop</li> 
    <li><span>int</span> clrcode</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> set_sname<span>(char* ss)</span></li> 
    <li><span>int</span> getaddr<span>(char* str)</span></li> 
    <li><span></span> readpnl<span>(char* fname)</span></li> 
    <li><span></span> makemap<span>(int nn, char fname)</span></li> 
    <li><span></span> chkclr<span>(unchar *buf)</span></li> 
    <li><span></span> chkpnl<span>(unchar *pnl)</span></li> 
    <li><span></span> setslt<span>(unshort *slt)</span></li> 
    <li><span></span> setroom<span>(unshort *rom)</span></li> 
    <li><span></span> setwld<span>(unshort wld)</span></li> 
    <li><span></span> prsslt<span>()</span></li> 
    <li><span></span> fit_slit<span>(int ln, int sc)</span></li> 
    <li><span></span> int_slpt<span>()</span></li> 
    <li><span></span> st_slofs<span>()</span></li> 
    <li><span></span> genmap<span>(char* wld_name, char* slt_name)</span></li> 
    <li><span></span> genslt<span>(FILE *wp)</span></li> 
    <li><span></span> genrom<span>(FILE *wp)</span></li> 
    <li><span></span> genwld<span>(FILE *wp)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">18</div>    <div class="rr-file-stat rr-file-stats-variables">18</div>    <div class="rr-file-stat rr-file-stats-lines">475</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkpanel.c" />
  <h3>mkpanel.c</h3>
  <ul>
    <li><span>arptr</span> pnlptr[MAXPNL]</li> 
    <li><span>unshort</span> pnlofs[MAXPNL]</li> 
    <li><span>unchar</span> pnlbuf[MAXPNL][4]</li> 
    <li><span>int</span> pnllen</li> 
    <li><span>int</span> pnlcnt</li> 
    <li><span>int</span> clrcode</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> set_sname<span>(char* ss)</span></li> 
    <li><span></span> mkpanel<span>(int nn, char fname)</span></li> 
    <li><span></span> chkclr<span>(unchar *buf)</span></li> 
    <li><span></span> setpnl<span>(unchar *pnl)</span></li> 
    <li><span></span> prspnl<span>()</span></li> 
    <li><span></span> fit_panel<span>(int ln, int sc)</span></li> 
    <li><span></span> int_pnpt<span>()</span></li> 
    <li><span></span> st_pnofs<span>()</span></li> 
    <li><span></span> genpck<span>(char *fname)</span></li> 
    <li><span></span> genpnl<span>(char *fname)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">325</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkpers.c" />
  <h3>mkpers.c</h3>
  <ul>
    <li><span>int</span> bincnt</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span>void</span> make_data<span>(FILE *rp,*wp)</span></li> 
    <li><span></span> fgetnum<span>(unshort *num, FILE rp)</span></li> 
    <li><span></span> fputnum<span>(int num, FILE wp)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">4</div>    <div class="rr-file-stat rr-file-stats-lines">98</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkrival.c" />
  <h3>mkrival.c</h3>
  <ul>
    <li><span>struct</span> patndata pat[10]</li> 
    <li><span>short</span> patn00[24]</li> 
    <li><span>short</span> patn01[15]</li> 
    <li><span>short</span> patn02[12]</li> 
    <li><span>short</span> patn03[6]</li> 
    <li><span>short</span> patn04[4]</li> 
    <li><span>short</span> patn05[1]</li> 
    <li><span>short</span> patn06[12]</li> 
    <li><span>short</span> patn07[6]</li> 
    <li><span>short</span> patn08[2]</li> 
    <li><span>short</span> patn09[9]</li> 
    <li><span>unchar</span> chrbuf[DSIZE][32]</li> 
    <li><span>int</span> chrcnt</li> 
    <li><span>int</span> total</li> 
    <li><span></span> main<span>(int argc, char * argv)</span></li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(char* ss)</span></li> 
    <li><span></span> archive<span>(FILE *wp, char dat)</span></li> 
    <li><span></span> getnum<span>(dat)char *dat</span></li> 
    <li><span></span> readchar<span>(fname)char *fname</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">6</div>    <div class="rr-file-stat rr-file-stats-variables">16</div>    <div class="rr-file-stat rr-file-stats-lines">209</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkselect.c" />
  <h3>mkselect.c</h3>
  <ul>
    <li><span>int</span> bincnt</li> 
    <li><span>int</span> norcnt</li> 
    <li><span>int</span> chrcnt</li> 
    <li><span>int</span> atrcnt</li> 
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span>void</span> make_data<span>(FILE *rp,*wp)</span></li> 
    <li><span>int</span> write_char<span>(FILE *wp, int len)</span></li> 
    <li><span>int</span> write_attr<span>(FILE *wp, int len, unchar buf)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">120</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkspchr.c" />
  <h3>mkspchr.c</h3>
  <ul>
    <li><span>struct data</span> header[34]</li> 
    <li><span>unchar</span> chrbuf[DSIZE][32]</li> 
    <li><span>int</span> chrcnt</li> 
    <li><span>int</span> bincnt</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span>void</span> make_data<span>(FILE *fp)</span></li> 
    <li><span>int</span> make1<span>(FILE *fp, int code, int cnum, int leng)</span></li> 
    <li><span>int</span> make2<span>(FILE *fp,int code, int cnum, int leng)</span></li> 
    <li><span>int</span> make3<span>(FILE *fp, int code,int cnum, int leng)</span></li> 
    <li><span>int</span> make4<span>(FILE *fp, int code,int cnum, int leng)</span></li> 
    <li><span>int</span> wthalf<span>(char *buff, FILE fp)</span></li> 
    <li><span>int</span> read_char<span>(char* fname, int code, int size)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">8</div>    <div class="rr-file-stat rr-file-stats-variables">11</div>    <div class="rr-file-stat rr-file-stats-lines">234</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="setbomb.c" />
  <h3>setbomb.c</h3>
  <ul>
    <li><span>unchar</span> pnlbuf[MAXPNL]</li> 
    <li><span>unchar</span> sltbuf[MAXSLT]</li> 
    <li><span>unchar</span> wldbuf[MAXWLD]</li> 
    <li><span>unchar</span> rombuf[MAXROM]</li> 
    <li><span>struct STACK</span> bomb[MAXBOMB]</li> 
    <li><span>int</span> bombct</li> 
    <li><span>int</span> romcnt</li> 
    <li><span>int</span> romptr</li> 
    <li><span>int</span> sltptr</li> 
    <li><span>int</span> pnlptr</li> 
    <li><span>int</span> sltofs</li> 
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span></span> set_bomb<span>()</span></li> 
    <li><span></span> push_pos<span>()</span></li> 
    <li><span></span> search<span>(int loc_x, int loc_y)</span></li> 
    <li><span></span> sch_room<span>(int loc_x, int loc_y)</span></li> 
    <li><span>int</span> getaddr<span>(char *str)</span></li> 
    <li><span></span> readpnl<span>(char *fname)</span></li> 
    <li><span></span> readwld<span>(char *fname)</span></li> 
    <li><span></span> readslt<span>(char *fname)</span></li> 
    <li><span></span> makewld<span>(char *fname)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">12</div>    <div class="rr-file-stat rr-file-stats-lines">291</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="slitpress.c" />
  <h3>slitpress.c</h3>
  <ul>
    <li><span></span> main<span>(int argc, char* argv)</span></li> 
    <li><span>void</span> press_slit<span>(FILE *rp, FILE *wp)</span></li> 
    <li><span>void</span> fputw<span>(int data, FILE fp)</span></li> 
    <li><span>int</span> fgetw<span>(FILE *fp)</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">97</div>  </div>
 </div>

</section>

