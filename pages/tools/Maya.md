---
layout: post
tags: 
 - 3d
 - tools
title: Maya (Alias Wavefront, Autodesk) - The history of the Maya 3D software in the games industry
thumbnail: /public/images/RetroReversingLogoSmall.png
permalink: /maya
breadcrumbs:
  - name: Home
    url: /
  - name: Tools
    url: /tools
recommend: 
  - 3d
  - tools
editlink: /tools/Maya.md
---

# Introduction
Maya was first released in 1998 as the successor to Alias's **PowerAnimator**, integrating technologies from multiple earlier tools (Alias PowerAnimator, Wavefront's Advanced Visualizer, etc.) into a single package.

It has evolved over time and in 2025 it is one of the most used 3D Modeling programs in the games industry.

---
# Version History

Technically the history of Maya goes all the way back to the founding of **Alias Research** (by Stephen Bingham, Nigel McGrath, Susan McKenna and David Springer) back in 1983.

## Alias/1 (1985-1988)
<iframe width="560" height="315" src="https://www.youtube.com/embed/_T89mxiIKFU?si=uptMjgOiVKcULLFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Alias released the first version **Alias/1** at **SIGGRAPH 85** where it stood out due to its use of smooth cardinal splines rather than the more traditional jagged polygonal lines [^3]. 

David Springer supervised the project that involved 300,000 lines of code written in the C programming language [^3].

