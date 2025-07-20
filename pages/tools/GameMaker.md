---
layout: post
tags:
- gameengines
- middleware
title: Game Maker - History and Technology behind the engine
thumbnail: /public/images/RetroReversingLogoSmall.png
permalink: /game-maker
breadcrumbs:
  - name: Home
    url: /
  - name: Game Engines & Middleware
    url: /engines
  - name: Game Maker
    url: #
recommend:
- middleware
editlink: /tools/GameMaker.md
---

Game Maker is a popular 2D game development tool originally called **Animo** and developed by Professor **Mark Overmars**.

Version 1.0 was built some time in 1998-1999 but never released publicly but on the 15th November 1999 Game Maker was officially released to the public with version 1.1. Game Maker is still alive today in the form of the newly rebranded GameMaker Studio series. 

This post will cover the history and technology of the pre-studio versions of Game Maker with a focus on more low level details such as decompiling and how the technology worked.

---
# Technology behind Game Maker
The technology behind Game Maker is really interested from a reverse engineering point of view, specifically how games were "compiled" into executables and how the game runner technology worked.

You can think of Game Maker as being made up of two main parts:
* **Game Maker IDE** - This is where the games are made, with editors for sprites, sounds, objects, rooms and for programming scripts using the Game Maker Langauge (GML)
* **Game Maker Runner** - This is the engine that takes the data exported by the IDE and allows it to be playable as a standard windows executable (and later on PSP, MacOS and others)

## Original Source Code
Only a few details are known about the source code behind Game Maker, but over the years Mark Overmars has hinted at a few things.
Both the IDE and runner were written in **Delphi**, initially **Version 5** [^10] but that changed to **Version 7** in 2004 [^11]
* **2003** - Delphi version 5. The IDE was slightly over **25,000** lines of code in 2003 with the runner part similar in size [^10].
* **2004** - Delphi version 7. The IDE source code is now over **40,000** lines of code. The source code for the runner part is similar in size [^11]

It was later rewritten by YoYoGames with the runner now being written in C++ and the IDE in C#.

---
## Game Runner
Early versions of game maker (1.1->3.3) exported games in **.gmr** format that required the **Game Maker Runner** to execute, later versions (4.0+) allowed exporting directly as .exe files (the exe files technically just appended the gmr file data to the end of the actual runner executable).

### Game Maker Executable Decompilers (.exe into gmd/gm6/gmk)
Ever since Game Maker first allowed exporting of games into executables (.exe) files, people have searched for a way to convert the game back to an editable format! 

Up until the newer rebrand of Game Maker into GameMaker Studio it has always stored the full editable game data, including comments and unused resources, as encrypted data inside the executables.

Thus when a decompiler is made available, everyone has access to be able to read the code and create game mods for any game made in the compatible versions of game maker.

