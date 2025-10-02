---
layout: post
title: Krome Studios Merkury Engine
permalink: /krome-merkury-engine
breadcrumbs:
  - name: Home
    url: /
  - name: Game Engines & Middleware
    url: /gameengines
  - name: Krome Studios Merkury Engine
    url: #
tags:
  - middleware
  - gameengines
recommend:
  - middleware
  - gameengines
editlink: /tools/engines/KromeMerkuryEngine.md
_image: /public/consoles/Tools.jpg
---

The **Merkury** engine is a proprietary game engine developed by **Krome Studios** since at least 2001, known to run on PS2, PSP, Wii and with version 3 of the engine it added support for  Xbox 360 and PS3. It is likely also running on the Nintendo Switch thanks to the recent port of **Star Wars: The Force Unleashed** to the console.

Nowadays new games are developed in Unity at **Krome Studios** (e.g Ty the Tasmanian Tiger 4) rather than the Merkury engine, but remaster of older games are still being relased based on the Merkury engine so Krome Studios are still activly developing with it.

It is best known for the custom versions of **Star Wars: The Force Unleashed** on less powerful consoles, because the LucasArts version for Xbox 360 and PS3 was too demanding to port directly to PS2, PSP or Wii. Because a significant installer base remained for those consoles, LucasArts opted to outsource a custom version to Krome, using their existing engine architecture under the name **Merkury**

---
## Origin of Krome Studios
<img width="503" height="190" alt="Gee Wizz! entertainment Logo" src="https://github.com/user-attachments/assets/a8a981fa-9636-4d97-a242-a874f8855620" />

Originally known as **Interactive Binary Illusions** and then renamed **Gee Wizz! entertainment** on the release of their game Zombie Wars [^9], it was formed by partners **John Passfield** and **Steve Stamatiadis**. It later became Krome Studios on the 1st November 1999 [^6].

Despite all the evolution, the studio continued to be based in Brisbane, Australia.

---
## Origin of the engine
The creation of Merkury Engine is credited to the following programmers in the manual for the 2001 PS2 game **Sunny Garcia Surfing** [^1]: 
* **James Podesta** - Also credited as Lead programmer on the game has been at Krome Studios since at least **Championship Surfer** back in 2000 and still there in 2023!
* **Dave Pevreal** - Also credited as Lead engine programmer on the Merkury engine version of **Star Wars: The Force Unleashed** [^3]
* **Tony Ball** - Also credited as engine programmer on the Merkury engine version of **Star Wars: The Force Unleashed** [^3]

It would have been used in the cancelled **Kat Burglar** game that Krome Studios was working on in late 2000, which even advertised on their official website about the use of their proprietary Merkury engine [^7]:
```markdown
Kat Burglar is a 3rd person action-adventure game set in the swinging 60's. Katherine Kelly is a millionaire playgirl by day and a Robin Hood style thief by night. Katherine ("Kat" to her friends) specializes in stealing hard to get items from museums and fortified storehouses.

But she doesn't steal for the money…

Of course we're not going to give it all away just yet. We are keeping a few things under our hat - Kat Burglar is full of secrets and surprises. What we can tell you is that Kat is being developed for next generation console platforms and uses our proprietary 3D graphics engine Merkury.

Kat Burglar focuses heavily on characters and storyline. This game isn't a shooter. While there will be occasions where Kat won't be able to avoid a fight, more emphasis is placed on stealth. As Kat Burglar, the player will be part of the story that unfolds on the island of Mont-St-Michel. Kat will also come across many characters in the game, some friends, some enemies and some she's just not sure about.
```

The official website even had a page dedicated to the Merkury game engine, this was archived on the wayback machine on March 3rd 2001 [^8]:
```markdown
Krome Studios' proprietary 3D game engine Merkury was developed entirely in house over a period of 3 years. The modular construction and versatility of this technology enables Krome to continually update the engine with new and innovative features that position Merkury as a world-class 3D game engine. Merkury is suitable for a wide variety of applications and platforms.

Feature List
* Soft-Skinned Skeletal Animation System
* Simultaneous Independent Animations
* Mesh Morphing and Animation Morphing
* Full Support For implementation Of 3D Studio MAX Meshes And Animation
* Support For Hardware Transformation And Lighting
* Real-time Shadows
* Full Particle Library Using Realistic Motion Simulation.
* Advance Material Management System
* Real-time Collision System
* Indoor And Outdoor Environments
* Multi-Platform
* Multi-Genre
* Multiple Field Of View
 	 	 
# Powered by MerKury 
The Merkury engine currently powers a large number of titles including:
* Championship Surfer
* Kat Burglar
* Mike Stewart's Pro Bodyboarding
* Chronicles of Jaru Tenk
* Spirit Board
* Gruesome Castle
```

---
## Programming the Merkury engine
The Merkury was built in C++ with a few modules written in Assembler, with simultation development of the engine on multiple consoles at once (PS2, GameCube and Xbox) [^4].

On the port of the Merkury engine to GameCube for Ty the Tasmanian Tiger, **Chris Lacy** had the following to say in an interview with Nintendo World Report (NWR):
>In about July of last year (2001) we received our first GameCube DevKit, which was very exciting for me, especially because I had been following the development of "Dolphin" since the PlanetN2000 days when Rick first broke the story about the codename for the project. To see it in person was so cool.
>
> Within a couple of weeks, **Tony Ball**, our GameCube engine lead, had the character animating and drawing and doing most of what was doing in the PS2 version. A couple of months went by and by that point the GameCube version of the Merkury engine was pretty much inline with the PS2 version, so from then on development was simultaneous between the PS2 and GameCube, and later Xbox versions of the game.

## Known Merkury Engine Games

From our analysis of game files, we are confident that the following titles use the Merkury engine:
* **Star Wars: The Force Unleashed** — PS2, PSP, and Wii versions
* **Star Wars: The Clone Wars – Republic Heroes**
* **The Adventures of Jimmy Neutron: Jet Fusion** - PS2 version confirmed

Although not confirmed via file analysis, the following is often claimed:
* **Star Wars: The Force Unleashed** — Switch version (reportedly a port of the Wii version rather than the Ronin‑based Xbox 360/PS3 version)

---
## Possible Merkury Engine Titles

Because not all uses of Merkury are documented, below is a table of major titles developed by Krome Studios across platforms. This is a reference for potential engine use, not confirmation of Merkury integration.

| Game Title | Platform(s)| Year | Using Merkury Engine?
|---|---|---|---
| Mike Stewart's Pro Bodyboarding| Windows | 1999 |
| Championship Surfer | Windows, PlayStation, Dreamcast | 2000 | Yes for Windows(SURF_PC.rkv) and Dreamcast (SURF_DCP.rkv) but no for PS1
| Barbie Beach Vacation| Windows | 2001 |
| Disney's Extremely Goofy Skateboarding | Windows | 2001 | No (custom engine that predates Merkury, uses fmod, bink, zip files)
| Sunny Garcia Surfing | PlayStation 2  | 2001 | Yes
| Barbie: Sparkling Ice Show | Windows | 2002 |
| Ty the Tasmanian Tiger | PS2, Xbox, GameCube, Windows, HD Remasters | 2002 | Yes
| The Adventures of Jimmy Neutron: Jet Fusion   | PS2, GameCube | 2003 | Yes
| Ty the Tasmanian Tiger 2: Bush Rescue | PS2, Xbox, GameCube, Windows, HD Remasters | 2004 | Yes
| King Arthur | PS2, Xbox, GameCube | 2004 |
| Ty the Tasmanian Tiger 3: Night of the Quinkan| PS2, Xbox, GameCube, Windows, HD Remasters | 2005 |
| The Legend of Spyro: A New Beginning| PS2, Xbox, GameCube, GBA  | 2006 |
| The Legend of Spyro: The Eternal Night   | PS2, Wii | 2007 |
| Viva Piñata: Party Animals| Xbox 360 | 2007 |
| Hellboy: The Science of Evil   | PS3, Xbox 360, PSP | 2008 |
| Star Wars: The Force Unleashed | PS2, PSP, Wii, Nintendo Switch | 2008, 2022 | Yes
| Star Wars: The Clone Wars - Lightsaber Duels  | Wii | 2008 |
| Scene It? Box Office Smash | Xbox 360 | 2008 |
| Star Wars: The Clone Wars – Republic Heroes   | PS3, Xbox 360, Wii, PS2, PSP, Windows | 2009 | Yes
| Transformers: Revenge of the Fallen | PS2, Wii | 2009 |
| Game Room | Xbox 360, Windows, Windows Phone 7  | 2010 | Yes (RKV files present in windows version)
| Blade Kitten | PS3, Xbox 360, Windows | 2010, 2012 | Yes (RKV files present)
| Legend of the Guardians: The Owls of Ga'Hoole | Xbox 360, PS3, Wii | 2010 | Yes (Merkury 3)
| Full House Poker | Xbox 360, Windows Phone 7 | 2011 |
| Backyard Sports Basketball 2015 | iOS, Android | 2015 | No (Unity)
| Ty the Tasmanian Tiger 4  | Windows | 2015 | No (Unity)
| Ty the Tasmanian Tiger HD | Xbox One, Series X/S, Switch, PS4, Windows | 2016, 2020 | Yes (RKV files present)
| Ty the Tasmanian Tiger 2: Bush Rescue HD | Xbox One, Series X/S, Switch, PS4, Windows | 2017, 2021 | Yes (RKV files present)
| Ty the Tasmanian Tiger 3: Night of the Quinkan HD  | Windows | 2018 | Yes (RKV files present)
| The Bard’s Tale Trilogy   | Windows, Xbox One | 2018, 2019 | No (Unity)
| Wasteland Remastered | Windows, Xbox One | 2020 | No (Unity)
| Ty the Tasmanian Tiger 4: Bush Rescue Returns | Nintendo Switch | 2023 |
| Monster Dash | iOS, Android | 2016 / ongoing | No (Unity)
| Gizmotablet (Kid World, Verizon) | Android Tablet (EdTech)   | 2018 |

