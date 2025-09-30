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

# Introduction to Zeno and the Zed Game Editor
Back in 2004/2005 engineers at **LucasArts** were on a mission to find the best technology for the new "next-generation" consoles (Xbox 360, PS3), they travelled the world assessing various middleware and proprietary game engines [^17]. Unbenounst to them, they would actually find an ideal solution sitting in their own backyard.

At that time **George Lucas** owned the film company **Industrial Light & Magic** (ILM) along with the games company **LucasArts**, both companies were pioneering in the field of 3D graphics but they didn't directly work with each other.

This changed when the LucasArts engineer **Nick Porcino** attended an ILM R&D "open house" and witnessed the power of ILM's in-house **Zeno** 3D application framework and immedietly thought of the potential for game development [^5]. 

Zeno helps ILM build and populate digital stages for their films. It contains texture controls, particle generators, and systems for digital actors. Its only drawback is that it's rooted in rendering; each frame is rendered individually in a timeconsuming process, so making changes is very slow going.

Zeno was a modular framework that was used throughout the whole of the ILM studio since at least 1997, to build and populate digital stages for their films. It contained modules for modifying textures, parciles and digital actors. However as Zeno was made for the film industry it was not build for real-time 3D pipelines and this making changes in Zeno was a very time consuming process [^17].

So LucasArts wondered, what if they could modify Zeno to add real-time viewing of assets at runtime using game engine technology, this would not only benefit LucasArts but the whole of ILM would benefit from being able to view assets in real-time. 

By bringing the film and video game companies closer togther they could share the practices of real-time visualization developed for game production in their films and at the same time to provide game makers with high-resolution film scenes as source material, win-win.

Thus the real-time Zeno Editor known as **Zed** was born and was slowly gaining more and more collaborators in both LucasArts and ILM!

