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

## Introduction
The **Merkury** game engine is a proprietary game engine developed by **Krome Studios** and is known to run on PS2, PSP and Wii. 
It is most famous for their custom versions of **Star Wars: The Force Unleashed** for the less powerful consoles, as the LucasArts version for Xbox 360 and PS3 was too power hungry to run on the PS2, PSP and Wii.
There were still many gamers who had these less powerful consoles and so was a lucrative market to tap into and thus a custom version of the game was born on an existing engine built by Krome Studios for past games: **Merkury**.

## Known Merkury Engine games
Based on our analysis of the game files, the games we are confident are definetly using the Merkury engine are the following:
* **Star Wars: The Force Unleashed** - only the PS2, PSP and Wii versions of the game
* **Star Wars: The Clone Wars - Republic Heroes**

Although not confirmed using game file analysis it is claimed that the following are also using the Merkury Engine:
* **Star Wars: The Force Unleashed** - Switch version (apparently its a port of the wii version rather than the Xbox 360/PS3 Ronin engine versions)

---
## Possible Merkury engine games
Since we don't yet know all the games that used thew Merkury engine, here is a table of the major games developed by Krome Studios, spanning various platforms since their founding:

| Game Title                                         | Platform(s)                                             | Year         |
|----------------------------------------------------|---------------------------------------------------------|--------------|
| Mike Stewart's Pro Bodyboarding                    | Windows                                                | 1999         |
| Championship Surfer                                | Windows, PlayStation, Dreamcast                        | 2000         |
| Barbie Beach Vacation                              | Windows                                                | 2001         |
| Disney's Extremely Goofy Skateboarding             | Windows                                                | 2001         |
| Sunny Garcia Surfing                               | PlayStation 2                                          | 2001         |
| Barbie: Sparkling Ice Show                         | Windows                                                | 2002         |
| Ty the Tasmanian Tiger                             | PlayStation 2, Xbox, GameCube, Windows, HD Remasters   | 2002         |
| The Adventures of Jimmy Neutron: Jet Fusion        | PlayStation 2, GameCube                                | 2003         |
| Ty the Tasmanian Tiger 2: Bush Rescue              | PlayStation 2, Xbox, GameCube, Windows, HD Remasters   | 2004         |
| King Arthur                                        | PlayStation 2, Xbox, GameCube                          | 2004         |
| Ty the Tasmanian Tiger 3: Night of the Quinkan     | PlayStation 2, Xbox, GameCube, Windows, HD Remasters   | 2005         |
| The Legend of Spyro: A New Beginning               | PS2, Xbox, GameCube, GBA                               | 2006         |
| The Legend of Spyro: The Eternal Night             | PS2, Wii                                               | 2007         |
| Viva Piñata: Party Animals                         | Xbox 360                                               | 2007         |
| Hellboy: The Science of Evil                       | PS3, Xbox 360, PSP                                     | 2008         |
| Star Wars: The Force Unleashed                     | PS2, PSP, Wii, Nintendo Switch                         | 2008, 2022   |
| Star Wars: The Clone Wars – Lightsaber Duels       | Wii                                                    | 2008         |
| Scene It? Box Office Smash                         | Xbox 360                                               | 2008         |
| Star Wars: The Clone Wars – Republic Heroes        | PS3, Xbox 360, Wii, PS2, PSP, Windows                  | 2009         |
| Transformers: Revenge of the Fallen                | PS2, Wii                                               | 2009         |
| Game Room                                          | Xbox 360, Windows, Windows Phone 7                     | 2010         |
| Blade Kitten                                       | PlayStation 3, Xbox 360, Windows                       | 2010, 2012   |
| Legend of the Guardians: The Owls of Ga'Hoole      | Xbox 360, PS3, Wii                                     | 2010         |
| Full House Poker                                   | Xbox 360, Windows Phone 7                              | 2011         |
| Backyard Sports Basketball 2015                    | iOS, Android, Windows                                  | 2015         |
| Ty the Tasmanian Tiger 4                           | Windows                                                | 2015         |
| Ty the Tasmanian Tiger HD                          | Xbox One, Series X/S, Switch, PS4, Windows             | 2016, 2020   |
| Ty the Tasmanian Tiger 2: Bush Rescue HD           | Xbox One, Series X/S, Switch, PS4, Windows             | 2017, 2021   |
| Ty the Tasmanian Tiger 3: Night of the Quinkan HD  | Windows                                                | 2018         |
| The Bard's Tale Trilogy                            | Windows, Xbox One                                      | 2018, 2019   |
| Wasteland Remastered                               | Windows, Xbox One                                      | 2020         |
| Ty the Tasmanian Tiger 4: Bush Rescue Returns      | Nintendo Switch                                        | 2023         |
| Monster Dash                                       | iOS, Android                                           | 2016/ongoing |
| Gizmotablet (Kid World, Verizon)                   | Android Tablet (EdTech)                                | 2018         |

