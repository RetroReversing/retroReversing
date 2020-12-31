---
layout: post
tags: 
- n64
- 3d
title: N64 3D Modelling Software
image:  https://img.youtube.com/vi/TxlVAQeJQEk/hqdefault.jpg
thumbnail: /public/consoles/Nintendo 64.png
videocarousel:
  - title: Alias Wavefront, Batman & Robin 3D Character Models on SGI Indy from Probe Software - YouTube
    image: https://img.youtube.com/vi/TxlVAQeJQEk/hqdefault.jpg
    youtube: TxlVAQeJQEk
permalink: /n64-3d-modelling
breadcrumbs:
  - name: Home
    url: /
  - name: N64
    url: /n64
  - name: Nintendo 64 3D Modelling Software
    url: #
recommend: n64
editlink: /n64/N64_3DModellingSoftware.md
updatedAt: '2020-05-03'
---

During the Nintendo 64s lifetime 3D modelling tools evolved at an incredible pace. 3D games were the new trend which pushed developers into creating new 3D games in order to get published.

For Nintendo 64 3D Model development the official standards were NinGen (based on MultiGen) or Alias but it was also common to use SoftImage, Nichimen Graphics or Autodesk's 3DStudio.

# 3D Modelling
3D Modelling software was relatively new when development for Nintendo 64 game started, but during the lifetime many new products flooded the market and by the end artists were spoiled for choice.

## Ningen/Multigen/GameGen
<section class="postSection">
    <img src="/public/N64/Nintendo64_NinGen_MultiGen_ge007_stpetersburg.png" class="wow slideInLeft postImage" />
<div markdown="1">
Ningen was a custom version of the realtime 3D modelling software called `MultiGen` created by the company `Multigen Inc` and tailored specifically for video game platforms, especially Nintendo 64. 

The company Multigen were well known for creating very good 3D modelling tools for a variety of purposes, such as flight simulators and games.

They were developed to run on SGI's IRIX Operating system and so would be limited to developers who can afford the cost of the SGI workstations. Although a later version was released for Windows NT based systems, the price of the software itself at 9 thousand dollars was still rather costly.

The product known as `Ningen` was later renamed to `Gamegen` and supported other consoles such as a Playstation 1 aswell as the N64 [^4]. Unlike its competitors such as Softimage and 3D Studio Max, Multigen did not offer any animation functionality as it was presumed that it would be handeled manually in the game engine [^15].

The official Nintendo 64 SDK came with documentation that covered the use of Ningen files (`*.flt`) and a few tools to convert the FLT format into C-code that could be used in a game.

Notable Games with assets created in Multigen:
* San Francisco Rush (N64, PS1) [^15]
</div>
</section>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">HUGE NEWS: ModelGen (the basis for NinGen) on <a href="https://twitter.com/hashtag/SGI?src=hash&amp;ref_src=twsrc%5Etfw">#SGI</a> Irix is now unlocked + working!<br><br>Similar to the interface used by <a href="https://twitter.com/RareLtd?ref_src=twsrc%5Etfw">@RareLtd</a> for <a href="https://twitter.com/hashtag/Nintendo64?src=hash&amp;ref_src=twsrc%5Etfw">#Nintendo64</a> <a href="https://twitter.com/hashtag/3Dmodelling?src=hash&amp;ref_src=twsrc%5Etfw">#3Dmodelling</a><br><br>Thanks <a href="https://twitter.com/Windoze999?ref_src=twsrc%5Etfw">@Windoze999</a> for cracking flexlm, @SiliconClassics for ModelGen itself, <a href="https://twitter.com/GoldenEraDoco?ref_src=twsrc%5Etfw">@GoldenEraDoco</a> and <a href="https://twitter.com/drdoak?ref_src=twsrc%5Etfw">@drdoak</a> for motivation... <a href="https://t.co/NmxHFoi9Sf">pic.twitter.com/NmxHFoi9Sf</a></p>&mdash; Shane Battye🎄 🎮 (@shanebattye) <a href="https://twitter.com/shanebattye/status/1310122697297281024?ref_src=twsrc%5Etfw">September 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
## Alias/Power Animator/Wavefront
<iframe width="560" height="315" src="https://www.youtube.com/embed/TxlVAQeJQEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Alias Power Animator was an excellent 3D modelling and animation package developed for SGI workstations. It came at a very high price point of £60,000 but came with plugins especially for Nintendo 64 development but they were not officially supported by Nintendo [^2].

The software later changed its name to `Alias | Wavefront` after buying out the rival company called `Wavefront`.

This package eventually got turned in to `Maya` and was bought by Autodesk, it is still used in the games industry today but not as widely as competitors such as 3DS Max [^2].

Power Animator was used to develop games such as DMA Design's `Silicon Valley` for the Nintendo 64 [^14].

---
## Softimage
At a cost of £20,000 per license Softimage was a rather expensive product for game development studios to purchase. However its advanced features and excellent support for SGI Workstations made it popular with companies like Nintendo [^1].

Softimage was used in classic Nintendo 64 games such as `Super Mario 64`, `Resident Evil 2` and `Wave Race 64` [^7]. As these started development before Softimage was available for PCs then they were using a version of Softimage such as `Softimage Creative Environment 2.6` which would only run on SGI workstations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/B5_JCX6glMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The video above was created by `David Gallagher` and uses Softimage 3D V3.5-3.7 so this would have been available during the development of many Nintendo 64 games as version 3.5 was available from May 1996.

## Kinetix/AutoDesk 3D Studio/3DS MAX
 <iframe width="560" height="315" src="https://www.youtube.com/embed/XiYMftMMcCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

