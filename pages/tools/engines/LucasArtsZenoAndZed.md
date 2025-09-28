---
layout: post
tags: 
- middleware
- gameengines
title: Zeno and Zed - LucasArts & ILM's Unified Production Pipeline
thumbnail: /public/consoles/Tools.jpg
image: /public/consoles/Tools.jpg
permalink: /lucasarts-zino-and-zed
breadcrumbs:
  - name: Home
    url: /
  - name: Game Engines & Middleware
    url: /engines
  - name: Zeno and Zed - LucasArts & ILM's Unified Production Pipeline
    url: #
recommend:
- middleware
editlink: /tools/engines/LucasArtsZenoAndZed.md
---

# Introduction to the Zeno software and the Zed Game Editor
Back in 2004 George Lucas owned the film company **Industrial Light & Magic** (ILM) along with the games company **LucasArts**, both companies were pioneering in the field of 3D graphics but they didn't directly work with each other.

This changed in **2003**, when a LucasArts engineer **Nick Porcino** attended an ILM R&D open house and witnessed the power of ILM's in-house **Zeno** 3D pipline software and immedietly thought of the potential for game development [^5]. 

Zeno was a modular, ILM-wide hub for 3D content creation and digital asset management that has been in use at ILM since at least 1997 but has never been used in the games industry before.

## Bringing the Games and Film industries together
By bringing the film and video game companies closer togther they could share the practices of real-time visualization developed for game production in their films and at the same time to provide game makers with high-resolution film scenes as source material, win-win.

LucasArts president Jim Ward stated the following in **Computer Graphics World Magazine** [^11]:
>In the same spirit of collaboration and consolidation of assets and talent, ILM and LucasArts are now housed in the same building on George Lucas’s Presidio campus. "[The idea] came from George himself," says LucasArts president Jim Ward. "And it’s key to rebooting our game studio."

It then goes on to mention the Indiana Jones game that would later be cancelled:
>To create its upcoming Indiana Jones 2007 and next-gen Star Wars titles, LucasArts will also be using its Zeno Game Editor, which is incorporated into ILM’s Zeno Development Environment, allowing both film and game artists access to the same tools. LucasArts can now use ILM’s high-end art creation software, while ILM can tap into LucasArts’ real-time technology, which underlies their previsualization tools [^11]

## Zed - The Zeno Game Editor (2004)
After attending the ILM Open House and witnessing Zeno for the first time **Nick Porcino** and **Steve Sullivan** together envisioned a **Virtual Studio** integrating **LucasArts** and **ILM pipelines** together [^5].

The result was a new proct codenamed **Ronin** [^4] which would become **Zed** (Zeno Editor) in 2004, it provided a direct link between the game production process and the sophisticated asset management, lighting, animation, and physics tools pioneered at **Industrial Light & Magic**, supporting rapid iteration and collaborative workflows in large-scale projects. 

These tools formed the backbone of the pipeline that linked LucasArts and ILM, ensuring assets and scenes could be collaboratively developed and transferred in real-time.

It played a major role in the development of games like **Star Wars: The Force Unleashed**, allowing seamless coordination between game asset creation and in-engine testing.

In 2005, ILM CTO **Cliff Plumer** explained: 
> We’ve been working on collaborative tools with LucasArts for 18 months…"Zed", which is LucasArts’ game engine, will have a live connection to Zeno [^1].

It was designed by **Tim Ramsay**, **Eric Johnston**, **Nick Porcino**, and **Nick Pavis** as a modular engine so **both LucasArts and ILM developers could work on it simultaneously**[^4]. 

### Middleware in Zed/Ronin
Middleware like Havok, DMM, and Euphoria were integrated into Ronin [^4].

As one article put it, *“LucasArts’ game engine, Zed, now runs on Zeno, as does ILM’s custom software”* [^2].

---
# The Zeno Toolset
<img width="800" height="608" alt="Davy Jones in Zeno" src="https://github.com/user-attachments/assets/d3fd187c-e072-47ee-9d24-c063c4224c29" />

Industrial Light & Magic (ILM) began developing **Zeno** in the late 1990s (~1997) as an in-house content creation framework to unify their visual effects pipeline [^6]. By the mid-2000s, Zeno had become the **heart of ILM’s pipeline** and by 2004, Zeno had matured enough that ILM could **fully retire its old pipeline** [^1]. 
Then by 2006–2007, *Pirates of the Caribbean: Dead Man’s Chest* and *At World’s End* benefited from Zeno; the CGI character **Davy Jones** was one high-profile creation that benefited from Zeno [^6].

In an interview in the July 2005 issue of **Computer Graphics World** (CGW) **Cliff Plumer** Chief Technology Officer discusses the motivation for the new Zeno toolset: 
> "Our first goal was to manage large scenes, It was driven by the pod race in Star Wars: Episode I." Thus, at its core, Zeno manages scene data. "The old pipeline used the old Softimage scene file, Building our own gave us control."

