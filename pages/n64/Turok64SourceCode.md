---
layout: post
tags: 
- n64
- games
- sourcecode
title: Turok 64 Official Source Code Analysis
image: /public/games/turok/Turok - Dinosaur Hunter (USA) (Rev B) 1.png
videocarousel:
  - title: Turok 64 Official Source Code Found
    image: http://img.youtube.com/vi/ONEy_ybKWsg/0.jpg
    youtube: 'ONEy_ybKWsg'
  - title: The Making of Turok Dinosaur Hunter for Nintendo 64
    image: http://img.youtube.com/vi/ONEy_ybKWsg/0.jpg
    twitch: '125480737'
thumbnail: /public/consoles/Nintendo 64.png
permalink: /turok64sourcecode
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo 64
    url: /n64
  - name: Analysis of the Turok N64 Official Source Code
    url: #
recommend: n64
editlink: /n64/Turok64SourceCode.md
updatedAt: '2018-12-15'
---
# Introduction to Turok 64
<section class="postSection">
<img src="/public/games/turok/Turok - Dinosaur Hunter (USA) (Rev B) 3D.png" class="wow slideInLeft postImage" />

<div markdown="1">
Game was made by Iguana Entertainment under Acclaim and released on March 4th 1997. 
The development team consisted of 9 programmers under the lead of Rob Cohen, 22 artists under the direction of Creative Director Nigel Cook.

In total the Iguana Turok team was made up of over 61 people when you include all the other specialties[^3]. 

In late 2018 the original source code for the N64 Version of Turok was released to the public by an unknown patron, it is believed to have originated from one of the SGI workstations sold off during the Acclaim bankruptcy [^1] [^2].

This makes it the first commercial Nintendo 64 game to have its source code released, which is very exciting from a Retro Game Archeology point of view, we can finally gain some insight into the development of a classic N64 game!

The source code is almost completely written in C with only 2 or 3 assembly files present.
</div>

</section>

---

# Development Tools

## Developer Operating Systems
<section class="postSection">

<img src="/public/games/turokCartridge.png" class="wow bounceInUp postImage" />
<div markdown="1">
It is certain that acclaim used the IRIX Operating System for their Silicon Graphics workstations (IRIS UNIX or IRIX was a variant of the UNIX operating system developed by Silicon Graphics).


In the released Source Code there is an X11 folder, which means this may have been installed as the main desktop for these workstations. 


It would have been very expensive to give all the developers their own Silicon Graphics workstations so it is likely they used other operating systems around the office.


The source code references the macro definition `WIN32` in the source code so there must have been some builds for either windows 3.1 or 95, and as it turns out Turok was released for Windows 95 on the 28th February 1997.


In a documentary for The Discovery Channel it can be seen that Turok 3 used Visual Studio on Windows for programming, but it is unclear if they also used this IDE for the original Turok [^8].
</div>
</section>

## Software Development Kit
According to the latest release notes found in the source code it seems to be using the official N64 development kit released on October 15th 1996. 

No reference has been found to hint at any 3rd party SDKs such as SN Systems SDKs.