3D Studio 4 was released in 1994 and only ran on the 16-bit MS-DOS operating system. It wasn't until 1996 that 3D Studio MAX 1.0 was released with support for Windows NT.

The main advantage of 3D Studio was its cheaper price point (£3,000) than competitors such as Alias, Multigen and Softimage [^2].

The official Nintendo 64 Developer Documentation refers to the 3DS plugins that Nintendo distributes as part of the official SDK. These plugins allowed 3D Studio to output to the Nintendo 64 format known as `NIFF` [^9].

3D Studio Max R2 was used to create all the vehicles and tracks for the N64 game `Top Gear Overdrive` [^13]. 

### GAMUT-64
Intelligent Systems added support for `3D Studio MAX R2` and above to their `IS-VIEWER64` development cartridge. This provided a bunch of plugins for 3D Studio Max to convert to the Nintendo 64 NIFF and AGT file formats along with the ability to preview 3D models directly from 3DS Max on the n64 hardware [^8].


## Nichimen Graphics N-World
<iframe width="560" height="315" src="https://www.youtube.com/embed/NECblvMZvpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One of the most unique things about N-World is that it was written in the programming language Lisp, which is still a very rare occurrence to find commercial software written in a form of Lisp.

One of the benefits of N-World was a feature called `Instant Gratification` which showed a 3D model in real time on the Nintendo 64 hardware [^2].

N-World was used for classic Nintendo 64 games such as Super Mario 64 and Banjo Kazooie [^10].

## Unconfirmed Other 3D Modelling Software
It is possible that `Lightwave 3D` was used for the creation of assets for some Nintendo 64 games as it was available during its lifetime, and Nintendo even sealed a plugin for Lightwave that exported to their `NIFF` format [^9], but no commercial games have been confirmed that used Lightwave.

# Other 3D Related tools

## NIFF Editor
<section class="postSection">
    <img src="/public/N64/Nintendo64niffEditor.gif" class="wow slideInLeft postImage" />
<div markdown="1">
NIFF Editor was part of the package known as `NIFF Navigator` and the first version was released on the 9th of October 1997 and the last release on May 6th 1999 [^12].
</div>
</section>

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en-gb"><p lang="en" dir="ltr">Okay found a scene viewer program, which builds a preview executable for running on hardware. This seems to have a more complete makefile so I&#39;ll use that one as a base and try building the samples again <a href="https://t.co/eaPYR95WUP">pic.twitter.com/eaPYR95WUP</a></p>&mdash; Matt Phillips (@bigevilboss) <a href="https://twitter.com/bigevilboss/status/1214919320347828225?ref_src=twsrc%5Etfw">8 January 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
# Texture Creation
Deluxe Paint (Dpaint) was the most popular tool for making textures, along with PaintShopPro and PhotoShop. So any editor which supported saving the SGI's RGB format was supported and their were tools to convert other formats to RGB.

In order to use the textures in a Nintendo 64 game, the official SDK came with the command line tool called `rgb2c` which converted a SGI RGB image file into compilable C Code!

If the texture was referenced in a 3D model format such as Ningen (`*.flt`) then it would be automatically converted to C-code when the model was converted.



---
# References
[^1]: [What programs did people use to make models for the N64 and PS1? - General Forums / Blender and CG Discussions - Blender Artists Community](https://blenderartists.org/t/what-programs-did-people-use-to-make-models-for-the-n64-and-ps1/511620/6)
[^2]: [N64 3D modeling software options](https://assemblergames.com/threads/n64-3d-modeling-software-options.65407/)
[^3]: [GoldenEye: Decoded: NinGen 3D Modelling](https://goldeneyedecoded.blogspot.com/2014/04/ningen-3d-modelling.html)
[^4]: [FAQ: Chris Lee – MCV/Develop](https://www.mcvuk.com/faq-chris-lee/)
[^5]: [Alias Wavefront, Batman & Robin 3D Character Models on SGI Indy from Probe Software - YouTube](https://www.youtube.com/watch?v=TxlVAQeJQEk)
[^6]: [Softimage Character Kit - Tape 1 - YouTube](https://www.youtube.com/watch?v=B5_JCX6glMA)
[^7]: [Softimage Used by Game Developers to Create Award-Winning Games](https://web.archive.org/web/20071217130147/http://www.microsoft.com/presspass/press/1997/apr97/gmedevpr.mspx)
[^8]: [IS-VIEWER64](http://ultra64.ca/files/documentation/online-manuals/man-v5-1/tools/isv/isv.htm)
[^9]: [RESOURCES](http://ultra64.ca/files/documentation/online-manuals/man/sample/numirror/resource.htm)
[^10]: [ACCL Message Board - Msg: 1910481](https://www.siliconinvestor.com/readmsg.aspx?msgid=1910481)
[^11]: [Probe Software, Acclaim Sports Soccer, and Nichimen N-World 3.1 - YouTube](https://www.youtube.com/watch?v=NECblvMZvpQ)
[^12]: [NIFF 2.0 Graphic Environment](http://n64devkit.square7.ch/niff/niff_navi2/index.htm)
[^13]: GAME DEVELOPER Magazine - DECEMBER 1998
[^14]: [Gamasutra: John Szczepaniak's Blog - Unusual Evolution  Developing Space Station Silicon Valley](https://www.gamasutra.com/blogs/JohnSzczepaniak/20130605/193654/Unusual_Evolution__Developing_Space_Station_Silicon_Valley.php)
[^15]: [GDM January 1999](https://archive.org/details/GDM_January_1999/page/n9?q=multigen)