---
# Star Wars: The Force Unleashed (PS2, PSP, Wii Versions)
Unlike the Xbox 360 and PS3 versions of **Star Wars: The Force Unleashed** the PS2, PSP and Wii versions were not built by **LucasArts** or use the **Ronin** engine.
Instead they were developed by **Krome Studios**, a completely separate studio known for action-platformers and movie tie-in games.

Krome developed these versions with a separate engine tailored for the older hardware and with unique content and gameplay elements. It is unlikely that ILM/LucasArts would allow their Zeno/Zed software to be used by a third party developer, so we presume these versions were not made using Zed and any assets were either sent over manually to the studio or made custom by **Krome**.

Because of hardware constraints, these versions use the **Open Dynamics Engine (ODE)** for physics, rather than **Havok**, which powers the Xbox 360 / PS3 versions.

---
## Files in the PSP Version (UMD Disc contents)
If you extract the files from the UMD disc you will get the following file structure:
**./PSP_GAME**
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

The **BOOT.BIN** executable confirms it is using the **Krome Studios Merkury engine** rather than the LucasArts **Ronin** engine used for the PS3 and Xbox 360 versions. 

### Source file references in the PSP version
For fun here is a list of unique strings that reference some of the original source code file names from inside the **BOOT.BIN** executable, they all seem to be related to the Ai system and all have the path prefix **d:/starwars/src/StarWars/Source/** :
* Ai/PathMap.cpp
* Ai/Goals/AI_FollowEntityGoal.cpp
* Ai/Goals/AI_OrganisedRetreatGoal.cpp
* Ai/Goals/ScriptGoal.cpp
* Brains/AIBrain.cpp (AIBrain.h)
* Entity/Humanoid/Humanoid.cpp
* Props/CustomizeCostumeProp.cpp


---
## Game Data Archives - .RKV files
The game uses RKV archive format, specifically version 2 of the format, these can be extraced with [Luigi Auriemma's QuickBMS](https://aluigi.altervista.org/quickbms_list.php) and the [Rkv2 BMS script](https://aluigi.altervista.org/bms/rkv2.bms).

---
### Main Game Data Archive (data_pp.rkv)
The **data_pp.rkv** file has **23,934** files in the PSP version, which seems to be unoptimized as it also contains assets with the **Wii** prefix such as **Wii_Controller.tex** and **Wii_Vader_Gloves.min**.

Due to the huge amount of files in the archive, we are not going to list them out in this page, but the file extensions used for all of the files are in the table below:

Extension  | Number of Files | Description
---|---|---
tex   | 4112  | Texture image file (Magic header: TEX)
min   | 3644 | Minimal index or metadata file?
mdg   | 2832 | Model geometry or mesh data   
mdl   | 2832 | 3D model file 
bni   | 2605 | Similar to bbi, a custom binary index file
bbi   | 1688  | Binary index or custom binary data file   
ang   | 1682  | Possibly animation or angle data file
anm   | 1682  | Animation file   
pkg   | 775 | Package file containing grouped assets 
cgr   | 692 | Character graphics or 3D model data   
BPK   | 451 | Likely a binary package or game resource file 
sbk   | 278 | Sound bank file (see format below)
at3   | 230 | ATRAC3 compressed audio format used in PSP
pmd   | 180 | Polygon model data
psb   | 88 | PlayStation bitmap or proprietary sprite sheet
mcd   | 66 | Mission/cutscene data or custom game data  
txt   | 65 | Plain text file mostly used for Locale string definitions per game platform e.g Xbox, PS2, Wii    
bin   | 11 | Generic binary data file    
fnt   | 5 | Font file, often bitmap or vector font
FontInfo | 3 | Plain text Font metadata containing a simple script setting variables like CharMap, AspectRatio, CharSpacing, FontXScale and FontYScale    
bmfc  | 2 | Possibly custom file with material or font info?
fnb   | 2 | Font binary file  
inc   | 1 | Include file, likely script or code include
mdb   | 1 | Possibly model data or database file?
mdd   | 1 | Model animation or motion data?    
mine, r11913, r11979 | 3 | Version Control files left over from a merge of the global.lv3.bni file (revision r11913 and r11979) 
tmp   | 1 | Temporary file storing metadata, only used for one file called `lastupdate.tmp` 
csv   | 1 | Comma-separated values text file 
xls   | 1 | Excel spreadsheet file for translations (`Translations.xls`)


#### BNI Files?
Not quite sure what *.BNI files are, they always start with the ASCII string "D:\starwars\data\RKVs\..\Common", but I presume they are an archive, possibly compressed (but there is a lot of strings so maybe not).

They also have a wide variety of names:
* global.lv3.bni - contain the string "Sire version 2.70  Data File version 3.0", but not sure if Sire is an in-house tool or a third party software.
* global.sound.bni - contains strings like "swfx_RA_canon_ball_fire"
* GE.model.bni

The lvl files contain strings such as:
* **PQuakePos** - Also has **QuakeRot** Was this a quake format?
* **GameDefaultCamera** - camera settings such as nearPlane and farPlane
* **=BOUNDING_REGION** - Bounding Box information


#### Left-over development content
The **.mine**, **.r11913**, **.r11979** files suggest use of the RCS (Revision Control System) version control system as it uses these extensions to manage file revisions and resolve conflicts locally.

Also it also highlights that the RKV files have a lot of files that are not required by the game at runtime, these version control files and also the translation Excel spreadsheet `Translations.xls`. it looks like they just archive a certain folder and distribute it with the game. Unfortunetly for us they didn't accidently also include any debug symbols or source code in the archives.

---
### Language Specific Sound Bank Archives (LngEN_pp.rkv and LngFR_pp.rkv)
**LngEN_pp.rkv** and **LngFR_pp.rkv** contain sound bank files (.sbk) for their respective languages, presumably all the voiced dialog in the game is contained in these and they have the file name format like **cscc001_01_00_p01dven.sbk**.

Likely naming format breakdown:
* **cscg001**: Likely an ID for a cutscene, always prefixed with "cs" presumably standing for cutscene.
* **01_00**: Major/minor numbers w.g for scene/area, event, sequence, or version
* **p01** — Possibly part 1/phase 1 or referencing a specific voice/group.
* **dv** — Character anchors e.g dv is Darth Vader
* **en** — Audio Language (Known values: en, fr)

#### SNK Cutscene Codes
Possible cutscene codes are presented in the table below:

| Cutscene ID | Likely scene | Rationale (where applicable) |
|---|---|---|
| **csdv001**  | Darth Vader prologue (Kashyyyk) | "DV" = Darth Vader; prologue is a Vader mission.|
| **cska2xx**  | Kashyyyk  | "ka" matches planet.  |
| **csfe1xx/2xx/20x/205**| Felucia   | "fe" = Felucia. |
| **csrp1xx/2xx**   | Raxus Prime | "rp" = Raxus Prime.   |
| **csjt1xx/2xx**   | Jedi Temple (trials)| "jt" = Jedi Temple.   |
| **csmu001**  | Mustafar (historic mission)   | "mu" = Mustafar. |
| **csns201**  | Nar Shaddaa | "ns" = Nar Shaddaa.   |
| **cstc001/101**   | TIE Construction Facility| "tc" = TIE Construction; early game mission. |
| **csds201**  | The Dune Sea (Tatooine historic mission)| "ds" = Dune Sea; appears as historic mission.   |
| **cscc001/201/202/204/205** | Carbonite Chamber (Bespin historic mission)  | "cc" = Carbonite Chamber.|
| **cscg001**  | Geonosis Colosseum (historic mission)   | "cg" = Colosseum Geonosis. |
| **csdq001**  | Dooku’s Quarters (Geonosis historic mission) | "dq" = Dooku’s Quarters.  |
| **csvo001**  | Vader’s Observatory/Vessel?   | "vo" ambiguous; likely Vader-related interstitial. |
| **csvf101/102/104** | Vader’s Flagship/Facility? | "vf" ambiguous; Vader-adjacent (briefings/bridges).|
| **csqg001**  | ? Geonosis-related (Qui-Gon is unlikely)| "qg" unclear; could be internal codename. |
| **cspl001**  | ? Palace (Jabba’s)  | "pl" plausible "(Jabba’s) Palace" historic. |
| **csps001**  | ? Palace/Cantina sequence| "ps" ambiguous; may be Tatooine set-piece.|
| **csrg001**  | ? Raxus (Gateway)/Royal Guard | "rg" unclear; could be encounter beat. |
| **csrh201**  | ? Raxus H— (Hub/Hangar/Holo)  | "rh" unclear; grouped with Raxus arc number. |
| **csrs001**  | ? Raxus Scrap (yard)| "rs" plausible for "scrapyard". |
| **csfd001**  | ? Felucia derivative| "fd" could be Felucia boss/dialogue beat. |
| **csil101**  | ? Imperial Laboratory/Library | "il" ambiguous; story contains Imperial facilities. |
| **csos001**  | ? Ossus   | "os" could be Ossus (Jedi world); unconfirmed. |

Although these are a guess, proper analysis including playing each of the SBK files while playing the game would be required to give more concrete information.

---
### SBK - Sound Bank File Format
After some initial analysis it seems the .SBK (header: SB01) files contained in the RKV archives is a small custom container that wraps a mono **PSX-ADPCM** stream. The container adds a fixed header (magic/version/size/name/flags) and stores raw ADPCM frames **without a VAGp/RIFF wrapper**.

Here are the header Metadata fields, numbers are all 32-bit Little Endian:
* **Magic** - Always "SB01" (ASCII) at 0x00
* **Version** - e.g 0x00000001 at 0x04
* **File size** - e.g 0x000029D0 (= 10704) at 0x08
* **Name** -  e.g "CSZZ001_00_00_P01ZZEN" (ASCII, 32 bytes, NUL-padded) at 0x10
* **Header size** - e.g 0x50 (= 80 bytes) at 0x30
* **Data size** - 0x2980 (= 10624 = file_size − header_size)  at 0x34
* **Flags/SampleRate** - e.g 0x80004A38; low bits 0x4A38 = 19000 Hz, high bit likely a format flag at 0x38
* **Audio payload offset** - e.g 0x50 (immediately after the header)

The rest of the file is consistent with PSX ADPCM (a.k.a. VAG): 
* 16-byte frames with pattern 0x0C 0x00 ... repeated
* mono frames (1-byte predictor/shift, 1-byte flags, 14 data bytes → 28 PCM samples/frame).

### Script to convert .SBK to WAV
Here is a Python3 script to convert the .SBK files to WAV:
```python
# Convert .SBK (Merkury Engine Sound Bank, Star Wars Force Unleashed) to WAV
import os, struct, wave, re

src = "./output/csch001_13_03_p01hten.sbk"
with open(src, "rb") as f:
    blob = f.read()

# Basic SB01 parse
magic = blob[0:4]
version = int.from_bytes(blob[4:8], "little")
total_size = int.from_bytes(blob[8:12], "little")
name = blob[0x10:0x30].split(b"\x00",1)[0].decode("ascii", "replace")
hdr_size = int.from_bytes(blob[0x30:0x34], "little")   # typically 0x50
data_size = int.from_bytes(blob[0x34:0x38], "little")  # total_size - hdr_size
flags_sr  = int.from_bytes(blob[0x38:0x3C], "little")  # 0x80000000 | sample_rate
audio = blob[hdr_size:hdr_size+data_size]

# Extract sample rate from low 16/32 bits; keep high bit as a flag
sample_rate = flags_sr & 0x7FFFFFFF  # remove 0x80000000
if sample_rate == 0 or sample_rate > 192000:
    # fallback if the high bit wasn't just a flag
    sample_rate = flags_sr & 0xFFFF

# Minimal PSX ADPCM (VAG) decoder (mono). Each frame is 16 bytes -> 28 samples.
COEFFS = [
    (0.0, 0.0),
    (60.0/64.0, 0.0),
    (115.0/64.0, -52.0/64.0),
    (98.0/64.0, -55.0/64.0),
    (122.0/64.0, -60.0/64.0),
]

def decode_frame(frame, p1, p2):
    shift = frame[0] & 0x0F
    filt  = frame[0] >> 4
    flags = frame[1]
    a1,a2 = COEFFS[filt] if 0 <= filt < len(COEFFS) else (0.0,0.0)
    out = []
    for i in range(2,16):
   b = frame[i]
   for nib in (b & 0x0F, (b >> 4) & 0x0F):
  s = nib if nib < 8 else nib - 16
  sample = (s << 12) >> shift
  sample = int(sample + p1*a1 + p2*a2)
  sample = max(min(sample, 32767), -32768)
  p2, p1 = p1, sample
  out.append(sample)
    return out, p1, p2, flags

pcm = []
p1=p2=0
i=0
# Skip any leading 0x00 frames (padding)
while i+16 <= len(audio):
    frame = audio[i:i+16]
    if frame == b"\x00"*16:
   i += 16
   continue
    batch, p1, p2, fl = decode_frame(frame, p1, p2)
    pcm.extend(batch)
    i += 16

dst = f"./{name}.wav"
with wave.open(dst, "wb") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(sample_rate if 8000 <= sample_rate <= 96000 else 19000)
    w.writeframes(b"".join(struct.pack("<h", s) for s in pcm))

print ("Success:", dst, len(pcm), sample_rate, magic, version, total_size, hdr_size, data_size)
```

---
# Pre-Merkury - Mike Stewart's Pro Bodyboarding
Mike Stewart's Pro Bodyboarding was actually built by **Gee Whiz! Entertainment**, the studio that would then go on to become **Krome Studios**. The official Krome Studio's website from 2001 claimed that it was using the Merkury engine, but analysing the game files has no mention of the Merkury engine and instead seems to be using a custom **Blast Graphics** library that contained alot of game engine functionality such as keyboard input, AVI video playback, lighting, animation and more.

## Blast Graphics (bg.dll)
The Blast Graphics library, which is presumably the precursor to the Merkury engine is located in the **bg.dll** file, looking at the exports table we know it has the following functionality:

Name | Location | Function Signature | Function Size (bytes) | Description
---|---|---|---|---
AVIFileExit | 0x10032f0a | AVIFileExit() | 6 | 
AVIFileInit | 0x10032f34 | AVIFileInit() | 6 | 
AVIStreamInfoA | 0x10032f1c | AVIStreamInfoA() | 6 | 
AVIStreamLength | 0x10032f22 | AVIStreamLength() | 6 | 
AVIStreamOpenFromFileA | 0x10032f2e | AVIStreamOpenFromFileA() | 6 | 
AVIStreamRead | 0x10032f46 | AVIStreamRead() | 6 | 
AVIStreamReadFormat | 0x10032f28 | AVIStreamReadFormat() | 6 | 
AVIStreamRelease | 0x10032f10 | AVIStreamRelease() | 6 | 
BG_AddObject | 0x1000d1f0 | BG_AddObject(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) | 5127 | 
BG_AddProjection | 0x10010380 | BG_AddProjection(param_1, param_2, param_3, param_4, param_5, param_6) | 835 | 
BG_AddQuad | 0x1000eda0 | BG_AddQuad(param_1, param_2, param_3) | 5566 | 
BG_AddSprite | 0x10008290 | BG_AddSprite(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10) | 5445 | 
BG_AddSpriteSection | 0x10008240 | BG_AddSpriteSection(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11) | 78 | 
BG_AddText | 0x10001aa0 | BG_AddText(param_1, param_2, param_3, param_4, param_5) | 1030 | 
BG_AddText2 | 0x10001eb0 | BG_AddText2(param_1, param_2, param_3, param_4, param_5, param_6) | 1030 | 
BG_AllocObject | 0x100028a0 | BG_AllocObject() | 43 | 
BG_AlterVertice | 0x10005500 | BG_AlterVertice(param_1, param_2, param_3, param_4, param_5) | 93 | 
BG_Animate | 0x100055e0 | BG_Animate(param_1, param_2) | 60 | 
BG_AnimateCustom | 0x100056e0 | BG_AnimateCustom(param_1, param_2, param_3) | 683 | 
BG_AnimateNode | 0x10005620 | BG_AnimateNode(param_1, param_2, param_3, param_4) | 177 | 
BG_BeginFullscreen | 0x10012750 | BG_BeginFullscreen() | 6 | 
BG_CallLogics | 0x10012370 | BG_CallLogics() | 198 | 
BG_ChangeRes | 0x10023160 | BG_ChangeRes() | 1 | 
BG_ClearObjects | 0x100231b0 | BG_ClearObjects() | 78 | 
BG_ClearRGB | 0x1001e870 | BG_ClearRGB(param_1, param_2, param_3) | 861 | 
BG_ClipOff | 0x10002490 | BG_ClipOff() | 28 | 
BG_ClipOn | 0x1001f470 | BG_ClipOn(param_1, param_2, param_3, param_4) | 280 | 
BG_CopyTexture | 0x1001d0c0 | BG_CopyTexture(param_1, param_2) | 345 | 
BG_CreateFont | 0x1001ef40 | BG_CreateFont(param_1, param_2) | 1197 | 
BG_DebugText | 0x10002430 | BG_DebugText(param_1) | 41 | 
BG_Disable | 0x1001dfc0 | BG_Disable(param_1) | 52 | 
BG_DisableOmni | 0x10009c20 | BG_DisableOmni(param_1) | 37 | 
BG_DrawBkg | 0x1001fa40 | BG_DrawBkg(param_1) | 378 | 
BG_DrawObjects | 0x10020c80 | BG_DrawObjects() | 6096 | 
BG_DrawOverlay | 0x10020140 | BG_DrawOverlay(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, param_12, param_13, param_14, param_15, param_16, param_17, param_18, param_19, param_20, param_21, param_22) | 2797 | 
BG_DrawText | 0x100022c0 | BG_DrawText(param_1, param_2, param_3, param_4, param_5, param_6) | 359 | 
BG_Enable | 0x1001df40 | BG_Enable(param_1) | 51 | 
BG_EnableOmni | 0x10009c50 | BG_EnableOmni(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) | 345 | 
BG_EnableSub | 0x100016d0 | BG_EnableSub(param_1, param_2, param_3) | 50 | 
BG_EnableVal | 0x1001df80 | BG_EnableVal(param_1, param_2) | 50 | 
BG_EnumDirectSound | 0x10010b20 | BG_EnumDirectSound() | 5 | 
BG_EnumerateModes | 0x1001f5f0 | BG_EnumerateModes() | 163 | 
BG_EnumHardware | 0x1001dc10 | BG_EnumHardware() | 28 | 
BG_EraseBkg | 0x1001e730 | BG_EraseBkg(param_1) | 91 | 
BG_Exit | 0x1001e000 | BG_Exit() | 260 | 
BG_Flip | 0x1001ebd0 | BG_Flip(param_1, param_2) | 742 | 
BG_FPS | 0x10002480 | BG_FPS() | 7 | 
BG_FrameUsed | 0x10012730 | BG_FrameUsed() | 3 | 
BG_FreeObject | 0x100028d0 | BG_FreeObject(param_1) | 694 | 
BG_GetCamera | 0x10011e40 | BG_GetCamera(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) | 129 | 
BG_GetCaps | 0x10023170 | BG_GetCaps(param_1) | 42 | 
BG_GetDirectSound | 0x10010b30 | BG_GetDirectSound(param_1) | 14 | 
BG_GetDriverID | 0x1001ffd0 | BG_GetDriverID() | 14 | 
BG_GetFaceCount | 0x100076b0 | BG_GetFaceCount(param_1) | 22 | 
BG_GetFile | 0x100019d0 | BG_GetFile(param_1) | 14 | 
BG_GetFloor | 0x100065e0 | BG_GetFloor(param_1, param_2, param_3, param_4) | 363 | 
BG_GetFontMat | 0x10002460 | BG_GetFontMat(param_1) | 32 | 
BG_GetFrameCount | 0x10005990 | BG_GetFrameCount(param_1) | 40 | 
BG_GetFrontFaces | 0x100076a0 | BG_GetFrontFaces() | 6 | 
BG_GetFXPos | 0x10009b40 | BG_GetFXPos(param_1, param_2, param_3, param_4, param_5) | 174 | 
BG_GetHardware | 0x100019e0 | BG_GetHardware(param_1) | 49 | 
BG_GetInitError | 0x100024b0 | BG_GetInitError() | 14 | 
BG_GetLastColor | 0x1000e740 | BG_GetLastColor(param_1, param_2, param_3) | 567 | 
BG_GetLastMatNum | 0x1000ea30 | BG_GetLastMatNum() | 41 | 
BG_GetLastPlane | 0x1000e980 | BG_GetLastPlane(param_1, param_2, param_3, param_4) | 176 | 
BG_GetLastPoint | 0x1000e710 | BG_GetLastPoint(param_1, param_2, param_3) | 37 | 
BG_GetLastVector | 0x1000e680 | BG_GetLastVector(param_1, param_2, param_3) | 136 | 
BG_GetLocalNodePos | 0x10001950 | BG_GetLocalNodePos(param_1, param_2, param_3, param_4, param_5) | 113 | 
BG_GetLogicMul | 0x10012360 | BG_GetLogicMul() | 7 | 
BG_GetMatFaces | 0x100097e0 | BG_GetMatFaces(param_1, param_2, param_3, param_4, param_5) | 115 | 
BG_GetMatID | 0x10002870 | BG_GetMatID(param_1) | 41 | 
BG_GetMatNum | 0x1001ff80 | BG_GetMatNum(param_1) | 14 | 
BG_GetNearestColor | 0x10012740 | BG_GetNearestColor() | 3 | 
BG_GetNodeCount | 0x10001710 | BG_GetNodeCount(param_1) | 44 | 
BG_GetNodeName | 0x10001740 | BG_GetNodeName(param_1, param_2) | 135 | 
BG_GetNodeNum | 0x10001620 | BG_GetNodeNum(param_1, param_2) | 165 | 
BG_GetNodePos | 0x100017d0 | BG_GetNodePos(param_1, param_2, param_3, param_4, param_5) | 370 | 
BG_GetObjectBox | 0x100073e0 | BG_GetObjectBox(param_1, param_2, param_3, param_4, param_5, param_6, param_7) | 144 | 
BG_GetVertice | 0x10005560 | BG_GetVertice(param_1, param_2, param_3, param_4, param_5) | 121 | 
BG_GetVerticeCount | 0x100076d0 | BG_GetVerticeCount(param_1) | 21 | 
BG_GetWorldFXPos | 0x10009860 | BG_GetWorldFXPos(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, param_12) | 731 | 
BG_GetYfromXZ | 0x10006420 | BG_GetYfromXZ(param_1, param_2, param_3) | 29 | 
BG_GrabMaterial | 0x100234a0 | BG_GrabMaterial(param_1, param_2, param_3, param_4, param_5) | 126 | 
BG_Init | 0x1001f6a0 | BG_Init(param_1, param_2) | 921 | 
BG_InitGL | 0x10012760 | BG_InitGL(param_1, param_2, param_3) | 19 | 
BG_KeyDown | 0x1001c590 | BG_KeyDown(param_1) | 17 | 
BG_Line | 0x1001e110 | BG_Line(param_1, param_2, param_3, param_4, param_5, param_6, param_7) | 844 | 
BG_LineIntersect | 0x1000ea90 | BG_LineIntersect(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10) | 423 | 
BG_LineIntersectCircle | 0x1000ec40 | BG_LineIntersectCircle(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9) | 340 | 
BG_LoadAnimation | 0x100041c0 | BG_LoadAnimation(param_1, param_2, param_3) | 4684 | 
BG_LoadBkg | 0x1001e790 | BG_LoadBkg(param_1, param_2) | 222 | 
BG_LoadCameraTrack | 0x10011910 | BG_LoadCameraTrack(param_1) | 1125 | 
BG_LoadColorMap | 0x100059c0 | BG_LoadColorMap(param_1, param_2) | 712 | 
BG_LoadMatProperties | 0x10022eb0 | BG_LoadMatProperties(param_1) | 679 | 
BG_LoadObject | 0x10005cb0 | BG_LoadObject(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, undefined1 param_12, undefined1 param_13, undefined1 param_14, undefined1 param_15, undefined1 param_16, undefined1 param_17, undefined1 param_18, undefined1 param_19, undefined2 param_20) | 1904 | 
BG_MatriceClear | 0x100076f0 | BG_MatriceClear() | 22 | 
BG_MatriceCustom | 0x10007ae0 | BG_MatriceCustom(param_1) | 107 | 
BG_MatricePoint | 0x10007b50 | BG_MatricePoint(param_1, param_2, param_3, param_4, param_5, param_6) | 151 | 
BG_MatriceRotate | 0x10007710 | BG_MatriceRotate(param_1, param_2, param_3, param_4) | 464 | 
BG_MatriceScale | 0x100079e0 | BG_MatriceScale(param_1, param_2, param_3) | 247 | 
BG_MatriceTranslate | 0x100078e0 | BG_MatriceTranslate(param_1, param_2, param_3) | 247 | 
BG_MatText | 0x1001d220 | BG_MatText(param_1) | 704 | 
BG_MoveWindow | 0x1001f3f0 | BG_MoveWindow(param_1) | 119 | 
BG_PageFlip | 0x1001eec0 | BG_PageFlip(param_1) | 90 | 
BG_PageFlipDC | 0x1001ef20 | BG_PageFlipDC(param_1) | 19 | 
BG_PlayAVI | 0x100011d0 | BG_PlayAVI(param_1, param_2, param_3, param_4) | 650 | 
BG_PopBkg | 0x1001d050 | BG_PopBkg() | 112 | 
BG_Profile | 0x10001570 | BG_Profile(param_1, param_2) | 168 | 
BG_PushBkg | 0x1001cf20 | BG_PushBkg() | 299 | 
BG_RestoreSurfaces | 0x1001ff90 | BG_RestoreSurfaces() | 49 | 
BG_SaveBitmap | 0x1001dc30 | BG_SaveBitmap(param_1, param_2, param_3, param_4, param_5, param_6, param_7) | 771 | 
BG_SaveObject | 0x10005c90 | BG_SaveObject(param_1, param_2) | 26 | 
BG_SaveViewTransform | 0x10010360 | BG_SaveViewTransform(param_1) | 21 | 
BG_ScreenPoint | 0x10007500 | BG_ScreenPoint(param_1, param_2, param_3, param_4, param_5) | 248 | 
BG_ScreenPoint3D | 0x10007600 | BG_ScreenPoint3D(param_1, param_2, param_3, param_4, param_5, param_6) | 159 | 
BG_SetAmbientLight | 0x100025f0 | BG_SetAmbientLight(param_1) | 10 | 
BG_SetCamera | 0x10011ed0 | BG_SetCamera(param_1, param_2, param_3, param_4, param_5) | 283 | 
BG_SetCameraTrack | 0x100118c0 | BG_SetCameraTrack(param_1) | 72 | 
BG_SetCameraVector | 0x10011d80 | BG_SetCameraVector(param_1, param_2, param_3, param_4, param_5, param_6) | 184 | 
BG_SetCameraZoom | 0x10011ff0 | BG_SetCameraZoom(param_1, param_2) | 86 | 
BG_SetFarPlane | 0x1001ffe0 | BG_SetFarPlane(param_1, param_2) | 91 | 
BG_SetFarPlaneEx | 0x10009bf0 | BG_SetFarPlaneEx(param_1, param_2, param_3) | 45 | 
BG_SetFileCallback | 0x10012350 | BG_SetFileCallback(param_1) | 10 | 
BG_SetFontHandle | 0x100231a0 | BG_SetFontHandle(param_1) | 10 | 
BG_SetFOV | 0x1000e600 | BG_SetFOV(param_1) | 118 | 
BG_SetHardware | 0x1001dbf0 | BG_SetHardware(param_1) | 24 | 
BG_SetLightColor | 0x100025c0 | BG_SetLightColor(param_1, param_2, param_3) | 40 | 
BG_SetLightVector | 0x10002540 | BG_SetLightVector(param_1, param_2, param_3) | 116 | 
BG_SetMatColor | 0x10002770 | BG_SetMatColor(param_1, param_2, param_3, param_4) | 65 | 
BG_SetMatColorA | 0x100027c0 | BG_SetMatColorA(param_1, param_2, param_3, param_4, param_5) | 65 | 
BG_SetMatFrame | 0x1000ea60 | BG_SetMatFrame(param_1, param_2) | 42 | 
BG_SetMatProperty | 0x100224c0 | BG_SetMatProperty(param_1, param_2) | 2544 | 
BG_SetMatRotate | 0x10002680 | BG_SetMatRotate(param_1, param_2, param_3, param_4) | 73 | 
BG_SetMatScroll | 0x100026d0 | BG_SetMatScroll(param_1, param_2, param_3) | 146 | 
BG_SetNode | 0x1000a490 | BG_SetNode(param_1, param_2, param_3) | 99 | 
BG_SetObjectLight | 0x10002600 | BG_SetObjectLight(param_1, param_2) | 49 | 
BG_SetObjectLightA | 0x10002640 | BG_SetObjectLightA(param_1, param_2, param_3) | 49 | 
BG_Status | 0x10002810 | BG_Status() | 95 | 
BG_SurfaceHit | 0x10006750 | BG_SurfaceHit(param_1, param_2, param_3, param_4, param_5, param_6, param_7) | 3212 | 
BG_Text | 0x1001e580 | BG_Text(param_1, param_2, param_3) | 419 | 
BG_TextLen | 0x1001e460 | BG_TextLen(param_1) | 283 | 
BG_TextLenFont | 0x10001a60 | BG_TextLenFont(param_1, param_2) | 59 | 
BG_TweenObject | 0x10005410 | BG_TweenObject(param_1, param_2, param_3, param_4) | 230 | 
BG_WaveAnimate | 0x10024c80 | BG_WaveAnimate(param_1) | 1257 | 
BG_WaveCollide | 0x10025360 | BG_WaveCollide(param_1, param_2, param_3, param_4, param_5, param_6) | 501 | 
BG_WaveCollidePost | 0x10025560 | BG_WaveCollidePost(param_1, param_2, param_3, param_4) | 880 | 
BG_WaveCreate | 0x10024200 | BG_WaveCreate(param_1, param_2, param_3, param_4, param_5, param_6, param_7) | 1743 | 
BG_WaveGetFX | 0x100258f0 | BG_WaveGetFX(param_1, param_2) | 23 | 
BG_WaveGetLastFrame | 0x10024020 | BG_WaveGetLastFrame() | 7 | 
BG_WaveGetPitch | 0x10025190 | BG_WaveGetPitch(param_1, param_2, param_3) | 320 | 
BG_WaveGetPitchPost | 0x100252d0 | BG_WaveGetPitchPost() | 7 | 
BG_WaveGetTime | 0x100252e0 | BG_WaveGetTime(param_1) | 30 | 
BG_WaveGetTimeXZ | 0x10024130 | BG_WaveGetTimeXZ(param_1, param_2) | 194 | 
BG_WaveHighestPoint | 0x100240f0 | BG_WaveHighestPoint(param_1, param_2, param_3) | 49 | 
BG_WaveLoadAnimation | 0x10024910 | BG_WaveLoadAnimation(param_1) | 832 | 
BG_WaveScale | 0x100248d0 | BG_WaveScale(param_1, param_2, param_3) | 20 | 
BG_WaveScaleColumn | 0x10024c50 | BG_WaveScaleColumn(param_1, param_2, param_3) | 44 | 
BG_WaveScroll | 0x10025300 | BG_WaveScroll(param_1, param_2) | 95 | 
BG_WaveSetControlPoints | 0x100248f0 | BG_WaveSetControlPoints(param_1) | 31 | 
BG_WaveSetLipZ | 0x10025920 | BG_WaveSetLipZ(param_1) | 10 | 
BG_WaveSetTime | 0x10025170 | BG_WaveSetTime(param_1, param_2) | 27 | 
BG_WaveSetValues | 0x100258d0 | BG_WaveSetValues(param_1) | 30 | 
BG_WaveSmooth | 0x10025910 | BG_WaveSmooth(param_1) | 10 | 
BG_WorldPoint | 0x10007470 | BG_WorldPoint(param_1, param_2, param_3, param_4, param_5, param_6) | 139 | 
BS_AllocSound | 0x100109f0 | BS_AllocSound() | 40 | 
BS_EnumDirectSound | 0x100107b0 | BS_EnumDirectSound() | 28 | 
BS_Exit | 0x10010950 | BS_Exit() | 66 | 
BS_FreeSound | 0x100109d0 | BS_FreeSound(param_1) | 28 | 
BS_GetDirectSound | 0x100107d0 | BS_GetDirectSound(param_1) | 33 | 
BS_Init | 0x10010800 | BS_Init(param_1, param_2) | 324 | 
BS_IsSoundPlaying | 0x10010b00 | BS_IsSoundPlaying(param_1) | 30 | 
BS_LoadSound | 0x100109a0 | BS_LoadSound(param_1, param_2, param_3) | 38 | 
BS_PlaySound | 0x10010a20 | BS_PlaySound(param_1, param_2) | 41 | 
BS_SetSoundFrequency | 0x10010aa0 | BS_SetSoundFrequency(param_1, param_2) | 33 | 
BS_SetSoundPosition | 0x10010ad0 | BS_SetSoundPosition(param_1, param_2, param_3, param_4) | 43 | 
BS_SetSoundVolume | 0x10010a70 | BS_SetSoundVolume(param_1, param_2) | 33 | 
BS_StopSound | 0x10010a50 | BS_StopSound(param_1) | 28 | 
Catch@10027184 | 0x10027184 | Catch@10027184() | 16 | 
Catch@10027715 | 0x10027715 | Catch@10027715() | 29 | 
DirectDrawCreate | 0x10025948 | DirectDrawCreate() | 6 | 
DirectDrawCreateEx | 0x1002593c | DirectDrawCreateEx() | 6 | 
DirectDrawEnumerateA | 0x10025942 | DirectDrawEnumerateA() | 6 | 
entry | 0x10034385 | entry(param_1, param_2, param_3) | 157 | 


---
# Pre-Merkury - Disney's Extremely Goofy Skateboarding
The game **Disney's Extremely Goofy Skateboarding** pre-dates the Merkury engine and was built to be windows-only, but it was released in 2001 the same year that they released **Sunny Garcia Surfing**  which did use the Merkury engine. Presumably they were working on a new PS2 engine for the surfing game while working on the Disney game for windows, so it would not be easy to just port the skateboarding game over to the new engine.

Although it doesn't use Merkury it would be interesting to see if any code from this game made it into early versions of the Merkury engine.

The 3D Engine programmer for the Goofy game, **Tony Ball** was also one of the founding developers of the Merkury engine, so it is likely some of the code was re-used in Merkury or it at least helped shape the design decisions made in the engine.

Differences from the Merkury engine:
* **Asset archives** - Instead of the RKV format, the game bundles its assets into a file called **data0.pkg**, this is simply a Zip file, so its very easy to extract the contents by adding the .zip extention to the end.
* **Images** - It stores images directly as .BMP and textures as .TGA in the archive
* **Sounds** - It stores sounds directly as .WAV and .MP3 files

## Skating.exe executable
If you run the `binwalk` command on the **Skating.exe** executable you find that it actually has a few embeded executables too:
```
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DECIMAL                            HEXADECIMAL                        DESCRIPTION
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
0                                  0x0                                Windows PE binary, machine type: Intel x86
510344                             0x7C988                            Copyright text: "Copyright 1998 Gilles Vollant "
510760                             0x7CB28                            CRC32 polynomial table, little endian
518636                             0x7E9EC                            Copyright text: "Copyright (C) 1996, Thomas G. Lane"
862766                             0xD2A2E                            Copyright text: "Copyright (c) 1993 Tal Nevo."
872435                             0xD4FF3                            Windows PE binary, machine type: Intel x86
889647                             0xD932F                            Windows PE binary, machine type: Intel x86
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

The copyright messages hint at a few things:
* **Gilles Vollant** is most likely related to **zlib** compression used for the asset archives. 
* **Thomas G. Lane** is a principal author of the IJG’s widely used JPEG image compression software libraries, commonly known as **libjpeg**.
* **Tal Nevo** is possibly related to executable compression but this is a guess

The executable also has a few file paths left in which give a hint about the folder structure:
* D:\Src\Skating\Source\Character.cpp
* D:\Src\Skating\Source\Object.cpp
* D:\Src\Skating\Source\Main.cpp - Contained WinMain
* D:\Src\Skating\Source\GameData.cpp - Save Data

Other interesting strings in the executable include:
* `BLASTGRAPHICS Build Date : %s ` 

---
## Asset Archive - data0.pkg

Since the data0.pkg format is just simple zip compression, it is very easy to extract and modify the assets, so lets take a look at what it contains, there are 1,207 files so we will group files by their extension in the table below:

Extension | Number of Files | Description
--- | --- | ---
wav | 463 | Waveform audio file, uncompressed sound effects or music
tga | 343 | Targa image file, common raster graphic format supporting alpha channels
bmp | 131 | Bitmap image file (case variant)
ase | 101 | 3DS MAX ASCII EXPORT for the 3D models
rpl | 49 | resource package file?
bad | 32 | Basic Animation Descriptor - plain text files for animations that link a mesh (.ase) with a skeleton (.ase) and a vertex animation (.vat)
bmp | 27 | Bitmap image file, uncompressed raster graphics
mp3 | 15 | Audio file in MPEG Layer-3 format, compressed music or sound effects
lvl | 15 | Level data file in XML format, stores game level layouts
mad | 15 | Material Data - Plain text file setting key value pairs for values such as "color .5 .5 1 .8"
vat | 11 | Vertex Animation in VAT2 format (Linked Vertex Information File ver 2), used for complex mesh animations in games
lang | 2 | Language or localization resource file
txt | 2 | Plain text file, often for logs, documentation, or configs
cfg | 1 | Configuration file, plain text settings

The ASE files confirm that the game's 3d models were creating using 3D Studio Max 3 or 4 back in 2001, but not sure the exact version of 3ds Max (does AsciiExport Version  2.00 narrow it down?).

They show how the 3D artists named their 3ds max scene files:
* beach_boardwalk_sign_nobase.max
* beach_1375_7_00_2001_JC1003_JC_TB.max

It also shows the organised folder structure used during development of the game:
* `G:\Goofy Skateboarding\data\Models\Textures\badge.tga`
* `\\Krome-fs4\data12\Goofy\Goofy Skateboarding\data\Models\Textures\ramp2.tga` - Shared Network drive?
* `\\Krome-fs4\data12\Goofy\Graphics\Screens\S08_Beach\S08_03_BoardWalk\textures\jetty.bmp` - I wonder why screen graphics were kept seperate?

### Level files - .lvl
The level files are plain text XML data which links together all the other files, it is extremely modder friendly, here is an example:
```xml
<LEVEL NAME="Downtown" MESH="riverbend.ase" ENV="Cloud_Blue_env.ASE" MATERIAL="riverbend.mad" ENVROT="0" MUSIC="SUBURB_2.mp3" AMBIENT="ambience_centralpark_01.wav">
  <CLIP NEAR="100.00" FAR="8000.00" FOG="7000.00" COLOR="0.72,0.86,0.85">
  <OBJECTIVES TYPE="SHRED" DATA1="23,7" DATA2="1,70" DATA3="24,7">
  <OBJECTIVES TYPE="AGILITY" DATA1="3,7000" DATA2="4,7" DATA3="5,7" TIME="120">
  <TRIGGER POS="355.37,-3350.55,6692.30" SIZE="100.00,100.00,100.00" TYPE="spawn" ID="0" DATA="0" ENTER="none" EXIT="none">
  <OBJECT POS="4483.87,-3353.96,9730.11" ROT="0.00,0.00,0.00" SCALE="1.00" MESH="coin.ase" TYPE="collectible" UNIQUE="0" ID="1" DATA="0" FLAGS="4" SPEED="1.00">
  <OBJECT POS="7183.09,-3706.17,11404.25" ROT="0.00,-90.00,0.00" SCALE="0.60" MESH="critter_duckling.bad" TYPE="duckling" UNIQUE="0" ID="0" DATA="0" FLAGS="31" SPEED="1.00">
</LEVEL>
```

As far as I know this is a custom format made for this game and not an industry standard.

---
# Championship Surfer (2001)
Championship Surfer is a 2001 game available for Windows, Dreamcast and PS1, the Windows and Dreamcast versions are the **first game credited** as using the **Merkury** engine, with no mention of the engine for the PS1 release. 
However it is presumed some of the code was re-used between the Windows and PS1 games so it is likely that even the PS1 version is using some Merkury engine code.

## PS1 version of Championship Surfer
![PS1 Manual cover of Championship Surfer](https://github.com/user-attachments/assets/14623b40-2a6f-42eb-ae5f-88610faacb53)

The PS1 version of Championship Surfer (**SLUS_012.16**) has no mention of the Merkury engine and it was developed by a **compeltely different set of programmers** at Krome:
* **Tyrone McAuley** - Lead programmer
* **Daniel Sewell**
* **Craig Herring**
* **David Gilligan**

### Assets in the PS1 version
The PS1 version **does not use** the RKV archive format and instead has files seperately on the disc in various PS1 optimized file formats (e.g TIM).

This is common with PS1 games as they all use a standard ISO 9660 filesystem, allowing individual files (textures, models, audio, maps, scripts, etc.) to be stored as separate, accessible files. 

This makes it easy for the game executable to read specific assets directly from the disc and was practical considering memory limits and the way the PS1’s BIOS exposed disc access.

---
## Windows, Dreamcast versions of Championship Surfer (2001)
The Windows and Dreamcast versions of Championship Surfer (2001) is the first game credited as using the **Merkury** engine, with **Tony Ball** being listed as the Merkury engine programmer in the credits.

It is also the first game that uses the RKV archive format (still never found out what it stands for) in both the Dreamcast and Windows versions, see the section below for the format of these archives as they differ from later Merkury engine games that use the same file extension (.rkv).

### Beast98 and HotWaves
Thanks to strings left in the Dreamcast version of the game we know that the main game specific code was in a folder called **beast98**, which was presumably the codename given to the project early on in development. Interestingly they also use an alternative codename which is even cooler **HotWaves** which is a nice nod to Mattel who own the Hot wheels franchise and were also the publisher for this game!

The executable has a few paths left intact which give a hint as to the folder structure:
* C:\Src\beast98\animscript.cpp
* C:\Src\beast98\gamecode\arcade.cpp
* C:\Src\beast98\gamecode\championship.cpp
* C:\Src\beast98\gamecode\credits.cpp
* C:\Src\beast98\gamecode\duck.cpp
* C:\Src\beast98\gamecode\elimination.cpp
* C:\Src\beast98\gamecode\freesurf.cpp
* C:\Src\beast98\gamecode\game.cpp
* C:\Src\beast98\gamecode\mainmenu.cpp
* C:\Src\beast98\gamecode\Replay.cpp
* C:\Src\beast98\gamecode\Rumble.cpp
* C:\Src\beast98\gamecode\rumbleicon.cpp
* C:\Src\beast98\gamecode\settings.cpp
* C:\Src\beast98\gamecode\wavegen.cpp
* C:\Src\beast98\gamecode\surfdude.cpp
* C:\Src\beast98\gamecode\dolphin.cpp
* C:\Src\beast98\gamecode\photoman.cpp
* C:\Src\beast98\gamecode\islandboy.cpp
* C:\Src\beast98\gamecode\diver.cpp
* C:\Src\beast98\gamecode\lifeguard.cpp
* C:\Src\beast98\gamecode\femaleswimmer.cpp
* C:\Src\beast98\gamecode\helicopter.cpp
* C:\Src\beast98\gamecode\seagull.cpp
* C:\Src\beast98\gamecode\shark.cpp
* C:\Src\beast98\gamecode\world.cpp
* C:\Src\beast98\gamecode\TextureMatrix.cpp
* C:\Src\beast98\beast98.cpp

The PC version also used the Beast98 code even although the strings above were stripped from the binary, we know this as there was a `crash.log` file left in the **Surf_PC.rkv** archive:
```markdown
("C:\src\beast98\PCRelease\Hotwaves.exe" -windowed -lang=2 -nomusic)
 > Exception !!
C:\src\beast98\gamecode\game.cpp @ 3055
```

### Frontend Menu Library
A few paths in the dreamcast version hint at there being a menu library for the main screens (frontend) with the following source files:
* C:\src\FrontEnd\Source\KMenuResources.cpp
* C:\src\FrontEnd\Source\KMenuWinner.cpp
* C:\src\FrontEnd\Source\ktile.cpp - contained KTile class
* C:\src\FrontEnd\Source\ktilescreen.cpp - contained KTextureTile, KTextTile and KTextBoxTile
* C:\src\FrontEnd\Source\KMenuCredits.cpp - Credits screen
* C:\src\FrontEnd\Source\KMenuSelectBeach.cpp - Beach Selection screen
* C:\src\FrontEnd\Source\TestGameScoresScreen.cpp
* C:\src\FrontEnd\Source\LanguageScreen.cpp - Language selection screen
* C:\src\FrontEnd\Source\Shine.cpp
* C:\src\FrontEnd\Source\FrontEndTileScreen.cpp - contained KMenuItemTile, KShadowTextBoxTile, KOutlineTextTile


### Standard Platform Library
A few paths in the dreamcast version hint at there being a standard platform library with the following source files:
* C:\src\StdPlatform\DataInputStream.cpp
* C:\src\StdPlatform\FileInputStream.cpp
* C:\src\StdPlatform\IncludeFilterStream.cpp
* C:\src\StdPlatform\StdString.cpp
* C:\src\StdPlatform\StringXlat.cpp
* C:\src\StdPlatform\DirectXConsoleInput.cpp
* C:\src\StdPlatform\StdProfiler.cpp
* C:\src\StdPlatform\FileSystemTOC.cpp
* C:\src\StdPlatform\FileArchive.cpp


### Krome's Dreamcast Blast Graphics (BG) library
Also a few file paths are related to **BG** (possibly named Blast Graphics?) which I believe is the main game engine code which uses DirectX 7 on Dreamcast:
* C:\src\Bg\bg.cpp
* C:\src\Bg\bgsound.cpp
* C:\src\Bg\system.cpp
* C:\src\Bg\animate.cpp
* C:\src\Bg\colormap.cpp
* C:\src\Bg\camera.cpp
* C:\src\Bg\vmu.cpp
* C:\src\Bg\PlayVideo.cpp
* C:\src\Bg\waves.cpp - functions like BG_Wave_Create, very specific to surfing games!
* C:\src\Bg\Rain.cpp
* C:\src\Bg\SimpleObject.cpp - looks like the base object for a bit of Object Oriented Programming in the game engine!
* C:\src\Bg\collisions.cpp - presumably collision detection functions
* C:\src\Bg\bmp.cpp - contains LoadBMP function
* C:\src\Bg\loadvq.cpp - Loads VQ texture files with LoadVQ()

Based on other debug strings from error messages we know that the BG library contained the following functions:
* BG_GetHardware()
* BG_AllocObject()
* BG_FreeObject()
* BG_LoadObject()
* BG_Init()
* BG_PushBkg()
* BG_Exit()
* BG_CreateFont()
* BG_LoadMatProperties()
* BS_AllocSound()
* BG_LoadAnimation() - takes in object, skeleton and vat filenames
* BG_LoadColorMap() - takes in a filename to load
* BG_LoadCameraTrack() - takes in a filename to load
* BG_Wave_Create()
* BG_Wave_LoadAnimation() - loads ASE files
* BG_WaveSetControlPoints()

### Sound engine - CRI Middleware's Sound Factory
The dreamcast version uses **CRI Middleware's Sound Factory** version 1.51 (built in December 1999) for its audio processing, thanks to this information being left in the built executable.

Specifically we know it uses the following builds (all from December 8th 1999):
* **CRI_RNV** - Ver.0.70(DRAGON) Build: Dec 8 1999 12:10:29
* **CRI_VFD** - Ver.0.99 Build: Dec 8 1999 12:10:55
* **SJ** - Ver.5.50 Build: Dec 8 1999 12:11:38
* **mwRna** - Ver.1.20 Build: Dec 8 1999 10:41:29
* **mwSnd(DS)** - Ver.1.20 Build: Dec 8 1999 10:41:37
* **SFD** - Version 1.21 1999-07-22 (SofdecStream)
* MPV Version 1.21 1999-07-22
* MPS Version 1.21 1999-07-22
* ADXENC Ver.1.00 Build:Dec  8 1999 10:48:12
* ADXENC.DLL Ver.1.00 Dec  8 1999


Other notes:
* Uses .vqf textures in dreamcast version


The windows version was also released in a collection called **Crazy Fun Games** by a french company called **fun radio** and **Ubisoft**, but it is currently unknown if it contains any differences or debug symbols present [^5].

## Early RKV Archive format
The RKV archive format differs from the one used in the more modern games such as Star Wars, but this same format was also used in early PS2 games running on the Merkury engine such as Jimmy Neutron: Jet Fusion!

It seems to be the first game that introduced the naming convention for the RKV archives which all have a 2-3 character suffix based on the platform the assets are for:
* **Surf_PC.rkv** - Championship Surfer for PC assets
* **SURF_DCP.RKV** - Championship Surfer for Dreamcast assets
* **DATA_P2.RKV** - Jimmy Neutron for PS2 assets
* **data_pp.rkv** - Star Wars: The Force Unleashed for PSP assets

### RKV Version 0 QuickBMS extract script
Since there is already both an `RKV.bms` and `RKV2.bms` script to extract RKV files with the **QuickBMS** tool, I have decided to call the BMS script to extract the early version of the RKV format **RKV0.bms**, here is a version that works with **Surf_PC.rkv** and some early PS2 games:

```python
# QuickBMS: Old version of Merkury engine games such as Championship Surfing and PS2 games like Jimmy Neutron
get FILESIZE asize
if FILESIZE < 8
    print "File too small"
    cleanexit
endif

goto -8
get NUM_FILES long
get NUM_DIRS long

# directories block (NUM_DIRS * 256) ends at EOF-8
math DIRS_SIZE = NUM_DIRS
math DIRS_SIZE *= 256
math DIRS_START = FILESIZE
math DIRS_START -= 8
math DIRS_START -= DIRS_SIZE

print "Number of directories: %NUM_DIRS%"
print "Number of file entries: %NUM_FILES%"
print "Reading %DIRS_SIZE% bytes of directory entries starting at 0x%DIRS_START|X%"

# read and store dir names by index
goto DIRS_START
for i = 0 < NUM_DIRS
    getdstring DIR_NAME 256
    print "DIR[%i%]: %DIR_NAME%"
    putarray 0 i DIR_NAME
next i

# files block (NUM_FILES * 64) is before directories
math FILES_SIZE = NUM_FILES
math FILES_SIZE *= 64
math FILES_START = DIRS_START
math FILES_START -= FILES_SIZE

print "Reading %FILES_SIZE% bytes of file entries starting at 0x%FILES_START|X%"

goto FILES_START
for i = 0 < NUM_FILES
    getdstring FILE_NAME 32
    get FOLDER_ID  long
    get FILE_SIZE  long
    get FILE_ZERO  long
    get FILE_OFFSET long
    get FILE_META3 long
    getdstring FILE_RESERVED 12

    # resolve folder name if valid
    set MATCH_DIR string ""
    if FOLDER_ID >= 0
        if FOLDER_ID < NUM_DIRS
            getarray MATCH_DIR 0 FOLDER_ID
        endif
    endif

    # build output path
    strlen DIRLEN MATCH_DIR
    set FULL_NAME string FILE_NAME
    if DIRLEN > 0
        set FULL_NAME string MATCH_DIR
        string FULL_NAME + /
        string FULL_NAME + FILE_NAME
    endif

    print "FILE[%i%] name: %FULL_NAME|S% is located at %FILE_OFFSET|X% with size: %FILE_SIZE|X%"

    if FILE_ZERO != 0
        print "FILE[%i%] Normally this is zero: %FILE_ZERO|X%"
    endif

    strlen RLEN FILE_RESERVED
    if RLEN != 0
        # Not Sure what this data is (CRC? Timestamps?)
        # print "FILE[%i%] reserved: %FILE_RESERVED|X%"
    endif

    # extract
    if FILE_OFFSET != -1
      log FULL_NAME FILE_OFFSET FILE_SIZE
    endif
next i
```


---
# The Adventures of Jimmy Neutron: Jet Fusion (2003)
The 2003 game **The Adventures of Jimmy Neutron: Jet Fusion** is confirmed to use the Merkury engine (it uses RKV archives).

## Prototype version for PS2
<img width="1752" height="1240" alt="image" src="https://github.com/user-attachments/assets/10884f1d-86d5-4f4f-b2a6-81ff1b532452" />

A Demo of the game was distributed in the Chirstmas 2003 issue (issue number 41) of the Official Playstation 2 magazine in the UK, the demo disc has the code **SCED_51536**.

It contained a **DATA_P2.RKV** (201.3MB) RKV archive containing all the game assets and the main game executable **JIMMY.ELF** (3.4MB).

---
# Star Wars Lightsaber Duels for the Wii
![Interview with lead programmer Chris Lacey at Krome](https://github.com/user-attachments/assets/06fb402d-f9e3-49b1-9c07-94afc2247a53)
There is a video on youtube of a quick behind the scenes route of the Krome offices back in 2008 where they interview the lead programmer of Star Wars Lightsaber Duels **Chris Lacey** (The Shak EP454)?


---
# Merkury 3 - Xbox 360, PS3 and Wii

Lead Environment Artist at Krome Studios **Brent Waller** posted a video showing off the new Merkury 3 engine in action which was built for the Xbox 360, Playstation 3 and Wii Title: **The Legend of the Guardians: The Owls of Ga'hoole**. 

To quote Brent Waller [^2]:
> The engine has such features as large scale (16 square kilometres) terrain rendering and LODing, grass and forest LODing and placement tools and real-time day and night cycles.

You can watch the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/s-s-kXb5Yqs?si=bz95c4x2tUtr7dIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---
# References
[^1]: Sunny Garcia Surfing PS2 Manual
[^2]: [Merkury 3 Engine Showcase - YouTube](https://www.youtube.com/watch?v=s-s-kXb5Yqs)
[^3]: Star Wars: The Force Unleashed PS2 Manual
[^4]: [Chris Lacy of Krome Studios talks to PGC! - Interview - Nintendo World Report](https://www.nintendoworldreport.com/interview/2083/chris-lacy-of-krome-studios-talks-to-pgc)
[^5]: [Crazy Fun Games (2001) - MobyGames](https://www.mobygames.com/game/73374/crazy-fun-games/)
[^6]: [PC Powerplay Issue 062 - July 2001 - Next Publishing Pty Ltd](https://archive.org/details/PCPowerplay-062-2001-07/page/n57/mode/2up?q=Krome+Studios)
[^7]: [Kat Burgler on the official kromestudios.com website fetched on Dec 12th 2000](https://web.archive.org/web/20001212222800/http://www.kromestudios.com/games_02.htm)
[^8]: [Merkury  on the official kromestudios.com website](https://web.archive.org/web/20010303010913/http://www.kromestudios.com/merkury.htm)
[^9]: [RGB Classic Games - Company info for Gee Whiz! Entertainment](https://www.classicdosgames.com/company/geewhiz.html)