There were a few decompilers released for specific versions of Game Maker created executables (*.exe):
* **Game Maker 4.0 -> 4.3 Decompiler** - [Python 3 version of gm4dec.py](https://gist.github.com/windwakr/8abe5f39c6ce987bd770fc33945abdd9)
* **Game Maker 4.3 -> 5.3a Decompiler** - [VBGAMER45/GMD-Recovery: A gamemaker decompiler for versions 5.3a and less](https://github.com/VBGAMER45/GMD-Recovery)
* **Game Maker 5.3a -> 7.0 Decompiler** - [GM Decompiler v2.1 (For GM5.3A-7.0 Games)](https://gamebanana.com/tools/13057)
* **Game Maker 8.0 -> 8.1 Decompiler** - [WastedMeerkat/gm81decompiler: GameMaker 8.1 Decompiler](https://github.com/WastedMeerkat/gm81decompiler)

When each of these decompilers were released to the public they created quite a stir in the community, e.g: [First person caught using Game Maker Decompiler? - GameMakerBlog](https://gamemakerblog.com/2009/05/02/first-person-caught-using-game-maker-decompiler/)

There is currently no decompiler for versions 4.0 -> 4.2, although games made in these versions are incredibly rare as it was a short period between summer 2001 and end of the same year. Many games who may have started development in these versions would have upgraded to 4.3+.

For GameMaker Studio decompilation there are a number of tools such as **UndertaleModTool** which will be covered in another post.

#### GMD-Recovery - Game Maker 4.3 -> 5.3a Decompiler
<img width="1749" height="363" alt="image" src="https://github.com/user-attachments/assets/bdccf03e-d27d-48f0-b7d0-098fc9dcdddd" style="max-width: 65vw; margin-left: 0px;" />
The first Game Maker Decompiler was created by **VBGamer45** in Visual Basic 6.0. 
It worked by allowing you to select a Game maker executable, it would then run the executable and you were prompted to choose the process that was run. It would then dump the memory of that process and try to brute force the decryption key from it. 

After Game Maker 5.3a it was not updated to support the changes in that version so can only be used to decompile games made between 4.3 and 5.3a. But later on a new decompiler would be released which supported from 5.3a all the way up to 7.0.

The source code for **GMD-Recovery** is available on Github: [VBGAMER45/GMD-Recovery: A gamemaker decompiler for versions 5.3a and less](https://github.com/VBGAMER45/GMD-Recovery)

#### GMDecompiler - Game Maker 5.3a -> 7.0 Decompiler
<img width="325" height="354" alt="image" src="https://github.com/user-attachments/assets/464f3d8d-1915-4e0b-8746-9d9005e1eab2" />
GMDecompiler (gmdecompiler_v2_1.jar) was a closed source Game Maker decompiler written in Java that supported Game Maker games made between versions 5.3a and 7.0. It is unknown who created the decompiler, only that it was leaked at some point during the Game Maker 7.0 timeframe (2007-2008). 

---
### Executable Converters
New versions of Windows have occasionally broken Game Maker executables, these converters are used to upgrade old Game Maker executable files to run on newer versions of windows:
* [GM6Vista: Patches for GameMaker 6 to run on Modern versions of Microsoft Windows (Vista to 11)](https://github.com/LiEnby/GM6Vista)
* [GM Convert Game by Mark Overmars](https://archive.org/details/gm-convert-game) - Official tool by Mark Overmars to fix games on Windows Vista

---
### G-Java - Java Game Maker Runner
G-Java was an attempt to create a Game Maker Runner in Java to provide cross platform game development and embedded games inside **Java Applets**. It was never finished and ended up becoming Abandonware.

G-Java was created some time before October 2004 according to the old [G-java.uni.cc Website](https://web.archive.org/web/20041101041551if_/http://www.g-java.uni.cc/home.htm), it later changed to [G-Java.com](https://web.archive.org/web/20061108075638/http://www.g-java.com/) in November 2006. There seems to have also been a G-Java.tk but it was never archived on the Wayback machine.

It was originally written in Visual Basic 6 on top of a GMD parser implemented by VBGamer45 (best known for creating the first Game Maker Decompiler), but the source code for that was apparently lost.

### GMbed - Embedded Game Maker Executables
GMbed was software which embedded Game maker executables in websites using windows specific features to embed a window handle (hwnd) into a Java Applet.

Originally it would split apart the Runner part of the executable from the game data part, but this was quickly put a stop to at a request from **Mark Overmars** [^13].

A website was created to make the process as easy as possible [GMbed.com](https://web.archive.org/web/20090621083403/http://www.gmbed.com/) which was later hacked by an Indonesian hacking group.

---
## File Formats
Over the years there have been multiple different file formats used by Game Maker, as the tool was enhanced it required expansions of the format, here are editable formats used in each version:
* **.GMF** - Game Maker File (1.1->3.x)
* **.GMD** - Game Maker Design (4.x->5.x)
* **.GM6** - Game Maker 6 editable (6.x)
* **.GMK** - Encrypted Game Maker file (7.x->8.x) - Encrypted to prevent tools such as **G-Java** and **LateralGM**.

For the runner formats, it started with .GMR and then moved to a proper executable (.exe) file in Game Maker 4.0+.

Other formats created for Game Maker include:
* **.GEX** - Game Maker Extension format
* **.LIB** - Game Maker Drag and Drop Library format

### File Format Parsing
If you are interested in parsing some of the older Game maker files formats, there are a few Github projects that may be of interest:
* [node-gmk-parser: Node.js based Game Maker file parser](https://github.com/gm-archive/node-gmk-parser) Javascript .GMK parser
* [Gmk: C++ GMK Api](https://github.com/gm-archive/Gmk) C++ .GMK parser
* [LibMaker/org/lateralgm/libmaker/file/LibReader.java](https://github.com/gm-archive/LibMaker/blob/master/org/lateralgm/libmaker/file/LibReader.java) - Java .LIB parser

### File Format Converters
Whenever a new version of Game Maker was released there would always be people wanting to continue using a previous version, this was especially the case when Game Maker started charging for more advanced features which were free in the previous version (GM 6.x, GM 7.x), so a few converters were created by the community:
* [GM6 to GMD converter](https://web.archive.org/web/20070111012215/http://www.g-java.com/forums/index.php?dlcategory=5) - 1.0 Released 26th July 2005 with the final version 2.1 being released 29th December 2005.


---
## Companion Software
![Background Maker](https://github.com/user-attachments/assets/bc5e065d-f170-44f6-a6a8-8f92f4d39cfe)

Mark Overmars also released some companion software to Game Maker:
* **Background Maker 1.0** - Tool for combining tiles into a single background image (7th December 2000)
* **Image Maker 1.0** - Tool for creating animated GIFs for Game Maker

![Drawing for Children](https://github.com/user-attachments/assets/da597d9d-96fe-4ec7-aaca-719743bc737c)

Mark Overmars also released some software unrelated to Game Maker:
* **Child Proof 1.0** - Sandbox environment for children using PCs
* **Drawing for Children** - Drawing program

## Community additions to Game Maker
Over the years there have been many open source projects that aimed to enhance Game maker in a certain way, from cross platform IDEs such as **LateralGM**, software to convert games to Java (**G-Java**) and even multiple open source re-implementations of the Game Maker Runner (**ENIGMA**).

Many of these projects are available on Github via the [GameMaker Engineering Archive - GitHub](https://github.com/gm-archive)

---
# Game Maker Version History (Versions 1.1 through 8.0)
Game Maker versions 1.1 through 8.0 trace the evolution of a simple 2D game design program into a robust game development engine. Over the course of a decade (1999–2009), features like a full scripting language (GML), DirectX-powered graphics (2D and basic 3D), networking, file I/O, extensibility, and improved editors were introduced step by step.

The software’s version numbering skipped a non-public 1.0 (due to its origins as “Animo”), and each subsequent release brought meaningful enhancements – from the foundational changes in 4.0 to the quality-of-life improvements in 8.0.

## Version 1.0 (Unreleased “Animo”)
Mark Overmars originally developed *Game Maker* as a program called **“Animo”** in 1999, intended for creating 2D animations. This version 1.0 was **never publicly released** – the software was renamed and first launched publicly as **Game Maker 1.1** later that year [^10]. In other words, there is **no public Game Maker 1.0**; Overmars skipped directly to 1.1 for the debut, reflecting the shift in focus from a simple animation tool to a game creation software [^10].

## Version 1.1 (November 15th 1999) – First Public Release
![Game Maker 1.1 IDE](https://github.com/user-attachments/assets/1d3797a9-89d3-4c81-9dc8-d7afdaf71937)

Released on November 15th, 1999, **Game Maker 1.1** was the first version available to the public [^1]. 
Despite being primitive by later standards, it laid the groundwork for Game Maker’s drag-and-drop game creation approach and included a built-in scripting language (later known as GML) for added flexibility [^10]. Notable characteristics of version 1.1 include:

## Basic Game Creation Interface
<img alt="Game Maker 1.1 Object Editor" src="https://github.com/user-attachments/assets/59aca33f-a864-420a-bfd0-da09c7e111b2" />

Provided an event-driven framework with objects and actions that could be added via an easy GUI. All the initial drag-and-drop action icons fit onto a single panel in the Object Editor window [^2]. This made it simple for beginners, though the range of actions was limited compared to later versions.

## Introductory Scripting (GML) 
Even at 1.1, users could edit underlying code. The built-in scripting language was rudimentary (not as complex as in later releases) but allowed manual code editing for more complex game logic [^10].

## No DirectX or Stand-alone Export
Version 1.1 did **not** use DirectX for graphics – rendering was done with basic Windows APIs. It also lacked any separate runtime or compiler for games. This meant you **could not create a stand-alone EXE** for your game in 1.1; games had to be run from within the Game Maker environment itself (in the editor’s main window) [^5].


### Included example games and demoa
<img width="767" height="534" alt="image" src="https://github.com/user-attachments/assets/a324c734-9e21-4f98-9e8c-4a83d1d15545" />
Game Maker 1.3 provided a few games and non-interactive demos to both showcase the functionality and to teach how to use the software, there are:
* **DEMO Creating Stars** - An example of an object that can create other objects (stars) every 15 game frames, using an alarm.
* **GAME Falling Balls** - An example of how gravity can be used in Game Maker by increase the vertical speed in every step by a small amount. When the ball hits the bottom wall, we set the vertical speed to -vspeed*0.9. As a result the direction changes (the speed becomes negative) and becomes slightly less such that the motion become slower with each bounce.
* **GAME Breakout**
* **GAME Catch the Dog**
* **GAME Pacman**
* **GAME Peg Game**
* **GAME Sokoban** - Sokoban is an old Japanse games. The goal is to move the objects (the balls) to the goal positions (the blue holes). You operate the mover using the arrow keys on your keyboard. You can only push a ball to the next position if that position is empty. You have solved the puzzle when all balls lie on holes.

After version 1.1 the game **Sokoban** seems to have been removed from all future releases of Game Maker, it is unclear why, although we are not sure if it is in 1.2 as it is currently lost media.

### How were games stored?
<img alt="Folder structure of saved games" src="https://github.com/user-attachments/assets/9a08b832-10ac-4271-95f1-8c3682be3360" />
Games were saved into a specific folder "C:\Program Files\Game_Maker\Games", with each game having its own sub folder. 
Inside the game specific folder all the game resources were available:
* Images as .BMP files, named like so: image1.bmp, image2.bmp
* Audio as .WAV files, named with free text so *.wav 
* Help documentation is saved as HELP.RTF
* Objects - Object data stored as plain text
* Rooms - Metadata
* Sounds - Metadata

#### Object format
<img alt="objects are saved in plain text" src="https://github.com/user-attachments/assets/481cd50d-4496-4537-9b96-2d87de3d51cb" />
Objects are stored in a plain text format which is fairly easy to read, with helpful comments about each section.

---
### Emulating Game Maker 1.1
The installer for Game Maker 1.1 is available through the WayBackMachine but it will not run on modern Windows.
One way to run it is you can use a browser based Windows 95 Emulator such as v86 [Windows 95 - v86](https://copy.sh/v86/?profile=windows95) and create a CD Rom image ISO of the extracted **gmaker11.zip** setup files and **mount** it in the emulator as a CD.

To create a CD ISO that works in Windows 95 from MacOS you can run:
```bash
hdiutil makehybrid -o ~/Desktop/gmaker11.iso ./gmaker11 -iso -joliet
```

### Reaching 1k downloads
<img alt="Game Maker 1.1 Installer" src="https://github.com/user-attachments/assets/38d474c2-94fc-4c45-8de7-871ffef926a8" />

By early 2000, Game Maker 1.1 had attracted a small user base (reaching about 1000 downloads by February 2000) and demonstrated the potential of Overmars’s approach [^3].

---
## Version 1.2 (2000) – Early Improvements
Game Maker 1.2 was released shortly after 1.1 (as a “quick” follow-up update) and brought a number of important improvements and new features while keeping the same basic interface [^12]. Notable changes and additions in version 1.2 include:

### Performance and Language Enhancements
Game compilation speed was roughly **doubled** on low-end computers, and the engine allowed longer code segments, making the GML scripting more practical for larger projects [^4]. New built-in constants/variables were introduced (e.g. `pi`, `roomwidth`, `roomheight`, and several `back_...` variables for backgrounds) to give developers more control over game properties [^4]. Variable naming was also made more flexible (uppercase letters became allowed in variable names) and other minor GML syntax tweaks were applied for consistency.

### Backgrounds and Sound Control
*Scrolling backgrounds* were now supported, allowing developers to have moving background images in their games (a feature not present in 1.1) [^12]. Additionally, an action to **stop a currently playing sound** was added, which was especially useful for stopping background music or looping sounds via code or drag-and-drop [^12].

### Editing and Interface Features
Game Maker 1.2 made the editor more user-friendly. It became possible to **copy or duplicate resources** – for example, you could duplicate objects, rooms, and sounds – streamlining development [^4]. A new “object clipboard” was introduced, allowing users to copy and paste sets of actions between objects, which made reusing logic easier [^12]. Also, keyboard shortcuts were added for common run-time actions (to quickly start, pause, or stop the game during testing) [^4].

### Miscellaneous Fixes
Version 1.2 also fixed numerous bugs from 1.1. For example, it increased the maximum room speed and the number of objects a room could contain, corrected issues with background image memory handling (small BMP images were now given transparent backgrounds properly), fixed the `lastkeypressed` value, and resolved cut-and-paste problems in the sprite/image editor [^12].

### Lost Media
However **Game Maker 1.2** is currently considered **Lost Media** as no versions have been archived so the above details are based on the **Changes.txt** file in version 1.3 of Game Maker which is available online. Mark Overmars used to keep historical versions on his site but only ever included 1.1 and 1.4 of the 1.x series, so it is possible he doesn't have version 1.2 [^14].

---
## Version 1.3 (2000) – Minor Enhancements
<img alt="Game Maker 1.3" src="https://github.com/user-attachments/assets/8b0010ca-450b-4965-ac81-fd9f1626e146" />

Game Maker 1.3 was another incremental update on the 7th January 2000, focused on refining the software further. 

Version 1.3 brought **additional minor improvements and bug fixes** to ensure stability:
* Enhanced image loading, allowing arbitrary sized images (also large ones) for the objects
* Support for Animated GIFS
* Now possible to draw shapes rather than just images
* Ability to export a game as a zip file and re-imported for sharing editable games online
* `forall` statement introducted to GML programming language (can execute a piece of code for all instances of a particular object)
* Internals have been refactored to be more efficient, use less memory and no more limits on the number of objects or variables


Importantly, **Game Maker 1.3 still operated under the same technical constraints as its predecessors** – it did not yet include DirectX support for graphics, nor did it provide a separate game runner or the ability to create stand-alone executables [^9]. 

Games created in 1.3 were still run from within the Game Maker environment, and rendering remained in software mode. In essence, version 1.3 was a maintenance release that smoothed out the 1.x line in preparation for more significant changes to come in the next major version.

### Included example games and demos
<img alt="image" src="https://github.com/user-attachments/assets/94829354-a067-4287-ba34-368b2b4acbf0" />
Game Maker 1.3 introduced a new space game, renamed Falling Balls to be a Demo and also removed the Sokoban game:
* **DEMO Falling Balls** - An example of how gravity can be used in Game Maker by increase the vertical speed in every step by a small amount. When the ball hits the bottom wall, we set the vertical speed to -vspeed*0.9. As a result the direction changes (the speed becomes negative) and becomes slightly less such that the motion become slower with each bounce.
* **GAME Space Trip**


### How were games stored?
Games were stored in the same location as previous versions of Game Maker ("C:\Program Files\Game_Maker\Games"), but the format of the plain text metadata (e.g objects) changed to be a little more cryptic. Also images were now saved as GIF instead of BMP format to allow for animated sprites to be stored in a single file.

Inside the game specific folder all the game resources were available:
* Images as .GIF files, named like so: image1.gif, image2.gif
* Audio as .WAV files, named with free text so *.wav 
* Help documentation is saved as HELP.RTF
* Objects - Object data stored as plain text
* Rooms - Metadata
* Sounds - Metadata

#### Object format
A few notes about the format:
* Newline seperated - Uses the DOS/Windows standard newline sequence for seperation which consists of a carriage return (CR `0D`) + line feed (LF `0A`) pair.
* Values on the same line seem to be seperated by 4 spaces
* The number 1 is used for true (e.g checkbox on in the IDE) and 0 for false.
* We know we are at the end of a Object by the `--------------------------------------------` string.

Here is an example Objects file for the Creating Stars Demo, the comments at the end are not part of the format they have been added for annotation, note that the annotations are incomplete:
```
version 1.3 // Version of Game Maker this was saved in
3              // Number of Objects (3)
creator        // Name of Object "creator"
    0    1     // Solid=False, Active=True
    2 3        // eventID = 2 (Alarm event); numberOfActions = 3
  311   -1    1 // actionID = 311 (Create instance at postion); appliesTo = -1 (self); numberOfParameters = 1
0               // X coordinate of instance
0               // Y Coordinate of instance
2               // Object ID of instance to create (or is this the actionsLeft?) if so where is the objectID stored
  401   -1    1 // actionID = 401 (Play a sound); appliesTo = -1 (self); numberOfParameters = 1
1               // SoundID to play
                // Newline to signify end of action?
1               // actionsLeft = 1
  201   -1    1 // actionID = 201 (Set Alarm); appliesTo = -1 (self); numberOfParameters = 1
15              // Set alarm clock to 15
                // Newline to signify end of action?
0               // 0 to signify end of event?
    0 1         // eventId = 0 (Create); numberOfActions = 1 
  201   -1    1 // actionID = 201 (Set Alarm); appliesTo = -1 (self); numberOfParameters = 1
5               // Set alarm clock to 5
                // Newline to signify end of action
0               // 0 to signify end of event
-1
-------------------------------------------- // Signifies end of Object
star // Object name "star"
    0    1       // Solid=False, Active=True
  142 1          // eventID = 142 (?); numberOfActions = 1
  101   -1    1  // actionID = 101 ("Set direction of motion") action; appliesTo = -1 (self); numberOfParameters = 1
111101111        // Directions in "Set direction of motion" action 
                 // Newline to signify end of action?
0                // 0 to signify end of event?
    4 1          // eventId = 4 (Collision); numberOfActions = 1
  101   -1    1  // actionID = 101 ("Set direction of motion") action; appliesTo = -1 (self); numberOfParameters = 1 
111101111        // Directions in "Set direction of motion" action 
                 // Newline to signify end of action
0                // 0 to signify end of event
    0 1          // eventId=0 (Create); numberOfActions = 1 
  101   -1    1  // actionID = 101 ("Set direction of motion") action; appliesTo = -1 (self); numberOfParameters = 1
111101111        // Directions in "Set direction of motion" action 
                 // Newline to signify end of action
0                // 0 to signify end of event
-1
-------------------------------------------- // End of Object
muur // Object name "muur" (muur is the dutch for wall)
    1    0 // Solid=True; Active=False
-------------------------------------------- // End of Object (no events on the muur/wall object since its not Active)
```

The annotations above are incomplete:
* it is unclear currently if 0 signifies the end of the event or if it just counts down to how many actions are left to parse.
* numberOfParameters looks to be incorrect as it is always 1 even for the "Create instance at postion" action.

---
## Version 1.4 (2000) – Final 1.x Release
Version 1.4 was the last update of the 1.x series, released toward the end of 2000. Like version 1.3, it was primarily aimed at final polishing and stability. According to community recollections, 1.4 fixed remaining bugs and fine-tuned the features introduced in 1.2/1.3. There were **no major new features** added in 1.4 – instead, Overmars ensured that the existing features (objects, events, basic GML, etc.) all worked as expected in preparation for a major overhaul with version 2.0.

Version 1.4 can be seen as the stable culmination of the initial Game Maker prototype—by this point, the software was relatively robust in its original feature domain, and the user base was primed for the more **“substantial new features”** promised in the next major version [^5].


---
## Version 2.0 (2000) – Interface Overhaul and Growing Popularity
![Game Maker 2.0 IDE](https://github.com/user-attachments/assets/cd4037cf-8b7d-4806-aa1f-50f9458e38fa)

Released on the 8th September 2000, **Game Maker 2.0** was the first major version number change for the software. This update brought a **redesigned interface and significant usability improvements**, making game development easier and more powerful for users who had outgrown the 1.x features. Key aspects of version 2.0 include:

### Improved UI and Workflow
Mark Overmars refined the Game Maker IDE in 2.0, reorganizing how resources (sprites, sounds, rooms, etc.) were managed. 
The interface became more intuitive than the 1.x series, addressing some limitations of the earlier design. 
According to later retrospectives, each major release around this time introduced a new file format or layout; Game Maker 2.0 was no exception, likely switching to a new project file structure as part of the overhaul [^2]. 
The overall look-and-feel moved closer to what modern Game Maker versions would use, with more dialogs and organizational panels for different resource types.

### More Actions and Functions
<img alt="Object Editor (objects were all in a single window)" src="https://github.com/user-attachments/assets/5407365c-0455-4194-9e46-a8dca535d48f" />

Version 2.0 added **many new drag-and-drop actions** to broaden the range of possible game mechanics without coding [^2]. 

Users now had access to more pre-built actions for things like advanced object movement, basic drawing, and control structures, which reduced the need to write GML for common tasks. This expansion of the drag-and-drop system made Game Maker more accessible to beginners and allowed more complex games to be made visually.

### Continued Script Language Support
<img width="766" height="520" alt="image" src="https://github.com/user-attachments/assets/c3f33957-2b11-4dba-a5f6-f523d569959d" />

The GML scripting language was further developed, although still not as sophisticated as it would eventually become. Version 2.0 improved file handling functions, more sound control functions, ability to rotate text and more control over the way images are displayed, etc. 
GML script was still only available in the Object Editor as an action so stand alone "scripts" were not available until a later version.

### First DirectX support (DirectSound)
This was the first version to introduce functionality based on the DirectX SDK, specifically **DirectSound**, Game Maker would check if DirectX 5.0 or higher is installed on the target PC and if so would allow higher quality audio playback and introduced sound effects.
Importantly, Game Maker 2.0 still did **not** introduce DirectX acceleration for graphics this would come in the next version (3.0).

The rendering engine remained software-based (using the **Windows GDI**), and games were run through the editor or a bundled interpreter rather than truly independent programs [^5]. 


### System Requirements
According to the Game Maker 2.0 installer the system requirements for 2.0 were as follows:
> A modern PC (preferably a Pentium) running Windows'95,'98, 2000 or NT 4 is required.
> After installation the program uses about 3 MB disk space.
> The program requires at least 65000 colors (high color, 16-bit).
> It requires at least 800x600 screen resolution.

### Included example games and demos
<img alt="Game Maker 2.0 Game List" src="https://github.com/user-attachments/assets/da6db47b-3b10-488e-8582-4bfc6011f1b2" />

Game Maker 2.0 provided a few games and non-interactive demos to both showcase the functionality and to teach how to use the software, they are the same as 1.3 listed above but with the additoon of:
* GAME Maze

### Sharp rise in Game Maker's popularity
<img alt="Game Maker 2.0 Installer Screen" src="https://github.com/user-attachments/assets/c13e9f8d-754a-4dc5-9d17-e60bae85da89" />
During the year 2000, Game Maker’s popularity started to rise rapidly. 

By the end of that year, the program had been downloaded **tens of thousands** of times by hobbyist developers worldwide, thanks in part to the enhancements in version 2.0 and positive word of mouth in online communities [^2]. 

In summary, **Game Maker 2.0** modernized the tool’s interface and expanded its feature set, making it a more robust platform for game creation. It set the foundation upon which the crucial technical upgrades of versions 3 and 4 would soon build.

---
## Version 3.0 (2001) – First Use of DirectX
![Game Maker 3.3beta](https://github.com/user-attachments/assets/5a59d096-8534-42e1-b60b-44f9a63ae2bd)

On the 23rd November 2001, Overmars released **Game Maker 3.0**, which was a milestone for the software’s graphics and performance. The hallmark of version 3.0 was the introduction of **DirectX rendering support** for the first time [^5]. This had several important effects:

- **Hardware-Accelerated Graphics:** By leveraging Microsoft DirectX (likely DirectDraw at this stage), Game Maker could now render graphics more efficiently. Games ran faster and could use full-screen modes and graphical effects that were not feasible under the old software-based renderer. This was a significant step up in capability, as it unlocked the potential for smoother animations and richer visuals.

- **Same Feature Set, But Faster:** Other than the new DirectX-powered renderer, version 3.0 did not radically change the game creation features introduced in 2.0. The user interface and workflow remained similar, but everything was generally more **polished and performant**. For instance, operations that previously might have lagged (like drawing many sprites) could now benefit from DirectX’s blitting capabilities. In essence, 3.0 “implemented DirectX for the first time” to boost graphics handling [^5], while maintaining the drag-and-drop and GML systems as they were.

- **No Stand-alone Executable Yet:** It’s worth noting that even with DirectX, Game Maker 3.0 still lacked an independent runtime or compilation to EXE. Games were executed via the Game Maker environment (or a packaged interpreter). The ability to create a true stand-alone game file was still not present at this stage, coming a bit later.

- **Minor 3.x Updates:** Following 3.0, a few minor revisions (3.1, 3.2, and 3.3) were released in 2001 to fix bugs and add minor improvements. These updates improved stability and further increased DirectX support, such as verison 3.1 which removed Exclusive mode in favour of DirectX in windowed mode (3.0 was only DirectX in fullscreen mode). Version 3.2 added new room options: more background options, multiple views, and transitions between rooms

Overall, **Game Maker 3.x** dramatically improved the engine’s under-the-hood performance. The use of DirectX was a turning point that allowed users to create more complex and graphically intense games than before [^5].

This helped Game Maker’s community grow even more, as the quality and smoothness of games made in GM started to increase. Version 3.0’s success set the stage for an even more comprehensive overhaul in the next major release.

---
## Version 4.0 (2001) – Major Rewrite and New Capabilities
![Game Maker 4 IDE](https://github.com/user-attachments/assets/1bd5a517-ceb5-40d2-84c8-dfda23125f71)

**Game Maker 4.0**, released on the 16th July 2001, was a complete overhaul of the software. Mark Overmars rewrote large portions of Game Maker from scratch for this version [^5], making sweeping changes to the interface, architecture, and capabilities. Important highlights of version 4.0 include:

- **Entirely New Interface:** The IDE in Game Maker 4 was significantly redesigned. The layout and organization of resources were improved, giving the tool a more professional and user-friendly feel. In fact, the Game Maker 4.3 interface (the final revision of this line) looks very *familiar* even to users of much later versions – it established the general design paradigm that persisted in subsequent releases [^2]. This means that by 4.x, Game Maker had a resource tree, event selectors, and editors that resemble those used for years to come.

- **Introduction of Multiplayer Functions:** Version 4.0 was the first to include built-in support for basic multiplayer/networking features. A set of **MPlay networking functions** was added, allowing simple multi-computer play over a network or the internet. This was a notable expansion of Game Maker’s capabilities beyond single-player games. Although the networking system was rudimentary (suitable for simple games or turn-based exchanges), it demonstrated Overmars’s intent to broaden the engine’s scope.

- **Standalone Executables (EXE) Export:** For the **first time**, Game Maker could compile games into independent executable files. With version 4, developers were no longer confined to sharing editable project files; they could **create a stand-alone Windows EXE** for their game and distribute it to others who didn’t have Game Maker. Under the hood, this worked by bundling the game’s resources with a runner program. The new feature was transformative — games made in GM4 could be run like any other Windows program [^7]. (This capability coincided with the introduction of a separate “game runner” module in the architecture). The addition of EXE output in 4.0 greatly increased Game Maker’s appeal, as creators could publish their games more easily.

- **Continued DirectX Support:** Building on version 3, Game Maker 4 fully embraced DirectX for rendering. The rewrite likely optimized the use of DirectDraw and related technologies even further, making 2D drawing faster and enabling things like smooth sprite rotations and better transparency handling by default. The combination of DirectX acceleration *and* stand-alone export made GM4-generated games much closer to “real” indie games of the time.

- **New Icon/Branding:** Game Maker 4 introduced a new program icon (a **red gear/hammer icon**), replacing the icon used in versions 1–3 [^6]. This visually signaled a new era for the software. The red icon design continued to be used through versions 5, 6, and 7 [^6], indicating that GM4 set a branding precedent as well.

- **Game Maker 4.x Updates:** After 4.0’s release, Overmars issued a few updates (4.1, 4.2 and 4.3) in 2001–2002 to refine the new system. By **Game Maker 4.3b** (released in 2002), the software was very stable and feature-rich for its generation [^2]. This period saw frequent updates, a growing library of user-made examples, and even the launch of the first community-made Game Maker magazine [^2]. The 4.x series firmly established Game Maker’s core design; many long-time users started with version 4.2 or 4.3 and found the experience recognizable even in later versions.

In summary, **Game Maker 4.0 was a landmark release**. It delivered a modernized, rewritten IDE, support for networking play, and the much-demanded ability to compile games into executables [^5] [^7]. The engine had matured considerably, and by the end of the 4.x cycle Game Maker was a robust tool for 2D game development. These changes propelled Game Maker into the “prominence” phase – the user community greatly expanded around this time, thanks in part to the newfound ease of sharing completed games.

## Version 5.0 (2003) – Extensions and Paid Registration
![Game Maker 5.0 IDE](https://github.com/user-attachments/assets/83d98882-3145-40d9-81a8-d07c9068c9ed)

Released in **April 2003**, **Game Maker 5.0** built upon the solid foundation of the 4.x series and introduced a couple of notable new features. It also marked a shift in Game Maker’s distribution model from freeware to a shareware/registration model. Key points for version 5.0 include:

- **External Files and Custom Data:** Game Maker 5 added support for using external files in games [^5]. This meant games could read and write files (such as saving custom data, configurations, or high scores to an external text file) more easily, and could include external resources. This opened the door for more complex game behavior (for example, loading level data from files, or modifiable content). Essentially, GM5 introduced new functions to handle files and perhaps binary data, giving developers more flexibility beyond the fixed resources in the editor.

- **Timelines:** Another major feature in 5.0 was the introduction of **Timelines** as a resource type [^5]. A timeline in Game Maker allows the creator to schedule actions to occur at specific steps (moments) during game execution. This is useful for coordinating sequences of events (for instance, scripting a cutscene or orchestrating waves of enemies in a shooter). The timeline editor let users create a list of actions indexed by time without writing code, which was a powerful addition to the drag-and-drop toolkit.

- **General Improvements:** Version 5 continued to improve overall stability and added smaller features. For example, there were likely new actions and functions (taking advantage of the external file capability), and quality-of-life improvements in the IDE. It also kept all the important features from 4.x: DirectX graphics, EXE output, etc., refining them further. By this time, Game Maker was quite feature-rich in 2D game mechanics, so 5.0’s main innovations were about data and structure (files and timelines).

- **Registration System Introduced:** **Game Maker 5.0 was the first version that was not completely free**. Mark Overmars introduced a registration fee of $15 USD for the software [^2]. The initial approach was that Game Maker 5 could be downloaded for free, but it would run in a limited mode (with certain advanced features disabled and a **nag screen** at startup reminding users to register). Users could pay $15 to unlock the full “registered” version. This change was made to support ongoing development, as Overmars had previously only asked for voluntary donations [^2]. The **nag screen** (displayed when running the GM5 IDE or when launching games made with the unregistered version) became famous – it showed the Game Maker logo and a request to register [^2]. Once registered, Game Maker 5 allowed access to all features, which included things like using DLLs and other advanced functions (some of these pro-only features were added in minor updates or were present but locked for unregistered users).

- **Community Growth:** Alongside GM5’s release, 2003 also saw the launch of the official Game Maker Community forums in their modern form [^2]. This greatly helped users share knowledge, and a surge of new users joined around this time, drawn by Game Maker’s expanding capabilities. Many high-quality example games and tutorials from the community began appearing on the official site during the GM5 era [^2].

In essence, **Game Maker 5.0** was an evolutionary update that extended the engine’s functionality into new areas like file I/O and event scheduling (timelines) [^5]. It also marked Game Maker’s transition to a partly commercial product with the introduction of a registration fee [^2]. Despite some initial community resistance to paying for previously free software, the modest price and the promise of continued improvements kept Game Maker’s user base growing. GM5’s enhancements were particularly welcomed by more advanced users, as they allowed for games with persistent data and more complex scripted sequences.

## Version 6.0 (2004) – New 3D Graphics Engine
![Game Maker 6.0 IDE](https://github.com/user-attachments/assets/c509c5de-b7d2-4dbd-abbc-dbb5a28ec677)

**Game Maker 6.0** was released in October 2004 and represented another major technological upgrade for the engine. The most significant change was a **completely rewritten graphics engine using Direct3D** (part of DirectX) as the new backend [^5]. This brought substantial new graphical capabilities to Game Maker:

- **3D Graphics Functions:** For the first time, Game Maker had built-in support for **3D graphics**. Using Direct3D allowed Overmars to expose functions for drawing 3D primitives, textured shapes, and basic 3D models. Version 6 introduced a set of GML functions (and possibly drag-and-drop actions) that let users create simple 3D scenes – for example, drawing 3D boxes, floors, walls, and even applying textures to them [^2]. This was a *big* change; while GM6 was still primarily a 2D game engine, adventurous users could now experiment with 3D (for instance, making simple first-person or 3D racing games). Many users remember seeing demo projects of 3D spinning cubes and primitive 3D engines soon after GM6’s release.

- **Enhanced 2D Drawing:** Even for 2D games, the switch to Direct3D brought benefits. It made advanced effects easier – **alpha transparency** (translucency) was supported more smoothly, and **sprite rotation** and scaling became hardware-accelerated operations [^5]. Under the previous DirectDraw system, rotations and alpha blending were either not possible or had to be done via slow software routines. In GM6, one could rotate sprites or set their transparency and have Direct3D handle it efficiently, which opened the door to better visual effects in 2D games (like smooth object rotations, fading objects, particle effects, etc.).

- **Performance Improvements:** The use of Direct3D generally improved rendering performance across the board. Games that might have struggled with many objects on screen in GM5 could run faster in GM6 if they took advantage of the new graphics pipeline. Full-screen mode and resolution handling were also improved through Direct3D.

- **Minor Changes and Fixes:** Aside from graphics, GM6 continued to refine other aspects. It likely fixed bugs from GM5 and could have introduced minor features or adjustments in response to the community (for example, improvements to the sound engine or timeline system). The overall workflow of Game Maker remained consistent; the big differences were under the hood.

- **File Format and Compatibility:** Game Maker 6 used a new file format (.gm6) for saved projects, reflecting the engine changes. Notably, games made in GM6 were not backward-compatible with GM5 due to the new features. Overmars included a converter for GM5 -> GM6 projects, but once a project was in GM6 format, it couldn’t be opened in older versions. This was a common pattern with each major release.

Game Maker 6.0’s introduction of Direct3D and 3D capabilities was a headline change widely discussed in the community [^2][^5]. Although the typical user base continued to make 2D games, they benefited from the enhanced visuals and effects made possible in this version. The inclusion of 3D functions was somewhat experimental but showcased Game Maker’s flexibility. As a contemporary note, 2006 (during the GM6 era) also saw the publication of *“The Game Maker’s Apprentice”* (a book by Mark Overmars and Jacob Habgood) which used Game Maker 6 to teach game development [^2]. This further boosted GM6’s profile as an educational and hobbyist tool.

*(Game Maker 6 had a lifespan through 2005-2006 with a few minor updates/bugfixes, but no version 6.1 introduced major changes. By late 2006, attention turned to the next version as Overmars began collaborating with a new company to expand Game Maker’s reach.)*

## Version 7.0 (2007) – Extensions and YoYo Games Era
**Game Maker 7.0** was released on February 28, 2007, and it marked the beginning of the YoYo Games era [^5]. This version was the first published under a partnership with **YoYo Games Ltd.**, a UK-based startup co-founded by Sandy Duncan, which Overmars joined to help expand Game Maker’s development and global presence [^2]. Version 7.0 introduced new features and changes both in functionality and in how the product was managed:

- **Extension Packages:** The most touted new feature of GM7 was the ability to **extend Game Maker’s functionality through extensions** [^5]. Overmars added a system where users could create and use *Extension Packages* (.gex files), which bundled custom GML scripts, actions, and resources into a reusable form. This meant that advanced users or third parties could add new libraries of functions to Game Maker without needing built-in support from Overmars. For example, one could create an extension to provide physics engine functions, new particle effects, or integration with external APIs, and then import that into Game Maker. This greatly increased the flexibility of the tool. Essentially, Game Maker became somewhat modular – features could be added via extensions, and Mark didn’t have to hard-code every new idea into the main program. (In practice, many popular community-made extensions emerged after GM7’s release.)

- **Resource Library Changes:** In prior versions, users could create their own drag-and-drop action libraries using a separate program (Library Maker). With GM7 and the extension mechanism, the way custom actions were handled changed. It integrated more smoothly to allow extended D&D actions via packages [^5].

- **Changes in Asset Storage:** Game Maker 7 introduced a new format for saving projects (.gmk). One notable change was that sprites, sounds, and other resources could optionally be stored *externally* (to avoid bloating the main file). Also, GM7 used an encrypted format for its resource packages to deter easy decompilation of game files (starting with version 7.0’s release candidates, game data was encrypted due to concerns over people creating other tools to import .gm6 files (**G-Java**, **LateralGM**)) [^5].

- **YoYo Games Integration:** With YoYo Games involved, GM7 began tying into online features. YoYo Games launched a website for sharing Game Maker games (the “Sandbox”), and Game Maker 7 had menu links and features that integrated with this service. For instance, it offered easy uploading of games to the YoYo Games website. Additionally, the registration system changed: YoYo Games handled selling license keys, and the software required an internet connection to activate a license (a shift from the old offline registration of GM6). This was a significant change in how Game Maker was delivered – it reflected a more commercial, multi-platform ambition under YoYo Games.

- **Minor Feature Additions:** Besides extensions, GM7 added some other smaller improvements. For example, there were improvements to the sprite and image editors, new actions for particle systems, and better sound format support (GM7 introduced support for .ogg audio files for background music). It also improved the reliability of the new graphics engine introduced in GM6. However, *no major changes to the core engine (rendering or physics)* were made – GM7’s games ran similarly to GM6’s, with 2D and basic 3D via Direct3D. The emphasis was on extensibility and preparing for future platform support.

- **Platform and Community Notes:** Game Maker 7 was the last version that ran on Windows only (a separate port of GM7 for Mac was eventually created by YoYo Games in 2008, but that was a parallel product). The release of GM7 via the YoYo Games website also coincided with an expanding international user base, since YoYo’s involvement brought marketing and more visibility. Mark Overmars was still the lead developer of Game Maker 7, but now backed by a team.

In summary, **Game Maker 7.0** didn’t radically change what you could make with Game Maker in terms of game genre or engine power, but it **expanded the software’s openness and infrastructure**. With extension support, advanced users could push Game Maker further than before by adding new capabilities on their own [^5]. And with YoYo Games taking over distribution, Game Maker began evolving from a one-man project into a more professional product. This version set the stage for multi-platform targets and a larger community engagement that would fully manifest with subsequent versions. (Notably, there was a longer gap after 7.0 – it would be about two and a half years before the next version, as YoYo Games focused on community features and planning Game Maker’s future[^2].)

## Version 8.0 (2009) – Last Classic Version with Editor Overhauls
**Game Maker 8.0** (often just called *Game Maker 8*) was released on December 22, 2009 [^5]. It was the last major version of the “classic” Game Maker line developed with Mark Overmars’s direct involvement. GM8 came after a lengthy gap and delivered numerous improvements to the user experience, though it didn’t drastically change the engine’s underpinnings. Notable features and changes in Game Maker 8.0 include:

- **Revamped Script Editor:** One of the headline enhancements was a completely **revamped code editor window** for GML scripting [^5]. The new script editor had better syntax highlighting, auto-indentation, and a more user-friendly interface for writing code. This was a welcome improvement for users who wrote a lot of GML, making the coding experience smoother and more akin to standard programming IDEs. It included line numbers, find/replace functionality, and other conveniences that were lacking or rudimentary in previous versions.

- **Improved Image/Sprite Editor:** Game Maker 8 introduced a significantly improved built-in image editor for creating and editing sprites. The sprite editor got new tools and a better UI – for example, support for alpha transparency editing (RGBA), more drawing tools, and perhaps onion-skinning for subimages/animation previews. This meant users could do more pixel art and image touch-ups directly in Game Maker without needing an external graphics program. The overhaul made it easier to create higher-quality sprites and tiles within the IDE [^5].

- **Import/Export of Resources:** GM8 added the ability to **import and export resources** (sprites, objects, scripts, etc.) between project files [^5]. This was implemented through a mechanism to save individual resources or groups of resources to an external file and then load them into another project. It greatly facilitated sharing and reusing code or assets. For instance, a user could export a monster object or a script from one game and import it into another without recreating it from scratch. This feature made Game Maker more modular and collaborative.

- **New Default Font and Minor UI Tweaks:** The appearance of the IDE was refreshed slightly – for example, GM8 used a different default font (Calibri) in the interface, which gave it a more modern look compared to the older versions that used MS Sans Serif. There were also new icons for some actions and minor layout adjustments. Overall, the IDE looked cleaner and more up-to-date in GM8. (This version also infamously introduced a new logo for Game Maker – a green circular “G” icon – chosen via a community contest, replacing the long-standing red ball icon [^6]. The logo change stirred some controversy in the community, but it was purely cosmetic and did not affect functionality.)

- **Removed Legacy Features:** In moving to GM8, some very old/obsolete features were pruned. For example, support for really outdated Windows versions was dropped and certain deprecated functions were removed or changed. This was part of cleaning up the codebase for the future.

- **Bug Fixes and Stability:** After the significant architectural changes in GM7 (with extensions and new file I/O) and the long development cycle, GM8 focused on stability. Many bugs from GM7 were fixed. The extension mechanism was still present, but more integrated. The game runner and executables produced were more stable on modern Windows OSes. Additionally, game performance saw minor improvements in some areas (though the engine was largely the same as GM7’s, aside from the editor upgrades).

- **Monetization and Editions:** Game Maker 8.0 continued the paid registration model. In fact, YoYo Games adjusted the pricing around this time (GM8 Standard was priced around $25). There was still a Lite version available for free with certain features (like 3D and extensions) disabled, and a Pro/registered version that unlocked full capabilities [^5]. Activation was handled online via YoYo Games accounts.

As the final version developed under Mark Overmars, **Game Maker 8.0** was a polished and user-friendly culmination of a decade of development. It **did not radically change the types of games one could make** (the engine was still 2D-focused with optional simple 3D, and used Direct3D8 for rendering just like GM7). However, it significantly refined the development experience — coding, painting sprites, and managing game assets became easier and more efficient in GM8 [^5]. The community received GM8 very positively; it became a stable workhorse for many hobbyist and educational projects in the early 2010s. (An update *Game Maker 8.1* would later be released in 2011 by YoYo Games, primarily to improve Windows Vista/7 compatibility and add minor features, but 8.0 was the last version where Overmars was deeply involved in the design.)

## The GM8.2 Project
The GM 8.2 Project is an open-source community-driven fork of Game Maker 8.0, aiming to enhance and extend the original software's capabilities. Hosted on GitHub, the project encompasses multiple repositories focusing on various improvements and new features.​

One of the core components is **gm82core**, a quality-of-life extension that introduces helper functions, precise timing, global variables, and utility constants to Game Maker 8.2. This extension serves as a foundation for many other modules within the GM 8.2 ecosystem.
GITHUB

Other notable modules include **gm82room**, a revamped Room Editor module, and **gm82dx9**, which provides a DirectX9 interface extension, enhancing the graphical capabilities of Game Maker 8.2.

By building upon the original Game Maker 8.0, the GM 8.2 Project aims to modernize the software, incorporating new features and improvements that cater to the evolving needs of game developers without switching to GameMaker Studio line of products.​

Find out more on the official website:
[GM 8.2 Project](https://gm82.cherry-treehouse.com/#News)

---
# Game Maker Community
One of the strongest parts of Game Maker was its community, first started on 9th November 2000 and simply called **Game Maker Forum** (gamemaking.community.everyone.net)[^8].

Key milestones for the GMC:

Image | Host | Description
---|---|---|
None | gamemaking.community.everyone.net | Single board simply called **Game Maker Forum**
 ![pub58.ezboard.com/bgamemakercommunity](https://github.com/user-attachments/assets/b1938ad5-2496-4ef3-93e2-1aceb8ce07fd) | pub58.ezboard.com/bgamemakercommunity | It then moved to EZboard on the 16th March 2001
![gmcommunity.edgehost.com](https://github.com/user-attachments/assets/c4198059-b7a2-45a8-add1-34cfc864edaf) | gmcommunity.edgehost.com/forums/ | Invision Power Board v 1.1 on 6th October 2002 but it only lasted until 8th January 2003 due to server problems (so they went back to Ezboard).
![forums.gamemaker.nl](https://github.com/user-attachments/assets/6483e04f-d798-4213-9de0-91e2c6046968) | forums.gamemaker.nl | Started on 26th October 2003 another self-hosted Invision Power Board v1.3 this one was much more successful and they never went back to Ezboard
![gmc.yoyogames.com](https://github.com/user-attachments/assets/7554b893-b65a-4da0-b032-b9ed6ac79f14) | gmc.yoyogames.com | Started 8th May 2007


The Game Maker Community has now lasted over 25 years!

---
# References
[^1]: [Version 1 - Game Maker - Fandom](https://gamemaker.fandom.com/wiki/Version_1)
[^2]: [Ten Years of Game Maker 1999-2009 - GameMakerBlog](https://gamemakerblog.com/2009/11/15/ten-years-of-game-maker-1999-2009/600#:~:text=%281999,one%20panel%20for%20a%20start)
[^3]: [Game Maker Histories - GameMaker Community](https://forum.gamemaker.io/index.php?threads/game-maker-histories.98/#:~:text=Game%20Maker%201,Game%20Maker%20reaches%201000%20downloads)
[^4]: [Game Maker 1.2:軟體介紹,改善列表,修正列表,產生背景,主要功能,影_中文百科全書](https://www.newton.com.tw/wiki/Game%20Maker%201.2/532949#:~:text=%E8%BB%9F%E9%AB%94%E4%BB%8B%E7%B4%B9)
[^5]: [Gamemaker - Everything for computers Wiki - Fandom](https://everythingforcomputers.fandom.com/wiki/Gamemaker#:~:text=functionality%20en,8)
[^6]: [New Game Maker Logo Revealed - GameMakerBlog](https://gamemakerblog.com/2009/11/27/new-game-maker-logo-revealed/#:~:text=Image%3A%20Game%20Maker%208%20Logo)
[^7]: [RMA Games Collection by Alamantus GameDev](https://alamantus.itch.io/rma-games-collection#:~:text=The%20executables%20themselves%20were%20created,probably%20any%20version%20of%20WINE)
[^8]: [Game Maker Pages 2001](https://web.archive.org/web/20001110011300/http://www.cs.uu.nl/people/markov/kids/gmaker/index.html)
[^9]: [Game Maker 1.3](https://web.archive.org/web/20000229113403/http://www.cs.uu.nl/people/markov/kids/gmaker/index.html)
[^10]: [Game Maker History 2002](https://web.archive.org/web/20021212194534if_/http://www.cs.uu.nl/people/markov/gmaker/history.html)
[^11]: [Game Maker Facts 2004](https://web.archive.org/web/20041012165649if_/http://www.cs.uu.nl/people/markov/gmaker/facts.html)
[^12]: [GameMaker Versions - GameMaker Wiki](http://game-maker.wikidot.com/game-maker-versions)
[^13]: [Dreamland: Home of Josh](http://dreamland.im/about.php)
[^14]: [Game Maker Pages Old Downloads](https://web.archive.org/web/20050830103832if_/http://www.gamemaker.nl:80/old.html)
