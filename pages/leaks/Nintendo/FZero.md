---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Gigaleak - Original F-Zero Source Code (SNES)
thumbnail: /public/consoles/Nintendo Game Boy.png
_image: /public/images/snes/SNES F-Zero Source Code.jpg
_twitterimage: http://www.retroreversing.com/public/images/snes/SNES F-Zero Source Code.jpg
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
_updatedAt: '2020-09-03'

---
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
en-init-1 | .asm | 
en-init-3 | .asm | 
en-init-4 | .asm | 
fzero_main | .asm | 
fzero_main_pal | .asm | 
fzero_main_usa2 | .asm | 
fzero_pal | .make | 
game_over | .asm | 
game_over_usa | .asm | 
makefile | N/A | Used to build the source code in the folder (run make)
play_main | .asm | 
play_main_pal | .asm | 
player | .asm | 
set-obj | .asm | 
set_back | , .asm | 
set_bg1 | .asm | 
set_bg2 | .asm | 
set_bg2_usa | .asm | 
sound | .asm | 
title_main | .asm | 
title_main_usa | .asm | 


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
 * .CHR - Character data
 * .CGX - 8-bit character data
 * .PCK - Panel Check File
 * .PNL - Panel Data file
 * .WTB

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
mkselect | .c | 
mkspchr | .c | 
schpnl | .s | Assembly source file containing ?
setbomb | .c | 
slitpress | .c | 


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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(ss)char *ss</span></li> 
    <li><span></span> archive<span>(wp,dat)FILE *wp</span></li> 
    <li><span>char </span> dat</li> 
    <li><span></span> getnum<span>(dat)char *dat</span></li> 
    <li><span></span> readchar<span>(fname)char *fname</span></li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span>void</span> make_data<span>(rp,wp)FILE *rp,*wp</span></li> 
    <li><span></span> write_data<span>(code,cnt,wp)int code,cnt</span></li> 
    <li><span>FILE </span> wp</li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">3</div>    <div class="rr-file-stat rr-file-stats-variables">7</div>    <div class="rr-file-stat rr-file-stats-lines">127</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkbgchr.c" />
  <h3>mkbgchr.c</h3>
  <ul>
    <li><span>unchar</span> chrdat[DATSIZE]</li> 
    <li><span>unchar</span> chrbuf[BUFSIZE]</li> 
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> chread<span>(fname,buff,size)char *fname,*buff</span></li> 
    <li><span>int</span> size</li> 
    <li><span></span> chwrite<span>(fname,buff,size)char *fname,*buff</span></li> 
    <li><span>int</span> size</li> 
    <li><span></span> convert<span>(data,size)unchar *data</span></li> 
    <li><span>int</span> size</li> 
    <li><span></span> archive<span>(data,buff,size)unchar *data,*buff</span></li> 
    <li><span>int</span> size</li> 
    <li><span></span> getbnk<span>(data)unchar *data</span></li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(ss)char *ss</span></li> 
    <li><span></span> archive<span>(wp,dat)FILE *wp</span></li> 
    <li><span>char </span> dat</li> 
    <li><span></span> getnum<span>(dat)char *dat</span></li> 
    <li><span></span> readchar<span>(fname)char *fname</span></li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> set_sname<span>(ss)char *ss</span></li> 
    <li><span>int</span> getaddr<span>(str)char *str</span></li> 
    <li><span></span> readpnl<span>(fname)char *fname</span></li> 
    <li><span></span> makemap<span>(nn,fname)int nn</span></li> 
    <li><span>char </span> fname</li> 
    <li><span></span> chkclr<span>(buf)unchar *buf</span></li> 
    <li><span></span> chkpnl<span>(pnl)unchar *pnl</span></li> 
    <li><span></span> setslt<span>(slt)unshort *slt</span></li> 
    <li><span></span> setroom<span>(rom)unshort *rom</span></li> 
    <li><span></span> setwld<span>(wld)unshort wld</span></li> 
    <li><span></span> prsslt<span>()</span></li> 
    <li><span></span> fit_slit<span>(ln,sc)int ln,sc</span></li> 
    <li><span></span> int_slpt<span>()</span></li> 
    <li><span></span> st_slofs<span>()</span></li> 
    <li><span></span> genmap<span>(wld_name,slt_name)char *wld_name,*slt_name</span></li> 
    <li><span></span> genslt<span>(wp)FILE *wp</span></li> 
    <li><span></span> genrom<span>(wp)FILE *wp</span></li> 
    <li><span></span> genwld<span>(wp)FILE *wp</span></li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> set_sname<span>(ss)char *ss</span></li> 
    <li><span></span> mkpanel<span>(nn,fname)int nn</span></li> 
    <li><span>char </span> fname</li> 
    <li><span></span> chkclr<span>(buf)unchar *buf</span></li> 
    <li><span></span> setpnl<span>(pnl)unchar *pnl</span></li> 
    <li><span></span> prspnl<span>()</span></li> 
    <li><span></span> fit_panel<span>(ln,sc)int ln,sc</span></li> 
    <li><span></span> int_pnpt<span>()</span></li> 
    <li><span></span> st_pnofs<span>()</span></li> 
    <li><span></span> genpck<span>(fname)char *fname</span></li> 
    <li><span></span> genpnl<span>(fname)char *fname</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">11</div>    <div class="rr-file-stat rr-file-stats-variables">8</div>    <div class="rr-file-stat rr-file-stats-lines">325</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="mkpers.c" />
  <h3>mkpers.c</h3>
  <ul>
    <li><span>int</span> bincnt</li> 
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span>void</span> make_data<span>(rp,wp)FILE *rp,*wp</span></li> 
    <li><span></span> fgetnum<span>(num,rp)unshort *num</span></li> 
    <li><span>FILE </span> rp</li> 
    <li><span></span> fputnum<span>(num,wp)int num</span></li> 
    <li><span>FILE </span> wp</li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> init_ptr<span>()</span></li> 
    <li><span></span> set_cname<span>(ss)char *ss</span></li> 
    <li><span></span> archive<span>(wp,dat)FILE *wp</span></li> 
    <li><span>char </span> dat</li> 
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
    <li><span>void</span> make_data<span>(rp,wp)FILE *rp,*wp</span></li> 
    <li><span>int</span> write_char<span>(wp,len)FILE *wp</span></li> 
    <li><span>int</span> len</li> 
    <li><span>int</span> write_attr<span>(wp,len,buf)FILE *wp</span></li> 
    <li><span>int</span> len</li> 
    <li><span>unchar </span> buf</li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span>void</span> make_data<span>(fp)FILE *fp</span></li> 
    <li><span>int</span> make1<span>(fp,code,cnum,leng)FILE *fp</span></li> 
    <li><span>int code,cnum</span> leng</li> 
    <li><span>int</span> make2<span>(fp,code,cnum,leng)FILE *fp</span></li> 
    <li><span>int code,cnum</span> leng</li> 
    <li><span>int</span> make3<span>(fp,code,cnum,leng)FILE *fp</span></li> 
    <li><span>int code,cnum</span> leng</li> 
    <li><span>int</span> make4<span>(fp,code,cnum,leng)FILE *fp</span></li> 
    <li><span>int code,cnum</span> leng</li> 
    <li><span>int</span> wthalf<span>(buff,fp)char *buff</span></li> 
    <li><span>FILE </span> fp</li> 
    <li><span>int</span> read_char<span>(fname,code,size)char *fname</span></li> 
    <li><span>int code</span> size</li> 
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
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span></span> set_bomb<span>()</span></li> 
    <li><span></span> push_pos<span>()</span></li> 
    <li><span></span> search<span>(loc_x,loc_y)int loc_x,loc_y</span></li> 
    <li><span></span> sch_room<span>(loc_x,loc_y)int loc_x,loc_y</span></li> 
    <li><span>int</span> getaddr<span>(str)char *str</span></li> 
    <li><span></span> readpnl<span>(fname)char *fname</span></li> 
    <li><span></span> readwld<span>(fname)char *fname</span></li> 
    <li><span></span> readslt<span>(fname)char *fname</span></li> 
    <li><span></span> makewld<span>(fname)char *fname</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">10</div>    <div class="rr-file-stat rr-file-stats-variables">12</div>    <div class="rr-file-stat rr-file-stats-lines">291</div>  </div>
 </div>

 <div class="rr-file-card">
  <img class="geopattern" data-title="slitpress.c" />
  <h3>slitpress.c</h3>
  <ul>
    <li><span></span> main<span>(argc,argv)int argc</span></li> 
    <li><span>char *</span> argv</li> 
    <li><span>void</span> press_slit<span>(rp,wp)FILE *rp,*wp</span></li> 
    <li><span>void</span> fputw<span>(data,fp)int data</span></li> 
    <li><span>FILE </span> fp</li> 
    <li><span>int</span> fgetw<span>(fp)FILE *fp</span></li> 
  </ul>
  <div class="rr-file-stats">    <div class="rr-file-stat rr-file-stats-functions">4</div>    <div class="rr-file-stat rr-file-stats-variables">2</div>    <div class="rr-file-stat rr-file-stats-lines">97</div>  </div>
 </div>

</section>

