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
## Origin of the engine
The creation of Merkury Engine is credited to the following programmers in the manual for the 2001 PS2 game **Sunny Garcia Surfing** [^1]: 
* **James Podesta** - Also credited as Lead programmer on the game has been at Krome Studios since at least **Championship Surfer** back in 2000 and still there in 2023!
* **Dave Pevreal** - Also credited as Lead engine programmer on the Merkury engine version of **Star Wars: The Force Unleashed** [^3]
* **Tony Ball** - Also credited as engine programmer on the Merkury engine version of **Star Wars: The Force Unleashed** [^3]

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
| Championship Surfer  | Windows, PlayStation, Dreamcast| 2000 |
| Barbie Beach Vacation| Windows | 2001 |
| Disney's Extremely Goofy Skateboarding   | Windows | 2001 |
| Sunny Garcia Surfing | PlayStation 2   | 2001 | Yes
| Barbie: Sparkling Ice Show| Windows | 2002 |
| Ty the Tasmanian Tiger | PS2, Xbox, GameCube, Windows, HD Remasters | 2002 |
| The Adventures of Jimmy Neutron: Jet Fusion   | PS2, GameCube | 2003 | Yes
| Ty the Tasmanian Tiger 2: Bush Rescue | PS2, Xbox, GameCube, Windows, HD Remasters | 2004 |
| King Arthur| PS2, Xbox, GameCube  | 2004 |
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
| Blade Kitten | PS3, Xbox 360, Windows | 2010, 2012 |
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
# The Adventures of Jimmy Neutron: Jet Fusion
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

To quote Brent [^2]:
> The engine has such features as large scale (16 square kilometres) terrain rendering and LODing, grass and forest LODing and placement tools and real-time day and night cycles.

You can watch the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/s-s-kXb5Yqs?si=bz95c4x2tUtr7dIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# References
[^1]: Sunny Garcia Surfing PS2 Manual
[^2]: [Merkury 3 Engine Showcase - YouTube](https://www.youtube.com/watch?v=s-s-kXb5Yqs)
[^3]: Star Wars: The Force Unleashed PS2 Manual
[^4]: [Chris Lacy of Krome Studios talks to PGC! - Interview - Nintendo World Report](https://www.nintendoworldreport.com/interview/2083/chris-lacy-of-krome-studios-talks-to-pgc)