For more information on the early history of Alias check out: [8.3 Alias Research – Computer Graphics and Computer Animation: A Retrospective Overview](https://ohiostate.pressbooks.pub/graphicshistory/chapter/8-3-alias-research/)

## Alias PowerAnimator (1988–1990s)

<iframe width="560" height="315" src="https://www.youtube.com/embed/pCVUOxvQWaU?si=zLBaHV9LphqCzTtr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Before Maya, Alias PowerAnimator (also just "Alias") was Alias Research's flagship 3D software from 1988 through the 1990s. PowerAnimator was a fully integrated 3D modeling and animation suite and became a de facto industry standard in its time, widely used in high-end film VFX and game development. 

Notably, it was used to create groundbreaking effects like the water pseudopod in **The Abyss** (1989) and the liquid-metal T-1000 in **Terminator 2** [^3].

In game development, PowerAnimator was part of **Nintendo 64**'s SGI-based dev kit and was used for modeling/animation on several ‘90s games. 

**Crash Bandicoot** (1996) on PS1 is another example of a game whose characters and environments were built with PowerAnimator. 

Other titles like Wing Commander III/IV, Oddworld: Abe's Oddysee, and Quake also leveraged PowerAnimator in their art pipelines.

---
## Maya 1.0 (1998)
<img width="480" height="480" alt="image" src="https://github.com/user-attachments/assets/8264e21b-977d-40c6-933c-ec9eb0a3270d" />

Maya 1.0 was released in February 1998, developed by **Alias|Wavefront** (a merger of Alias Research and Wavefront Technologies under SGI). Maya's codebase merged the best of PowerAnimator and Wavefront's tools into a new unified application.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C1VZXyAkLVU?si=VgeqcjX28llhC0Ai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Disney collaborated during Maya's development, with the Disney's Dinosaur (2000) team influencing Maya's UI customization features. 

Maya 1.0 introduced a comprehensive toolset (modeling, animation, rendering, dynamics) with **MEL** (Maya Embedded Language) for scripting and workflow customization. This open, scriptable architecture made it extremely flexible and earned early praise from animators. 

Initially supporting **SGI IRIX** and **Windows NT**, Maya 1.0 enabled high-end 3D on both workstation and PC. 
Its debut was highly anticipated in both the film and game industries. 

**The Matrix** (1999) made extensive use of Maya for its groundbreaking effects. Game studios also began evaluating Maya for its advanced animation tools, though the 1.0 release had some growing pains (e.g. the renderer was not on par with dedicated renderers).

---
## Maya 1.5 (1998)

Later in 1998, Alias|Wavefront released Maya 1.5 – an interim update primarily for SGI IRIX users. Maya 1.5 (IRIX-only) introduced some features that hadn't made it into the initial Windows release. 

For example, Depth of Field (DOF) rendering, which was present in the IRIX Maya 1.5 – allowed artists to achieve in-camera focus effects (albeit with heavy render times). 

Being IRIX-only, 1.5 was aimed at maintaining the existing SGI workstation user base while Alias continued refining the Windows port. 

Maya 1.0.1 for Windows had arrived by October 1998, so by the end of 1998 both IRIX and Windows platforms were supported. The 1.5 update gave IRIX studios a boost with new rendering and animation tweaks, but was short-lived – the next major version, 2.0, was just around the corner. 

Maya's rapid update cadence in this era reflected Alias|Wavefront's push to satisfy high-end users' demands and get the young software on par with or ahead of competitor features.

---
## Maya 2.0 (1999)
<img width="420" height="360" alt="image" src="https://github.com/user-attachments/assets/eac66b80-3dfa-47b7-8a26-d135e12558e6" />

Maya 2.0, released in mid-1999, was a significant leap forward that addressed many of 1.x's limitations and firmly established Maya as a top-tier 3D package. This version was released simultaneously on IRIX and Windows NT, signalling equal commitment to both platforms (critical for game studios transitioning to Windows-based pipelines). 

Maya 2.0 introduced vastly improved rendering and performance: it added multi-processor rendering support, so machines with multiple CPUs could finally use all their cores when rendering (Maya 1.0 had been single-threaded). 
It also integrated an Interactive Photorealistic Renderer (IPR) – an interactive render view allowing artists to tweak lights and shaders and see updates almost instantly, without full re-renders. 

Other enhancements included true Depth of Field and 3D motion blur effects in the renderer (bringing Maya closer to film-quality output), and UI improvements like the new Hypershade material editor.

While Maya's native renderer still wasn't as acclaimed as RenderMan or Mental Ray at this point, 2.0 gave artists more control and preview capability than before. 

In animation, Maya 2.0 improved character setup and effects – e.g. particle systems gained the ability to instance geometry for richer effects (useful for “chunky” explosions). 

Reviewers noted that Maya 2.0 “puts more power in the hands of the artist” and was a big stride toward Maya becoming the leading all-in-one 3D package. The community's reception was positive; technical directors who had used 1.0 recognized 2.0 as a “great leap forward” in functionality and a sign of Maya's maturity. By the end of 1999, more game developers were starting to adopt Maya 2.x for its strong character animation tools, now that the platform had stabilized and performance improved.

---
## Maya 2.5 (1999)
<img width="525" height="323" alt="image" src="https://github.com/user-attachments/assets/542ba0cf-ba5d-43fe-930b-925c70035381" />

Released in November 1999, Maya 2.5 was a mid-cycle upgrade building on 2.0's foundation. It delivered further refinements and optimizations just in time for the year 2000. 

While not introducing headline features as 2.0 did, version 2.5 improved overall stability and incorporated user feedback from 2.0 deployments. For example, rendering workflow saw minor enhancements, some features that debuted on IRIX 1.5 (like certain rendering options) were now fully unified across platforms. 

Maya 2.5 also bundled in various plug-ins and scripts (some of which were external add-ons for 2.0) into the core package – an example being render diagnostics tools to help TDs optimize scene rendering. This version readied Maya to better support large projects; indeed, major productions like Square's animated film Final Fantasy: The Spirits Within (2001) were in development around this time and using Maya. 

In games, Maya 2.5 and 2.x in general were being tested in R&D teams, its strong NURBS modeling (for high-res cinematics) and growing polygon tools made it attractive alongside established tools like 3D Studio Max. Overall, Maya 2.5 smoothed the path toward the robust Maya 3.0, ensuring that early adopters' needs were being met.

---
## Maya 3.0 (2000)
<img width="600" height="420" alt="image" src="https://github.com/user-attachments/assets/e2b6f2d5-c6dd-4426-8aba-1a760dbfbfec" />

Maya 3.0 arrived in early 2000 (with a 3.0.1 update in January 2001) and marked another step in Maya's evolution.

Importantly, Maya 3.0 was the first version to support Linux, reflecting the industry's shifting interest toward Linux for CG work. 

The initial Linux release targeted Red Hat and came out a few months after the IRIX/Windows release, allowing studios to start deploying Maya on cheaper PC hardware running Linux for rendering and animation tasks. 
In terms of features, Maya 3.0 continued to refine animation and modeling: it introduced improved character skinning and deformations, and its Trax nonlinear animation editor (for blending animation clips) became more powerful. 

Maya's dynamics and particles were enhanced as well, and new presets were added (e.g. quick presets for fire, smoke, etc., giving artists a starting point for effects). 

The software's integration capabilities also grew, by this time Maya supported a robust plugin API and formats like OBJ and FBX to move assets between tools, which was crucial for game developers with custom engines. 

Community reception of Maya 3.0 was generally positive as it showed Alias|Wavefront's commitment to rapid improvement. 
Even Linus Torvalds himself commented on Maya's complexity, calling Maya 3 "the most complex and powerful 3-D application ever to run on Linux". 

With stability improvements and cross-platform support, Maya 3.x was increasingly seen in game development pipelines, especially for animation and cutscene creation, at studios that could afford its high price tag.

---
## Maya 3.5 (2001)
<img width="600" height="420" alt="image" src="https://github.com/user-attachments/assets/c82c0a0a-12bd-453a-ba8d-40aa5d35d32c" />

Maya 3.5 was a special release in late 2001 that for the first time brought Maya to Apple's Mac OS X platform. 

Alias|Wavefront ported Maya to OS X due to growing demand from graphics professionals on the Mac (since Apple's new Unix-based OS X could handle pro 3D apps). 

Maya 3.5 was Mac-only (a 3.5.1 followed in 2002) and roughly equivalent to Maya 4's feature level, but tuned for OS X. 

This gave Mac-based game art teams (and education institutions using Macs) access to Maya's toolset for the first time. 

The Mac port included Maya's full functionality (minus any IRIX-specific bits), proving the software's portability. 

Meanwhile, on other platforms the main line jumped from 3.0 to 4.0, so Maya 3.5 can be seen as Alias's effort to sync up Mac support. 

Its release was well received by Mac-oriented studios and developers; Macworld magazine noted Maya Complete 4.5 for OS X finally delivered a no-compromises 3D solution on Mac (since previously only programs like LightWave or Electric Image were on Mac). 

Maya 3.5 on Mac effectively broadened Maya's user base, although in the long run Windows and Linux remained dominant in game development.


---
# Retro Games that used Maya

Many influential games from the late 1990s and 2000s utilized Maya (or its predecessor PowerAnimator) in their development, the table below highlights a few notable examples of retro games and evidence of Maya's use in their creation:

Game | Developer | Console | Proof of Maya Usage
---|---|---|---
MADDEN NFL 2001 | EA | PS2 | [Maya Used In Top 4 PlayStation 2 Titles - Animation World Network](https://www.awn.com/news/maya-used-top-4-playstation-2-titles)
SSX: SNOWBOARD SUPERCROSS | EA | PS2 | [Maya Used In Top 4 PlayStation 2 Titles - Animation World Network](https://www.awn.com/news/maya-used-top-4-playstation-2-titles)
TEKKEN TAG TOURNAMENT | Namco | PS2 | [Maya Used In Top 4 PlayStation 2 Titles - Animation World Network](https://www.awn.com/news/maya-used-top-4-playstation-2-titles)
Heavenly Sword | Sony Cambridge Studios, Ninja Theory | PS3 | [SONY GAMES - Heavenly Sword with Autodesk Maya and MotionBuilder.flv - YouTube](https://www.youtube.com/watch?v=PrH3bdWPk9Y)

## Heavenly Sword (2007)
The PS3 game **Heavenly Sword** was featured in the November 2007 issue of 3D World magazine where it mentions Maya was used with a screenshot of what appears to be a Maya (2008?) interface [^4]:
<img width="1045" height="940" alt="image" src="https://github.com/user-attachments/assets/5ca1f513-ff07-44bb-b50d-0f4622629322" />

Autodesk also produced a marketing video where they show off the use of Maya in Sony Cambridge Studios while they were working on Heavenly Sword where they mention using Maya 2008 directly [^5]:
<iframe width="560" height="315" src="https://www.youtube.com/embed/PrH3bdWPk9Y?si=rr7F_WZtXqHGN17f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# References
[^1]: [Maya 1.0 Qualification](https://download.autodesk.com/us/maya/qualcharts/maya_1_0.html?_gl=1*vnod1b*_ga*MTg4NzY1ODQ5MS4xNzU2NjQ5MzYx*_ga_NZSJ72N6RX*czE3NTY2NDkzNjEkbzEkZzEkdDE3NTY2NDkzNjEkajYwJGwwJGgw&_ga=2.174041635.1644627704.1756649362-1887658491.1756649361)
[^2]: [Maya Used In Top 4 PlayStation 2 Titles - Animation World Network](https://www.awn.com/news/maya-used-top-4-playstation-2-titles)
[^3]: [8.3 Alias Research – Computer Graphics and Computer Animation: A Retrospective Overview](https://ohiostate.pressbooks.pub/graphicshistory/chapter/8-3-alias-research/)
[^4]: 3D World magazine Issue 96 from November 2007
[^5]: [SONY GAMES - Heavenly Sword with Autodesk Maya and MotionBuilder.flv - YouTube](https://www.youtube.com/watch?v=PrH3bdWPk9Y)