ILM’s R&D team decided to build a new 64-bit architecture from scratch, giving them full control over scene data management and tool integration [^1]. 

Zeno was envisioned as a **fundamental VFX toolset** – essentially an extensible framework with a **scene graph**, timeline, curve editor, and module system – all centered on efficient workflow [^1]. 

---
## Integration with multiple programs
Rather than a collection of siloed programs for modeling, animation, rendering, etc., Zeno could load whatever tools an artist needed into one unified interface [^1].

Zeno was designed with live links to **Maya** and **Photoshop** – an artist could copy and paste data or edits between Maya and Zeno in real time – and its UI was made to resemble **Maya’s Outliner** to ease adoption [^1]. 

![Maya 7.0 Outliner inspired the Zeno UI](https://github.com/user-attachments/assets/f564e4d6-c05a-4c28-b59a-fd3aff88da55)


Zeno was used in ILM along with to their usual **compositing tools** [^1]: 
* **Apple’s Shake**
* **ILM’s Saber** (based on Autodesk Media and Entertainment’s Inferno)
* **ILM’s CompTime**

Then final renders from **RenderMan** or **Mental Ray** could round-trip back into Zeno’s compositing module for finishing [^1]. 

Python scripting was also supported so developers could write custom operators for Zeno [^1].

### Integration with Maya
**Curt Miyashiro**, digital production supervisor has the following to say about the benefits of Zeno's integration with Maya [^1]:
> Modelers built the tripods and the aliens in Maya using subdivision surfaces. The animators worked in Maya and then transferred the animation to Zeno. Before, the animation was cached; now TDs can tweak the animation in Zeno. Before if we had wanted to change the headlights on the tripod, we would have had to go back to the animators or go into Maya. With this film we could change the direction of the headlights in Zeno while we were working on lighting the shot.

---
## MARS - Camera Tracking System
One of the first applications built on the Zeno framework was ILM’s new camera tracking system (codenamed *MARS*), which successfully leveraged Zeno’s scene graph to integrate 3D matchmoving data with film plates [^1]. 

This module was so effective it earned an **Academy Scientific & Technical Award**. Throughout the early 2000s, ILM gradually replaced dozens of older, disconnected tools with new Zeno-based modules [^1].

## Zenviro - camera projection module
The camera projection module in Zeno was called **Zenviro** and was used to great effect in the **War of the Worlds** (2005), as it allowed ILM compositors to project 2D photographic plates of buildings onto simple 3D geometry to animate destruction effects. They could add cracks, falling debris, and damage progression directly in Zeno [^2].

In the July 2005 issue of CGW compositing supervisor **Marshall Krasser** discusses the destruction sequence creation for War of the Worlds:
> The sequence was crafted with a mixture of effects-from particle simulations for the cracking pavement to practical elements-often with the help of Zenviro, the camera projection module in Zeno. You see a pickup truck that gets rotated around. We lifted it out of the plate, took it into the 3D realm, projected it onto 3D geometry in Zenviro, animated the geometry to rotate it, and composited it back into the plate. [^1]

---

## Hair, cloth, skin and fluid modules 
ILM also collaborated with Stanford’s **Ron Fedkiw** to build a unified simulation engine in Zeno for hair, cloth, skin and fluids [^1]. 

---
## The SceneGraph
Under the hood, Zeno’s core was a **proprietary scene-graph "shot file" system** that allowed complex scenes to be broken into many referenced files while remaining seamlessly connected [^1]. 

Edits could be layered non-destructively: for instance, a technical director could paint a bullet hole decal onto a model in their own layer, and later if a texture artist updated the base texture, the bullet hole would still remain applied on top[^1]. 
As Dennis Muren put it, *"Artists shouldn’t have to be bookkeepers"*[^1].

---
## Caricature (Cari) - Facial Animation System
<img width="640" height="512" alt="Yoda in Cari" src="https://github.com/user-attachments/assets/e54ff7aa-27ed-42bf-8e45-33047be9d193" />

For **Dragonheart** (1996), ILM created a specialized in-house tool called Caricature (nicknamed "Cari") to enable animators to work interactively on Draco’s face, with sliders and real-time feedback.

Before Cari, facial animation at ILM was handled by hand-writing text commands in files to load shapes over time — effectively like stop-motion animation via scripts.

Animators used body motion data from Softimage (the conventional pipeline) then opened that into Caricature just for the facial animation part. 
Caricature allowed animators to hide the rest of the dragon model and focus solely on facial expressions, making high-iteration tweaking possible (e.g. combining phoneme shapes, sneers, eyebrow movement).

Later, Caricature added model correctives, a system allowing artists to fix imperfections in geometry (like a "3D-Photoshop" for sculpted surfaces) inline. 

### Integration of Cari into Zeno
Cari was later integrated into Zeno as stated on the official Lucasfilm website [ILM's Dragonheart Crew Looks Back - Lucasfilm.com](https://www.lucasfilm.com/news/digital-road-dragonheart/) "the techniques in Caricature were integrated into ILM’s current Zeno system in the 2000s."

**Cary Phillips** was awarded a 1998 Academy Technical Achievement Award for the development of Caricature.

---
## Lux - Zeno’s interactive lighting tool
Zeno’s interactive lighting tool **Lux** enabled artists to place and adjust lights in a true 3D context while seeing immediate feedback [^2]. Lux is true 3D lighting for particles and creatures that brings match-moving, interactive lighting, and texture painting together. The shots were later rendered with Pixar’s **RenderMan** and Mental Images’ **Mental Ray** [^1].

TDs in Zeno adjusted the direction and flicker of the Tripods’ headlights during lighting, and applied procedural 2D noise to create an “organic” glow in the alien windows — all without leaving the lighting interface [^2].



---
## The Success of Zeno
> Seven years in the making, Zeno, ILM’s new tool set, has redefined the studio’s pipeline, opened the production process to all the artists on the crew, and positioned the studio to create future forms of entertainment [^1]

It was so successful The developers **Florian Kainz**, **Jeffery Yost**, **Philip Hubbard** and **Jim Hourihan** were honoured for the architecture and development of the Zeno application framework in the Academy SciTech Awards [^6].

---
## Zeno and Zed in Action: Projects and Impact

ILM’s new pre-visualization tool, built on Zed, allowed directors to *“access the entire production pipeline”* in real time, with photogrammetry, live camera tracking, and interactive scene assembly [^2].

On the game side, the **first title to fully use Zed** was *Star Wars: The Force Unleashed* (2008) [^3].

* ILM animators created about 60 minutes of cinematics for the game, using their **CloneCam** performance capture system (developed for *Pirates of the Caribbean*) [^7].
* Zed integrated **DMM and Euphoria**, producing realistic, non-repeating physics; an E3 2006 demo compared throwing R2-D2 at wood in a traditional engine vs. Zed’s real-time physics [^7].

As Jim Ward (LucasArts president) put it, *“Zeno’s impact at LucasArts will be seen as games roll out on the next-generation consoles”*[^2]. 

George Lucas praised it as *“a great collaboration”* that yielded film-quality artistry in games[^3].

---
## Later Developments and Legacy

ILM expanded Zeno with simulation modules like **Plume** (GPU fire simulation) and continued to use it on blockbuster films, earning a 2018 Sci-Tech Award[^6].

LucasArts used Zed/Ronin for *The Force Unleashed II* (2010), but later projects like *Star Wars 1313* were developed on Unreal Engine 3[^9]. 
*1313* was cancelled after Disney shut down LucasArts in 2013 [^9].

**Post-LucasArts Influence:** ILMxLAB (founded 2015) extended the Zeno/Zed spirit into VR/AR using Unreal, producing projects like *Vader Immortal* and powering ILM’s StageCraft for *The Mandalorian*[^9].

---
# References
[^1]: [Acts of War – Computer Graphics World (July 2005)](https://www.cgw.com/Publications/CGW/2005/Volume-28-Issue-7-July-2005-/Acts-of-War.aspx)
[^2]: [ILM’s Game Theory: Games and Movies Share One VFX Pipeline – StudioDaily (Dec 2005), archived on Nick Porcino’s site](http://www.tinmith.net/porcino/game_theory.htm)
[^3]: [Star Wars: The Force Unleashed – Wikipedia (Development section)](https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Unleashed#Development)
[^4]: [The Art and Making of Star Wars: The Force Unleashed – Insight Editions (2008), cited via Wookieepedia](https://starwars.fandom.com/wiki/Ronin_%28engine%29)
[^5]: [You’ve Seen the Movie, Now Play the Video Game: Recoding the Cinematic in Digital Media – M. L. McCracken, Bowling Green State University (2010)](https://rave.ohiolink.edu/etdc/view?acc_num=bgsu1277041634)
[^6]: [ILM’s Scientific Solutions – fxguide (Feb 2014)](https://www.fxguide.com/fxfeatured/ilms-scientific-solutions/)
[^7]: [Star Wars: The Force Unleashed – Wookieepedia (Behind the Scenes)](https://starwars.fandom.com/wiki/Star_Wars:_The_Force_Unleashed#Behind_the_scenes)
[^8]: [ILM's Dragonheart Crew Looks Back - Lucasfilm.com](https://www.lucasfilm.com/news/digital-road-dragonheart/)
[^9]: [Star Wars 1313 – Wikipedia](https://en.wikipedia.org/wiki/Star_Wars_1313)
[^10]: [GDC Vault - LucasArts and ILM: a Case Study of the Convergence of Games and Film](https://gdcvault.com/play/1013242/LucasArts-and-ILM-a-Case)
[^11]: [Game Films - Computer Graphics World](https://www.cgw.com/Publications/CGW/2007/Volume-30-Issue-2-Feb-2007-/Game-Films.aspx)