## Compression Library - Rob Northern Compression (RNC)
<section class="postSection">
<img src="/public/software/RNC_ProPack.PNG" class="wow bounceInUp postImage" />
<div markdown="1">
Rob Northern Compression or RNC is a compression algorithm used by Iguana to compress game assets for Turok.
You can find out more about RNC Compression over at SegaRetro - [Rob Northen compression - Sega Retro](https://segaretro.org/Rob_Northen_compression).

Specifically the library used is `RNC ProPack` which handles packing and unpacking game data.

It looks like Iguana also used RNC for PS1 games as the file `rnc.s` contains a reference to Sony PSX for its “PROPACK Unpack” code written in assembly [^6].

In the source code `boot.c` looks for an  RNC2 header for assets and decompresses the data if it is found.
</div>
</section>

---

# The Code

## Cheats
<section class="postSection">
<img src="/public/games/turok/Turok-_Dinosaur_Hunter_(Nintendo_64)-cheatmenu.png" class="wow bounceInUp postImage" alt="Turok Cheat Menu From The Cutting Room Floor" />  
<div markdown="1">
You can find all the in-game cheats code in a file conveniently named `cheats.c`, this contains all the rendering code required to display the cheat menu and allow the user to select which cheat to toggle on and off.

First of all we draw the cheat menu background which is a black box with alpha transparency so it is partially transparent.
```cpp
// prepare to draw boxes
    COnScreen__InitBoxDraw(ppDLP) ;
    COnScreen__DrawHilightBox(ppDLP,
                             CHEAT_X, CHEAT_Y,
                             CHEAT_X+CHEAT_WIDTH, CHEAT_Y+CHEAT_HEIGHT,
                             1, FALSE,
                             0,0,0, 200 * pThis->m_Alpha) ;
```

You can see in the following code snippet that we next need to draw the Highlight box for the players current selection. 
We display this texture using a function called DrawBar() in the Pause Screen structure.
Horizontally we want the bar to reach from the start of the cheat menu box drawn previously, plus an additional 8px to give the menu box a little padding. 

Vertically we need to display the highlight bar  at `CHEAT_Y+CHEATMENU_Y+(pThis->m_RealSelection*CHEATMENU_SPACING)`, these variables increase as the player moves up and down the cheat selection options and takes into account the spacing between items which can alter based on the number of cheats the player has available on screen.
```c
    // draw polygon selection bar
    CPause__InitPolygon(ppDLP) ;
    CPause__DrawBar(ppDLP, CHEAT_X+8, CHEAT_Y+CHEATMENU_Y+(pThis->m_RealSelection*CHEATMENU_SPACING),
                        CHEAT_WIDTH-16, CHEATMENU_SPACING, pThis->m_Alpha) ;
```

Finally we just need to draw the text for each Cheat option on screen, so we first initialise the font with the scaling snd colour we want and then we can loop through and call `COnScreen__DrawText` on each cheat option.
```c
// draw each option
    COnScreen__InitFontDraw(ppDLP) ;
    COnScreen__SetFontScale(0.7, CHEAT_SCALE) ;
    COnScreen__SetFontColor(ppDLP, 200, 200, 200, 200, 200, 200) ;
    yStart = CHEAT_Y + CHEATMENU_Y;

    for (i=0; i<CHEAT_END_SELECTION; i++)
    {
        if (cheat_menu_items[i])
        {
            COnScreen__DrawText(ppDLP, cheat_text[i], 320/2, yStart, (int)(255 * pThis->m_Alpha), TRUE, FALSE);
            yStart += CHEATMENU_SPACING;
        }
    }
```
</div>
</section>

## The Assets
After downloading the source code you might be condering where all the assets are, the package does not contain any 3d models or levels in any sort of editable format such as 3dStudio. So how exactly did the developers use this code without any assets to display on screen? This is where `cartdata.dat` comes in to play, this is a custom file format that contains all the assets needed for the game, including 3Dmodels, level data, collision information and textures.

The format uses the RNC Compression we talked about earlier in this page to keep the file size fairly low and for N64 it is included in the `spec` file to bundle it inside the ROM image. 

Also I had a look at a early demo version of Turok for Windows 95 that was shipped with the Italian PC Gamer Magazine issue 28 (1998) and it also has a data file, this time called `demodata.dat`. After a brief look this file also contains RNC compressed sections and it looks to be a very similar format to the n64 `cartdata.dat`

---

# Cartridge and Development Hardware
<section class="postSection">
  <img src="/public/N64/N64Cart_NUS_01A_01.png" class="wow bounceInLeft postImage" />
  <div markdown="1">
The Game was cut on to 8 megabyte cartridges meaning assets needed to be compressed or cut in order to fit everything on the cartridge.
  </div>
</section>

## Controller Pak Support (Game Saving) 
<section class="postSection">
  <img src="/public/N64/n64controllerpak.png" class="wow bounceInLeft postImage" />
  <div markdown="1">
The Game supported the Nintendo Memory Cards known as Controller Paks to save the players progress. You can find most of the code that implemented this feature in `control.h` and of course `control.c`.

First the header file defines some important variables for the use of saving data to the controller paks.

One is the global `ControllerPak` variable which is an instance of `OSPfs` a Nintendo defined type from the official SDK that resides in the OS package. 

The OS is just for Operating System but `Pfs` presumably stands for Pak FileSystem as the memory pak has a very basic file ssystem for saving blocks or `notes` as they seem to be called in the n64 documentation.
```c
extern OSPfs        ControllerPak ;
```

```c
extern  OSPfsState      FileState ;
extern  s32             FilesUsed, MaxFiles ;
extern  s32             TurokFiles ;
extern  s32             FreePages ;


typedef     struct s_File
{
    int             index ;
    char          string[20] ;
    int             pages ;
} t_File ;

extern  t_File      FileDirectory[] ;
```

The FileState variable is of type OSPfsState, this is a Ultra 64 development kit struct defined as:
```c
typedef struct {
   u32 file_size;       /*Note Size*/
   u32 game_code;       /*Game Code*/
   u16 company_code;    /*Company Code*/
   char ext_name[4];    /*Note Extension*/
   char game_name[16];  /*Note Name*/
    }
```

For Turok these fields are defined using the following constants:
```c
u16             CompanyCode   = '51' ;
u32             GameCode          = 'NTUE' ;
char              GameName[16]  = {'t', 'u', 'r', 'o', 'k', 0,0,0,0,0,0,0,0,0,0,0} ;
char                ExtName[4]    = {0,0,0,0} ;
```

The Data that is actually saved to the Game Pak is modelled in a structure called CPersistantData:
<div markdown="1" class="largeCode">

```c++
typedef struct CPersistantData_t
{
    BOOL    SemiAutomaticPistolFlag,    // weapons owned flags
            RiotShotgunFlag,
            AutomaticShotgunFlag,
            AssaultRifleFlag,
            MachineGunFlag,
            MiniGunFlag,
            GrenadeLauncherFlag,
            TechWeapon1Flag,
            RocketFlag,
            ShockwaveFlag,
            TechWeapon2Flag,
            ChronoSceptorFlag ;

    BOOL    ArmorFlag,                      // miscellaneous inventory flags
            BackPackFlag ;

    int BulletPool,                     // weapons ammo
            ShotgunPool,
            EnergyPool,
            ExpTekBowAmmo,
            ExpShotgunPool,
            TekBowAmmo,
            MiniGunAmmo,
            GrenadeLauncherAmmo,
            RocketAmmo,
            TechWeapon2Ammo,
            ChronoSceptorAmmo;

    int ArmorAmount ;

    int WeaponUsing ;

    int Level2Keys,
            Level3Keys,
            Level4Keys,
            Level5Keys,
            Level6Keys,
            Level7Keys,
            Level8Keys ;
    int Level2Access,
            Level3Access,
            Level4Access,
            Level5Access,
            Level6Access,
            Level7Access,
            Level8Access ;
    int ChronoSceptorPieces ;

    int Difficulty ;


    BOOL    RunWalk ;                       // TRUE for RUN
    BOOL    ControlSide ;                   // TRUE for right handed
    BOOL    Blood ;                         // TRUE for blood is on
    BOOL    Stereo ;                            // TRUE for stereo
    u32 MusicVolume ;
    u32 SFXVolume ;
    u32 Opacity ;
    u32 HAnalog ;
    u32 VAnalog ;
    u32 CheatFlags ;
    u32 EnabledCheatFlags ;

    int Health,
            MaxHealth,
            Tokens,
            Lives ;

    u16 Checkpoint ;

    float   BestTrainTime ;

    INT32   BossFlags ;

    u32 Crash ;

} CPersistantData;
```

If you run Turok in an emulator and reach a save point you can get the Memory Pak file `.mpk` that the emulator saves and edit it in a Hex Editor of your choice. Or you can open it in an online MPK editor such as [MPKEdit](https://rawgit.com/bryc/mempak/master/index.html).
</div>

  </div>
</section>


## Official Development Hardware
<section class="postSection">
<div markdown="1">
The game was developed on SGI Indy workstations  with special Nintendo 64 (ultra64 at the time) hardware on a board the plugged straight into the SGI Expansion slot. This allowed developers to test games quickly without having to write a development cartridge every time [^2].
  
In an interview with GamesRadar, lead designer David Dienstbier confirms that Iguana had 2 SGI workstations for development, 1 in a common room for artists to test assets in the real engine and another in the lead programmers office. [^9]
</div>
</section>

## Unofficial Development Hardware
<section class="postSection">
<img src="/public/games/turok/Turok3_DoctorV64.png" class="wow bounceInLeft postImage" />
<div markdown="1">

During a documentary by The Discovery Channel entitled "Video Games: Creating Virtual Fantasy" it documents the life of the developers at acclaim while they are working on Turok 3. 

At around 7 minutes into the show you can see the unofficial development kit known as the Bung Doctor V64. This was a much cheaper development kit compared to the Silicon graphics workstations which would sell for thousands. 

It is unknown if they had these units during the original Turok but it is quite possible [^7].

</div>
</section>

---

# 3D Models
<section class="postSection">
<img src="/public/software/3dsmax/WinWare-3d Studio 4.png" class="wow slideInLeft postImage" />
<div markdown="1">
For Nintendo 64 3D Model development the official standards were NinGen (based on MultiGen) or Alias but it was also common to use SoftImage, Nichimen Graphics or Autodesk's 3DStudio.

In the file `tengine.h` we get a hint that Turok 3D models were developed using 3D Studio (note this was before the MAX version of 3D Studio):
```c
// global matrices
/////////////////////////////////////////////////////////////////////////////

// floating point matrices
CMtxF		mf_3dstudio_to_u64;
```

This is a Matrix definition to convert vertices coordinates from 3DStudio format to N64 (Ultra 64) which gives pretty concrete proof that 3D Studio was the main 3D modelling software used by Iguana while developing Turok 1. 

3DStudio and in turn 3DStudio Max later became the standard for 3D Game content creation so it is likely that Iguana Studios kept using this software for future games.

In an interview with NintendoLife.com Greg Omelchuck, a character animator and 3D modeller for Turok mentions `3D Studio Max v4` but I presume they meant either `3D Studio 4` released in 1994 or `3D Studio Max 1.0` released in 1996 [^10]. 

It would be unlikely to be `3D Studio Max v4` as they say due to it being released in 2000, years after the game was released, unless it was v1.4 but I have a feeling it was `3D Studio 4` as the team would need time to learn the new Max version before they were confident using it for production game 3d modelling.
</div>
</section>

---

# World
<section class="postSection">
<div markdown="1">
In an interview with IGN, David Dinstbier, the project manager for Turok at Acclaim mentioned a world editor that they created for in-house development:
```
All of the tools for this game were created internally; the world editor, how the animation is handled, everything we have, we created here.
```
[^4]
The world editor for Turok that David mentioned has never been released but it would be fascinating to see some screenshots of this tool if they exist.

The official remaster of Turok on Steam does contain a level editor for Turok 1 but it is unknown if this is based on the original in-house editor by Acclaim or if it was written by scratch [^5].
</div>
</section>

# Other Games
<section class="postSection">
<img src="/public/games/South Park (USA).png" class="wow slideInLeft postImage" />
<div markdown="1">
In an interview with GamesRadar, lead designer David Dienstbier confirms that the first South Park Game for N64 was based on the Turok Game Engine, so much of the code released will have been compiled for South Park too[^9].
</div>
</section>

# Compiling the Source Code
The released source code for Turok is very interesting, it looks like whoever started the project simply copied one of the official Nintendo Demos located under `C:\ultra\usr\src\pr` demos.

This is a very common developer technique to get up and running quickly, copy source code that you know works and then build from that.

The PR folder comes with the SDK and stands for `Project Reality` which was N64's codename before `Ultra64`.

The released source code in fact contains the whole `PR` folder, so it also contains some of the official Nintendo code Demos from an early release of the SDK.

## Missing stddef.h
This may have just been a problem with my N64 development environment, but it seemed to be missing stddef.h, so I copied one from the open source dragon sdk ans put it in `c:/ultra/GCC/MIPSE/INCLUDE`.

However I needed to make a change to the file so that it would #define NULL 0, so on line 400 of `stddef.h` change it to:
```
// #define NULL ((void *)0)
#define NULL 0
```

This will stop errors such as `trex.c:229: invalid operands to binary |` from appearing later on.

## Assembler errors
```
as -o adpcm.o adpcm.s
adpcm.s: Assembler messages:
adpcm.s:96: Error: ERROR: Illegal operands `sub'
...
```
To get around this issue I copied `adpcm.o` from the original download of the source code, cheating yes but I'll come back to this later.

## Assembler Warning type of symbol changed from 2 to 1
```
Warning: type of symbol `osWritebackDCacheAll' changed from 2 to 1 in codesegment.o
Warning: type of symbol `osInvalICache' changed from 2 to 1 in codesegment.o
```

# References
[^1]: https://www.turokforums.com/index.php?topic=645.0
[^2]: https://www.reddit.com/r/gamedev/comments/5nxqi9/n64_turok_dinosaur_hunter_source_code_discovered/
[^3]: https://gamefaqs.gamespot.com/n64/199130-turok-dinosaur-hunter/credit
[^4]: https://www.ign.com/articles/1997/01/16/interview-with-the-creator-of-turok
[^5]: https://store.steampowered.com/app/405820/Turok/
[^6]: https://wiki.multimedia.cx/index.php/RNC_ProPack
[^7]: https://web.archive.org/web/20001119222300/http://www.dextrose.com:80/info/0428turok3dev.htm
[^8]: https://youtu.be/dJXHyXxM0fg?t=1659
[^9]: https://www.gamesradar.com/uk/the-making-of-turok-dinosaur-hunter/
[^10]: http://www.nintendolife.com/news/2016/05/feature_the_making_of_turok_dinosaur_hunter