---
# Star Wars: The Force Unleashed (PS2, PSP and Wii Version)
The PS2, PSP and Wii versions of "Star Wars: The Force Unleashed" are not build by **LucasArts** like the Xbox 360 and PS3 versions of the same game and thus are not using the proprietary LucasArts **Ronin** engine. 
Instead they were developed by **Krome Studios**, a completely seperate studio known for action-platformers and movie tie-in games.

Krome developed these versions with a separate engine tailored for the older hardware and with unique content and gameplay elements. It is unlikely that ILM/LucasArts would allow their Zeno/Zed software to be used by a third party developer, so we presume these versions were not made using Zed and any assets were either sent over manually to the studio or made custom by **Krome**.

The physics engine for these versions of the game use the **Open Dynamics Engine** (ODE) rather than **Havok** (which was used in PS3/Xbox 360 versions) due to the performance constraints of the PS2, PSP and Wii.

## Files in the PSP Version (UMD Disc contents)
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
The game uses RKV version 2 archive files, these can be exteacted with [Luigi Auriemma's QuickBMS](https://aluigi.altervista.org/quickbms_list.php) and the [Rkv2 BMS script](https://aluigi.altervista.org/bms/rkv2.bms).

### Language Sound Bank Files (LngEN_pp.rkv and LngFR_pp.rkv)
**LngEN_pp.rkv** and **LngFR_pp.rkv** contain sound bank files (.sbk) for their respective languages, presumably all the voiced dialog in the game is contained in these and they have the file name format like **cscc001_01_00_p01dven.sbk**.

Likely naming format breakdown:
* **cscg001**: Likely an ID for a cutscene, always prefixed with "cs" presumably standing for cutscene.
* **01_00**: Major/minor numbers w.g for scene/area, event, sequence, or version
* **p01** — Possibly part 1/phase 1 or referencing a specific voice/group.
* **dv** — Character anchors e.g dv is Darth Vader
* **en** — Audio Language (Known values: en, fr)

Possible cutscene codes are presented in the table below:

| Cutscene ID                      | Likely scene                           | Rationale (where applicable)   |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **csdv001**                 | Darth Vader prologue (Kashyyyk)              | “DV” = Darth Vader; prologue is a Vader mission.|
| **cska2xx**                 | Kashyyyk                                     | “ka” matches planet.                      |
| **csfe1xx/2xx/20x/205**     | Felucia                                      | “fe” = Felucia.                          |
| **csrp1xx/2xx**             | Raxus Prime                                  | “rp” = Raxus Prime.                       |
| **csjt1xx/2xx**             | Jedi Temple (trials)                         | “jt” = Jedi Temple.                       |
| **csmu001**                 | Mustafar (historic mission)                  | “mu” = Mustafar.                          |
| **csns201**                 | Nar Shaddaa                                  | “ns” = Nar Shaddaa.                       |
| **cstc001/101**             | TIE Construction Facility                    | “tc” = TIE Construction; early game mission.                                                                              |
| **csds201**                 | The Dune Sea (Tatooine historic mission)     | “ds” = Dune Sea; appears as historic mission.                                                              |
| **cscc001/201/202/204/205** | Carbonite Chamber (Bespin historic mission)  | “cc” = Carbonite Chamber.|
| **cscg001**                 | Geonosis Colosseum (historic mission)        | “cg” = Colosseum Geonosis. |
| **csdq001**                 | Dooku’s Quarters (Geonosis historic mission) | “dq” = Dooku’s Quarters.  |
| **csvo001**                 | Vader’s Observatory/Vessel?                  | “vo” ambiguous; likely Vader-related interstitial.                                                                        |
| **csvf101/102/104**         | Vader’s Flagship/Facility?                   | “vf” ambiguous; Vader-adjacent (briefings/bridges).                                                                       |
| **csqg001**                 | ? Geonosis-related (Qui-Gon is unlikely)     | “qg” unclear; could be internal codename. |
| **cspl001**                 | ? Palace (Jabba’s)                           | “pl” plausible “(Jabba’s) Palace” historic.                                                                               |
| **csps001**                 | ? Palace/Cantina sequence                    | “ps” ambiguous; may be Tatooine set-piece.|
| **csrg001**                 | ? Raxus (Gateway)/Royal Guard                | “rg” unclear; could be encounter beat.    |
| **csrh201**                 | ? Raxus H— (Hub/Hangar/Holo)                 | “rh” unclear; grouped with Raxus arc number. |
| **csrs001**                 | ? Raxus Scrap (yard)                         | “rs” plausible for “scrapyard”.           |
| **csfd001**                 | ? Felucia derivative                         | “fd” could be Felucia boss/dialogue beat. |
| **csil101**                 | ? Imperial Laboratory/Library                | “il” ambiguous; story contains Imperial facilities. |
| **csos001**                 | ? Ossus                                      | “os” could be Ossus (Jedi world); unconfirmed. |



#### SBK File Format
After some initial analysis it seems the .SBK (header: SB01) files contained in the RKV archives are a small custom container that wraps a mono **PSX-ADPCM** stream. The container adds a fixed header (magic/version/size/name/flags) and stores raw ADPCM frames **without a VAGp/RIFF wrapper**.

Here are the header Metadata fields, numbers are all 32bit Little Endian:
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


