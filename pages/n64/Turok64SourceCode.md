---
layout: post
tags: 
- n64
- games
- sourcecode
title: Turok 64 Official Source Code
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
  - name: N64 Turok 64 Official Source Code
    url: #
recommend: n64
editlink: /n64/Turok64SourceCode.md
---
# Introduction to Turok 64
<section class="postSection">
<img src="/public/games/turok/Turok - Dinosaur Hunter (USA) (Rev B) 3D.png" class="wow slideInLeft postImage" />

<div markdown="1">
Game was made by Iguana Entertainment under Acclaim and released on March 4th 1997. 
The development team consisted of 9 programmers under the lead of Rob Cohen, 22 artists under the direction of Creative Director Nigel Cook.

In total the Iguana Turok team was made up of over 61 people when you include all the other specialties[^3]. 

In late 2018 the original source code for the N64 Version of Turok was released to the public by an unknown patreon, it is believed to have originated from one of the SGI workstations sold off during the Acclaim bankruptcy [^1] [^2].

This makes it the first commerical Nintendo 64 game to have its source code released, which is very exciting from a Retro Game Archeology point of view, we can finally gain some insight into the development of a classic N64 game!

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


The source code feferences the macro definition `WIN32` in the source code so there must have been some builds for either windows 3.1 or 95, and as it turns out Turok was released for Windows 95 on the 28th February 1997.


In a documentary for The Discovery Channel it can be seen that Turok 3 used Visual Studio on Windows for programming, but it is unclear if they also used this IDE for the original Turok [^8].
</div>
</section>

## Software Development Kit
According to the latest release notes found in the source code it seems to be using the official N64 development kit released on October 15th 1996. No reference has been found to hint at any 3rd party SDKs such as SN Systems SDKs.


## Compression Library (RNC)
Reference to Sony PSX in rnc.s for “PROPACK Unpack”, RNC Pro-Pack is a general data compression library similar to zlib [^6].

`boot.c` looks for an  RNC2 header for assets and decompresses the data if it is found.


---

# Cartridge and Development Hardware
<section class="postSection">
  <img src="/public/N64/N64Cart_NUS_01A_01.png" class="wow bounceInLeft postImage" />
  <div markdown="1">
The Game was cut on to 8 megabyte cartridges meaning assets needed to be compressed or cut in order to fit everything on the cartridge.
  </div>
</section>

## Official Development Hardware
<section class="postSection">
<div markdown="1">
The game was developed on SGI Indy workstations  with special Nintendo 64 (ultra64 at the time) hardware on a board the plugged straight into the SGI Expansion slot. This allowed developers to test games quickly without having to write a development cartridge every time [^2].
  
In an intreview with GamesRadar, lead designer David Dienstbier confirms that Iguana had 2 SGI workstations for development, 1 in a common room for artists to test assets in the real engine and another in the lead programmers office. [^9]
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

This is a Matrix definition to convert vertice coordinates from 3DStudio format to N64 (Ultra 64) which gives pretty concrete proof that 3D Studio was the main 3D modelling software used by Iguana while developing Turok 1. 

3DStudio and in turn 3DStudio Max later became the standard for 3D Game content creation so it is likely that Iguana Studios kept using this software for future games.

In an interview with NintendoLife.com Greg Omelchuck, a character animator and 3D modeler for Turok mentions `3D Studio Max v4` but I presume they meant either `3D Studio 4` released in 1994 or `3D Studio Max 1.0` released in 1996 [^10]. 

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