## Bringing the Games and Film industries together
![LDAC - Presidio Campus](https://github.com/user-attachments/assets/c5109988-c0f0-4daf-a1e0-530200ab0100)

At roughly the same time as the Zed project was taking off, George Lucas wanted to bring ILM and LucasArts even closer together, pjysically this time. He consolidated the offices and moved both LucasArts and ILM to the **Letterman Digital Arts Center** (LDAC) in Presidio California. 

This accellerated development of both Zeno and Zed and was praised by the LucasArts president **Jim Ward** in **Computer Graphics World Magazine** [^11]:
>In the same spirit of collaboration and consolidation of assets and talent, ILM and LucasArts are now housed in the same building on George Lucas’s **Presidio campus**. "[The idea] came from George himself, and it’s key to rebooting our game studio."

On what was a former Presidio military base, the new 6 acre facility claimed to have the industries largest computer network, designed to accommodate 4K images via 300 10GB and 1,500 1GB ports. It was surrounded by 17 acres of public park including a creek and even a Yoda fountain! 

There is a very good reason why the move to the new premisis keeps getting mentioned in articles about Zeno and Zed, it really was the catazlyst that allowed not only knowledge to flow freely but also assets from both movies and games could be shared on the  600 miles of high speed network cable within the facility!

The designer of the Zeno interface **Dennis Muren** has the following to say about the move and its impact on the Zeno pipeline: 
> The move opened the opportunity to re-invent the pipeline, with the Star Wars movies ending, we’re going to get down to a more realistic number of shots. So we’ve given the artists the opportunity to do practically anything if they want to. [^18]

In the September 2005 issue of 3D World magazine [^18], they had some interesting statistics in their coverage of the move to the new building:
![Letterman Digital Arts Center Statistics](https://github.com/user-attachments/assets/281b5020-16d5-4837-abc6-c67373ff1b65)

---
## Zed - The Zeno Game Editor (2004)
![GDC 2006 - LucasArts and ILM: A Case Study in the Convergence of Game and Films](https://github.com/user-attachments/assets/bed57a7a-8efa-4a67-bd95-e9d911ecae4c)

We learn more about the birth of the Zeno Game Editor (Zed) in a 2006 **Game Developer Conference** (GDC) Talk titled "LucasArts and ILM: A Case Study in the Convergence of Game and Films".

The story goes that after attending the ILM Open House and witnessing Zeno for the first time **Nick Porcino** and **Steve Sullivan** together envisioned a "Virtual Studio" integrating **LucasArts** and **ILM pipelines** together [^10].

The result of the "Virtual Studio" became known as **Zed** (Zeno Editor), it provided a direct link between the game production process and the sophisticated asset management, lighting, animation, and physics tools pioneered in Zeno at **Industrial Light & Magic**, supporting rapid iteration and collaborative workflows in large-scale projects.

### Goal of Zed
The goal of Zed according to **Cliff Plumer**, Chief Technical Officer of ILM, was to enable multiple users to collaborate in real-time, both LucasArts and ILM employees. So that assets sculpted in ILM could simply be dropped into Zed and used in LucasArts projects, allowing an efficient sharing of resources [^18].

These tools formed the backbone of the pipeline that linked LucasArts and ILM, ensuring assets and scenes could be collaboratively developed and transferred in real-time.

### Features of Zed/Zeno
Where Zeno ends and Zed begins is a little hard to follow from the outside so the following list of features may apply to either zed and/or zeno (hard to tell from sources, which feature belonged to which software):
* **Consistent user interface** - One UI pattern to learn rather than learning hundreds of different UI tools [^18]
* **Modular** - modules could be loaded and unloaded when needed [^4]
* **Multi-user editing** - Concurrent editing of assets so artists didn't need to wait for each other [^18]
* **Revision control** - Stroing previous versions of assets [^18]
* **Asset Mangement** - Easy access to all assets in a project/scene [^18]

---
### Contributers to Zed
We don't know all the contributers to Zeno/Zed as there is very little information available about it online but these are people that have been mentioned in relation to developing it:
*  **Nick Porcino** - co-founder of Zed
*  **Steve Sullivan** - co-founder of Zed
*  **Dennis Muren** - Designer of Zeno interface [^18]
*  **Cliff Plumer** - CTO of ILM
*  **Tim Ramsay**
*  **Eric Johnston**
*  **Nick Pavis**

---
### Games built with Zed
Zed played a major role in the development of games like **Star Wars: The Force Unleashed**, allowing seamless coordination between game asset creation and in-engine testing.

Zed was intended not just for star wars but also a future Indiana Jones game that would later be cancelled:
>To create its upcoming Indiana Jones 2007 and next-gen Star Wars titles, LucasArts will also be using its **Zeno Game Editor**, which is incorporated into ILM’s Zeno Development Environment, allowing both film and game artists access to the same tools. LucasArts can now use ILM’s high-end art creation software, while ILM can tap into LucasArts’ real-time technology, which underlies their previsualization tools [^11]

LucasArts used Zed/Ronin for **The Force Unleashed II** (2010), but later projects like **Star Wars 1313** were developed on Unreal Engine 3 [^9]. 
Although sadly the **Star Wars 1313** project was cancelled after Disney shut down LucasArts in 2013.

### Later Developments and Legacy of Zed
After the collapse of LucasArts, Zed would live on in the real-time rendering feature of Zeno which is still in use by ILM today.

The spirit of Zed extended into **ILMxLAB** (founded in 2015) but used the **Unreal Engine** directly instead of Zed, producing projects like **Vader Immortal** and powering ILM’s StageCraft for **The Mandalorian** [^9]. It is currently unknown if they have an integration between Unreal Engine and Zeno, if so then you could say parts of Zed are still alive and well in the games industry.

---
# The Ronin Engine - Star Wars: The Force Unleashed
In 2005, ILM Chief Technology Officer **Cliff Plumer** called Zed the LucasArts Game Engine: 
> We’ve been working on collaborative tools with LucasArts for 18 months… Zed, which is LucasArts’ game engine, will have a live connection to Zeno [^1].

Which is somewhat true as it provided real time rendering to the Zeno platform as a sort of PC game engine, however its not to be confused with the actual game engine that ran Zed games on consumer hardware such as the Xbox 360 and PS3. So as to avoid confusion this article will call Zed the Game editor (think IDE) and Ronin the Game Engine.

So while Zed was the game editor software used for building the game, to actually execute the scenes created in Zed on the PS3 or Xbox 360 would require a game engine.

Thanks to **The Art and Making of Star Wars The Force Unleashed** from 2008 we learn that the game engine is called **Ronin** and although it was only used for the one game it was intended to be used as the basis for multiple including a cancelled Indiana Jones title [^13].

In this article we will use **Zed** to refer to the game development tooling based on Zeno and **Ronin** to refer to the game engine which ran on PS3 and Xbox 360 and was used for **Star Wars: The Force Unleashed**.

There was also a Wii and PS2 version developed but it is unclear how much of the Ronin game engine code they used, they are known to use their own in-house physics engine instead of Havok [^3].

## Middleware in Ronin
Ronin integrated **DMM and Euphoria**, producing realistic, non-repeating physics; an E3 2006 demo compared throwing R2-D2 at wood in a traditional engine vs. Ronin's real-time physics [^7] along with the following middleware:
* **Havok** - Physics engine [^4]
* **Digital Molecular Matter (DMM)** - Pixelux Entertainment's Digital Molecular Matter [^4]
* **Euphoria**  [^4]

---
## PS2/PSP and Wii Version
The PS2, PSP and Wii versions of "Star Wars: The Force Unleashed" are not build by **LucasArts** and thus are not using their proprietary **Ronin** engine. Instead they were developed by **Krome Studios**, a completely seperate studio known for action-platformers and movie tie-in games. 

Krome developed these versions with a separate engine tailored for the older hardware and with unique content and gameplay elements. It is unlikely that ILM/LucasArts would allow their Zeno/Zed software to be used by a third party developer, so we presume these versions were not made using Zed and any assets were either sent over manually to the studio or made custom by **Krome**.

The physics engine for these versions of the game use the **Open Dynamics Engine** (ODE) rather than Havok due to the performance constraints of the PS2/PSP and Wii.

### Files in the PSP Version (Merkury engine)
If you extract the files from the UMD disc you will get the following file structure:
* **./PSP_GAME**
  * **ICON0.PNG** – Main XMB game icon (21 KB)  
  * **PARAM.SFO** – Game metadata: title, version, firmware (472 B)  
  * **PIC0.PNG** – XMB front image (12 KB)  
  * **PIC1.PNG** – XMB background image (151 KB)  
  * **SND0.AT3** – Background audio (XMB menu music) (131 KB)  
  * **SYSDIR**
    * **BOOT.BIN** – Main game executable (uncompressed) (5.4 MB)  
    * **EBOOT.BIN** – Main game executable (encrypted/compressed) (5.4 MB)  
    * **UPDATE**
      * **DATA.BIN** – Firmware update installer data (19 MB)  
      * **EBOOT.BIN** – Firmware updater executable (5.4 MB)  
      * **PARAM.SFO** – Update metadata (2.0 KB)  
  * **USRDIR**
    * **PIC1.PNG** – Duplicate XMB background image (150 KB)  
    * **Attract01_60.pmf** – In-game cutscene/attract video (4.7 MB)  
    * **Attract02_60.pmf** – In-game cutscene/attract video (2.7 MB)  
    * **KromeLogo_60.pmf** – Krome Studios logo video (1.2 MB)  
    * **LucasLogo_60.pmf** – LucasArts logo video (406 KB)  
    * **LngEN_pp.rkv** – English language archive (55 MB)  
    * **LngFR_pp.rkv** – French language archive (52 MB)  
    * **data_pp.rkv** – Main game data archive (models, textures, scripts) (892 MB)  
    * **audiocodec.prx** – Audio codec module (3.2 KB)  
    * **libatrac3plus.prx** – ATRAC3+ audio codec library (19 KB)  
    * **libpsmfplayer.prx** – Video playback module (32 KB)  
    * **psmf.prx** – Video parser module (6.9 KB)  
    * **sc_sascore.prx** – Audio library module (5.8 KB)  

The main executables are **EBOOT.BIN** and **BOOT.BIN**, it contains the standard firmware update files directory, XMB metadata for the game, some standard **PRX** modules (think DLLs but for the PSP) and there are some PlayStation Media Format (.pmf) videos used for cutscenes and studio logos. 

So it is all pretty standard PSP files apart from the **RKV** archives, these are where all the game data is stored, so any game modding or asset extraction takes places using these files.

Briefly looking at the **BOOT.BIN** executable it looks like it is using the **Merkury** engine which was indeed built by **Krome Studios** and used in other games such as **Star Wars: The Clone Wars - Republic Heroes**. 

This confirms that it is not using the Ronin engine, but in the future it would be good to do further analysis to check if there are any references to Zed, Zeno or even some shared Ronin code in the game.

### Game Data Archives - .RKV files
The game uses RKV version 2 archive files, these can be exteacted with [Luigi Auriemma's QuickBMS](https://aluigi.altervista.org/quickbms_list.php) and the [Rkv2 BMS script](https://aluigi.altervista.org/bms/rkv2.bms).

### Source file references in the PSP version
For fun here is a list of unique strings that reference some of the original source code file names from inside the **BOOT.BIN** executable, they all seem to be related to the Ai system:
* d:/starwars/src/StarWars/Source/Ai/PathMap.cpp
* d:/starwars/src/StarWars/Source/Ai/Goals/AI_FollowEntityGoal.cpp
* d:/starwars/src/StarWars/Source/Ai/Goals/AI_OrganisedRetreatGoal.cpp
* d:/starwars/src/StarWars/Source/Ai/Goals/ScriptGoal.cpp
* d:/starwars/src/StarWars/Source/Brains/AIBrain.cpp (AIBrain.h)
* d:\starwars\src\StarWars\Source\Entity\Humanoid\Humanoid.cpp
* d:/starwars/src/StarWars/Source/Props/CustomizeCostumeProp.cpp

It would be interesting to see if the PS2 or Wii versions have more source file references, or maybe one of them has debug symbols?

---
## iOS and N-Gage Version
<iframe width="560" height="315" src="https://www.youtube.com/embed/nD6-8NRrBf0?si=PL8eFICLN32JX_u6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

There was a very simple version released in 2008 for both **iOS** and **N-Gage**, developed by Finnish based developer **Universomo**, it is neither the LucasArts Ronin engine game nor the **Krome Studio** game, instead it is a unique experience which has very simple swipe-based controls and only takes about an hour and a half to complete.

---
# The Zeno Application Framework
![Zeno 3.9.7 from September 13th 2013](https://github.com/user-attachments/assets/63219e5f-8877-4725-b1b7-4fdbbfdd5308)

To find out more about Zed we need to take a look at the underlying foundation - the Zeno Application Framework. As ILM are very secrative, very few details or screenshots are available online about Zeno so some of the information may be incorrect.

Essentially **Zeno** is a powerful digital content creation pipeline used for managing everything from 3D models and lighting to animation and physics simulations and it is proprietary software used in-house at ILM.

## The Interface
The Interface for Zeno is heavily inspired by Maya with a shelf at the top and outliners for hierarchical views.

Based on the screenshot we can presume the following shelves are available:

Shelf Name | Description
---|---
default | Presumably basic tools?
Alembic | ILM Alembic is a computer graphics interchange file format developed jointly by Industrial Light & Magic (ILM) and Sony Pictures Imageworks. It was created to efficiently store and share complex animated geometry and visual effects data across different software platforms and production facilities
Dynamics | Particles and other simulations?
Facial Capture | Cari Facial animation tools?
ILM_TFM | Transformation tools?
ILM_anim | Animation tools
ILM_asset | Asset modification including Plume
ILM_comp | Compositing tools (integration with Comptime?)
ILM_crdev | Creature Development tools?
ILM_crdev_retired | Old Creature Development tools?
ILM_dm | deformation tools?
ILM_dms | deformation and mesh simulation tools?
ILM_face | Cari Facial animation tools?
ILM_Mesh | Mesh editing tools
ILM_frac | Fracturing tools?

---
## Initial Development
<img width="1200" height="675" alt="ILM office - Unknown year" src="https://github.com/user-attachments/assets/3db4a6b4-f5af-44ae-939c-e44aae304725" />

Industrial Light & Magic (ILM) began developing **Zeno** in the late 1990s (~1997) as an in-house content creation framework to unify their visual effects pipeline [^6].

Early work on the new ILM pipeline had been in development since the pre-production of **Star Wars: Episode I** in 1998 and 1999, such as the camera tracking software for the pod race which later became part of Zeno called **MARS** and then the new the camera projection mapping software **Zenviro** [^12].

However, the actual development of the new, standardised toolset took place in the previous two years, triggered by the planned move to new premises at the **Presidio campus** and then a further push for the **War of the Worlds** movie [^12].

In an interview in the July 2005 issue of **Computer Graphics World** (CGW) **Cliff Plumer** Chief Technology Officer discusses the motivation for the new Zeno toolset: 
> Our first goal was to manage large scenes, It was driven by the pod race in Star Wars: Episode I. Thus, at its core, Zeno manages scene data. The old pipeline used the old Softimage scene file, Building our own gave us control.

---
## Pre-Zeno Software at ILM
The Zeno software was actually the **third** pipeline software developed in-house by ILM, the first was based on **SGI Inventor**. 
The second was based on **Softimage scene files** and was primarily designed to produce living creatures rather than entire movies [^12]. 

There were also command line tools such as Ishade, Repo, iComp and somthing called "CBal" used at ILM over 30 years ago in 1995 based on this new employee handbook:
<img width="1280" height="1707" alt="Ishade, repo and other ILM tools" src="https://github.com/user-attachments/assets/b239d773-bdb7-49e2-a90a-296d4407d997" />
These were most likely the precursors for Zeno but some of them may have still been in use.

Also ILM has a Maya-based character building system known as **Blockparty** due to it feeling like creating characters out of bulding blocks, but not sure it it was integrated with Zeno [^20].

---
## The Zeno Scene Graph (Shot files)
Zeno handles the entire collection of assets, animations, lighting setups, and other data that make up a scene, offering tools like a **timeline** (to manage animation over time), a **scene graph** (a hierarchical structure organizing scene elements), and a **curve editor** (for controlling animation curves and other parameter changes) [^12].

Under the hood, Zeno's core was a **proprietary scene-graph** file format developed and controlled by ILM, that allowed complex scenes to be broken into many referenced files while remaining seamlessly connected.

Edits could be layered non-destructively: for instance, a technical director could paint a bullet hole decal onto a model in their own layer, and later if a texture artist updated the base texture, the bullet hole would still remain applied on top [^1].

### Zeno Visual Effect Shot File format (.zshot)
Based on the one screenshot of Zeno we have, it looks like the scene graph file format had a **.zshot** file extension, presumably standing for Zeno Shot (as in a camera 'shot') but this is just based on the toolbar and may be incorrect.

These files represent the complex scene graph data and networks of operators, data objects (called Oids), and relationships that make up a shot in the VFX pipeline [^6].

Zeno manages massive amounts of scene data and allows artists from various disciplines to work and exchange data collaboratively. 

The .zshot files store arbitrary units of a scene, enabling work to be split among artists and passed along efficiently, while maintaining dependencies and non-destructive overrides in versioned files.

---
## Simulation engine
ILM also collaborated with Stanford’s **Ron Fedkiw** to build a unified simulation engine in Zeno for hair, cloth, skin and fluids [^1]. In 2008 he won an Academy Award for Technical Achievement for the fluid simulation system [^14].

### Zeno Hair simulation in action
You can see the animatronic Scrunt being made in the youtube video below for the movie **Lady in the Water**, this required compositing for the grass-like hairs on the creature, Zeno's existing hair simulation was used for the task.
<iframe width="560" height="315" src="https://www.youtube.com/embed/kBQtgmiChZw?si=WtVQV28sROgAX2ox" title="The Making of the Scrunt - YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In the September 2006 issue of **Animation Magazine** there is an interview with the Digital Production Supervisor **Doug Smythe** about the work ILM did on **Lady in the Water** in which he states that he modified the hair simulation system in Zeno to output blades of grass rather than hairs for the "Scrunt" creature.

Allowing him to define hundreds of specific "guide hairs" in the Zeno simulation that would be used to generate the tens of thousands of simulated grass-like hairs on the scrunt. Instead of outputting a hair cylinder or curve, Zeno would output polygon meshes that were shaped like blades of grass. 

These would be placed on the original model which was built in **Autodesk Maya** along with the face shapes built using Zeno's **Cart** facial animation system. Zeno was also used to place lights in the scene and the shot was finally rendered out in Pixar's RenderMan.

Animators then added details such as twigs and branches on the Scrunt's face using **Pixologic’s Zbrush** along with adding  additional woody material around its nose.

### Plume - GPU fluid/fire dynamics simulation
<iframe width="560" height="315" src="https://www.youtube.com/embed/TEd510_imQ8?si=UqYY3NfNV0wleplU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ILM **Plume** module was added to Zeno roughly around 2009 for **The Last Airbender** TV Show, Plume is an internal GPU-based fluid simulation tool developed in-house by ILM specifically for high-performance visual effects work. Plume was showcased in technical VFX presentations and is designed to handle complex fluid dynamics simulations, such as smoke, fire, and gaseous effects, using efficient GPU processing (NVIDIA’s CUDA) to enable rapid iteration, preview, and rendering. 

![Plume screenshot](https://github.com/user-attachments/assets/9277f5e5-1ec4-49d1-bd85-571544c2b699)


Plume was implemented as a **ray-marching renderer**, where rays are cast from the camera into a 3D scene and iteratively advanced (marched) step-by-step until they reach the surface of an object.

Plume has been used in many blockbuster films, earning a 2018 **Sci-Tech Award**, although nowadays it has mostly been replaced with industry standard software such as **Houdini** [^6].

---
## Module system
Zeno was envisioned as a **fundamental VFX toolset** – essentially an extensible framework with a **scene graph**, **timeline**, **curve editor**, and **module system** – all centered on efficient workflow [^1]. 

Modules included:
  * **Match-moving/Camera Tracking** - M.A.R.S
  * **Camera projection** - Zenviro
  * **Facial animation** - Caricature (Cari)
  * **Lighting** - Lux
  * **Sculpting** - Isculpt [^19]
  * **Animation** - Zeno Poseur [^19]
  * **Painting** - Viewpaint integration with Zeno? [For more information about check out Viewpaint: ILM’s secret weapon on Jurassic Park from vfxblog](https://vfxblog.com/viewpaint/)
  * **Particles** - Plume
  * **Rotoscoping**

According to **Chris Evans** who used to work at ILM, Zeno had **Geodesic Voxel Binding** before it was introduced in Maya 2015, which used mesh normals to eliminate crosstalk between manifold parts like fingers [^15].

### Zeno Commodore?
In the **Electronic art and animation** catalog from SIGGRAPH 2004 it mentions a tool called **Zeno Commodore**, but not sure what it is [^19].

### ILM Dynamic Rigging
ILM’s Dynamic Rigging system, often associated with their **BlockParty** tool, is an advanced rigging framework designed to streamline the creation of rigged characters and assets for animation and visual effects. It was created by **Jason Smith** for the Transformers movie [^22].

This system allows artists to build detailed, flexible, and reusable rigs that can animate complex creatures as well as mechanical objects like spaceships.

Key features of ILM’s Dynamic Rigging include:
	*	A comprehensive connection framework that integrates various rigging components consistently.
	*	A novel graphical user interface and volumetric rig transfer to improve workflow speed and artist productivity.
	*	The ability to reuse rig components and focus more on the artistic aspects of rigging rather than technical challenges.
	*	Support for both organic and mechanical rigging needs, treating animateable objects with the same pipeline workflow whether they are living creatures or metallic spaceships.

This rigging system has been recognized for its innovation, earning ILM Scientific and Technical Awards for facilitating rich, complex rigs to be developed more efficiently, supporting the production of high-quality creature animation and effects in major films.

---
### Zeno Tentacle Plugin
<img width="800" height="608" alt="Davy Jones in Zeno" src="https://github.com/user-attachments/assets/d3fd187c-e072-47ee-9d24-c063c4224c29" />

For the film **Pirates of the Caribbean Dead Man's Chest**, **David Meny** designed a Zeno plug-in that allowed animators and technical directors to randomize sucker placement based on a library of sucker variations. The sucker variations were modelled by **Frank Gravatt**, 16 variations in total allowing a lot of visual variation really quickly thanks to Zeno's modular system [^20]. 

---
### MARS - Camera Tracking System module
One of the first applications built on the Zeno framework was ILM’s new camera tracking system (codenamed **MARS**), which successfully leveraged Zeno’s scene graph to integrate 3D matchmoving data with film plates [^1]. 

This module was so effective it earned an **Academy Scientific & Technical Award**. Throughout the early 2000s, ILM gradually replaced dozens of older, disconnected tools with new Zeno-based modules [^1].

---
### Zenviro - camera projection module
The camera projection module in Zeno was called **Zenviro** and was used to great effect in the **War of the Worlds** (2005), as it allowed ILM compositors to project 2D photographic plates of buildings onto simple 3D geometry to animate destruction effects. They could add cracks, falling debris, and damage progression directly in Zeno [^2].

In the July 2005 issue of CGW compositing supervisor **Marshall Krasser** discusses the destruction sequence creation for War of the Worlds:
> The sequence was crafted with a mixture of effects-from particle simulations for the cracking pavement to practical elements-often with the help of Zenviro, the camera projection module in Zeno. You see a pickup truck that gets rotated around. We lifted it out of the plate, took it into the 3D realm, projected it onto 3D geometry in Zenviro, animated the geometry to rotate it, and composited it back into the plate. [^1]

**Alan Trombla** was one of the brains behind the Zenviro camera project module at ILM who then went on to found **Tweak Software** known for its RV software that was also in use by ILM.


---
### Caricature (Cari) - Facial Animation System
<img width="640" height="512" alt="Yoda in Cari" src="https://github.com/user-attachments/assets/e54ff7aa-27ed-42bf-8e45-33047be9d193" />

For **Dragonheart** (1996), ILM created a specialized in-house tool called Caricature (nicknamed "Cari") to enable animators to work interactively on Draco’s face, with sliders and real-time feedback.

Before Cari, facial animation at ILM was handled by hand-writing text commands in files to load shapes over time — effectively like stop-motion animation via scripts.

Animators used body motion data from Softimage (the conventional pipeline) then opened that into Caricature just for the facial animation part. 
Caricature allowed animators to hide the rest of the dragon model and focus solely on facial expressions, making high-iteration tweaking possible (e.g. combining phoneme shapes, sneers, eyebrow movement).

Later, Caricature added model correctives, a system allowing artists to fix imperfections in geometry (like a "3D-Photoshop" for sculpted surfaces) inline. 

#### Integration of Cari into Zeno
Cari was later integrated into Zeno as stated on the official Lucasfilm website [ILM's Dragonheart Crew Looks Back - Lucasfilm.com](https://www.lucasfilm.com/news/digital-road-dragonheart/) "the techniques in Caricature were integrated into ILM’s current Zeno system in the 2000s."

**Cary Phillips** was awarded a 1998 Academy Technical Achievement Award for the development of Caricature.

---
### Lux - Zeno’s interactive lighting tool
Zeno’s interactive lighting tool **Lux** enabled artists to place and adjust lights in a true 3D context while seeing immediate feedback [^2]. 

Lux is true 3D lighting for particles and creatures that brings match-moving, interactive lighting, and texture painting together. The shots were later rendered with Pixar’s **RenderMan** and Mental Images’ **Mental Ray** [^1].

Technical Directors in Zeno adjusted the direction and flicker of the Tripods’ headlights during lighting, and applied procedural 2D noise to create an "organic" glow in the alien windows — all without leaving the lighting interface [^2].

In the book **Cinefex** from 2006 **Tom Fejes** is creditied as "setting up" the Lux tool, not sure if that means he was the creator of Lux or if he was the one that set it up for the Pirates movie that the book covers [^20].

### CloneCam - Performance Capture System
ILM animators created about 60 minutes of cinematics for the game **Star Wars The Force Unleashed**, using their **CloneCam** performance capture system originally developed for **Pirates of the Caribbean** [^7].

---
## Integrations with third party software
One of the main benefits of Zeno was the integrations with industry standard software, rather than a collection of siloed programs for modeling, animation, rendering, etc., Zeno could load whatever tools an artist needed into one unified interface [^1].

Zeno was build from the ground up to be modular, with modules easily written in Python for tasks such as converting between 3D file formats or integrating 3rd party software tools seamlessly [^1].

### Integration with Maya
Zeno was designed with live links to **Maya** and **Photoshop** – an artist could copy and paste data or edits between Maya and Zeno in real time – and its UI was made to resemble **Maya’s Outliner** to ease adoption [^1]. 

![Maya 7.0 Outliner inspired the Zeno UI](https://github.com/user-attachments/assets/f564e4d6-c05a-4c28-b59a-fd3aff88da55)
**Curt Miyashiro**, digital production supervisor has the following to say about the benefits of Zeno's integration with Maya [^1]:
> Modelers built the tripods and the aliens in Maya using subdivision surfaces. The animators worked in Maya and then transferred the animation to Zeno. Before, the animation was cached; now TDs can tweak the animation in Zeno. Before if we had wanted to change the headlights on the tripod, we would have had to go back to the animators or go into Maya. With this film we could change the direction of the headlights in Zeno while we were working on lighting the shot.

### Integration with Compositing tools
Zeno was used in ILM along with to their usual **compositing tools** which included [^1]: 
* **Apple’s Shake**
* **ILM’s Saber** (based on Autodesk Media and Entertainment's Inferno)
* **ILM’s CompTime** - In House compositor

Then final renders from **RenderMan** or **Mental Ray** could round-trip back into Zeno’s compositing module for finishing [^1]. 

#### Integration with CompTime
Zeno has first class support for woroking the the proprietary compositor developed in-house at ILM known as **CompTime**.

<img width="640" height="512" alt="ILM's CompTime" src="https://github.com/user-attachments/assets/f3b8f902-9e7b-4a71-bfcd-533725540cba" />

In the July 2002 issue of Linux Journel Technical Directory **Robert Weaver** notes that ILM's compositing software, CompTime was ported over to Linux and the plugins for the compositor were all written in Python [^5]. 

---
## The Success of Zeno
The success of zeno can not be understanted, by the mid-2000s, Zeno had become the **heart of ILM’s pipeline** and by 2004, Zeno had matured enough that ILM could **fully retire its old pipeline** [^1].

Then by 2006–2007, **Pirates of the Caribbean: Dead Man’s Chest** and **At World’s End** benefited from Zeno; the CGI character **Davy Jones** was one high-profile creation that benefited from Zeno [^6].

> Seven years in the making, Zeno, ILM’s new tool set, has redefined the studio’s pipeline, opened the production process to all the artists on the crew, and positioned the studio to create future forms of entertainment [^1]

### Version History of Zeno
It would be interesting to find out the version history of Zeno, all we know about so far is that in 2011 Zeno reached major version **3.0**, having experienced a major re-tooling of its interface around the time of **Transformers: Dark of the Moon** [^6].

We also know that in September 2013 the current version of Zeno was 3.9.7.

It is unclear if Zeno is still in use at ILM today and what version number it has reached, or if it has undergone any major re-writes.

### 2013 Academy SciTech Awards
<iframe width="560" height="315" src="https://www.youtube.com/embed/dY5VF_B1Irc?si=XNntrcz3YYWfXmur" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Zeno was so successful The developers **Florian Kainz**, **Jeffery Yost**, **Philip Hubbard** and **Jim Hourihan** were honoured for the architecture and development of the Zeno application framework in the **2013 Academy SciTech Awards** [^6].

---
## Zviz - The future of Zeno?
ILM developed a new pre-visualization tool called **Zviz** in 2006, built on Zeno and Zed, which aimed to allow directors to access the entire production pipeline in real time, with photogrammetry, live camera tracking, and interactive scene assembly [^21].

Even although both are real-time, Zviz differs from Zed in the target audience for the interface, Zed targets game developers but Zviz targets directors.

It was intended to be used for **LucasArts** for cut scene authoring in games but it is not clear whether this actually happened.

Zviz had three distinct modes:
* Building the set
* Animation
* Editing

Although it has a less technical audience and didn't have all the tools such as a compositor for example, since it was built on top of Zeno you could use all the existing Zeno integrations such as CompTime.

One cool feature of Zvis was, it supported creating 2D sketches as placeholder assets that can be animatable in 3D [^21]!

ILM's Zviz previsualization tool was actively used and developed around the early 2010s, with internal users including Lucas Animation and ILM visual effects supervisors. However, over time, previs tools evolved strongly toward using game engines like **Unreal Engine**, which offered greater flexibility, accessibility, and real-time realism.

---
# References
[^1]: [Acts of War – Computer Graphics World (July 2005)](https://www.cgw.com/Publications/CGW/2005/Volume-28-Issue-7-July-2005-/Acts-of-War.aspx)
[^2]: [Lucasfilm CTO Cliff Plumer Talks Technology - VFXWorld](https://web.archive.org/web/20071016225310/http://vfxworld.com/?sa=adv&code=1e242f07&atype=articles&id=2608)
[^3]: [Star Wars: The Force Unleashed – Wikipedia (Development section)](https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Unleashed#Development)
[^4]: [The Art and Making of Star Wars: The Force Unleashed – Insight Editions (2008), cited via Wookieepedia](https://starwars.fandom.com/wiki/Ronin_%28engine%29)
[^5]: [Industrial Light and Magic](https://linuxjournal.rubdos.be/ljarchive/LJ/099/6011.html)
[^6]: [ILM’s Scientific Solutions – fxguide (Feb 2014)](https://www.fxguide.com/fxfeatured/ilms-scientific-solutions/)
[^7]: [Star Wars: The Force Unleashed – Wookieepedia (Behind the Scenes)](https://starwars.fandom.com/wiki/Star_Wars:_The_Force_Unleashed#Behind_the_scenes)
[^8]: [ILM's Dragonheart Crew Looks Back - Lucasfilm.com](https://www.lucasfilm.com/news/digital-road-dragonheart/)
[^9]: [Star Wars 1313 – Wikipedia](https://en.wikipedia.org/wiki/Star_Wars_1313)
[^10]: [GDC Vault - LucasArts and ILM: a Case Study of the Convergence of Games and Film](https://gdcvault.com/play/1013242/LucasArts-and-ILM-a-Case)
[^11]: [Game Films - Computer Graphics World](https://www.cgw.com/Publications/CGW/2007/Volume-30-Issue-2-Feb-2007-/Game-Films.aspx)
[^12]: [War of the Worlds - Retro Articles - DIGITAL PRODUCTION](https://digitalproduction.com/2023/02/08/krieg-der-welten-retro-artikel/)
[^13]: The Art and Making of Star Wars The Force Unleashed (2008)
[^14]: [Professor Ron Fedkiw shares Academy Award for software to digitize destruction - Stanford University School of Engineering](https://engineering.stanford.edu/news/professor-ron-fedkiw-shares-academy-award-software-digitize-destruction)
[^15]: [Stumbling Toward 'Awesomeness'Geodesic Voxel Binding in Maya 2015 - Stumbling Toward 'Awesomeness'](http://www.chrisevans3d.com/pub_blog/geodesic-voxel-binding-maya-2015/)
[^16]: [Animation Magazine September 2006](https://archive.org/details/Animation_Magazine_September_2006/page/52/mode/2up?q=ilm+Zeno)
[^17]: [Game Developer Magazine March 2007](https://archive.org/details/GDM_March_2007/mode/2up?q=ilm+Zeno)
[^18]: 3D World Magazine September 2005
[^19]: [Electronic art and animation catalog : SIGGRAPH (Conference) (2004)](https://archive.org/details/electronicartani0000sigg_x6q3/page/194/mode/2up?q=ilm+Zeno)
[^20]: Cinefex (2006)
[^21]: [Zviz: ILM Goes Interactive with Previs - Animation World Network](https://www.awn.com/vfxworld/zviz-ilm-goes-interactive-previs)
[^22]: [The Rookies - Rookie Awards 2020 Judge - Jason Smith](https://www.therookies.co/contests/groups/rookie-awards-2020/judges/92)
