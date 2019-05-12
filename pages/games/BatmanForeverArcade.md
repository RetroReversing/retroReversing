---
layout: post
tags: 
- sega
- segasaturn
- ps1
- games
- projects
title: Batman Forever - The Arcade Game (1996)
thumbnail: /public/consoles/Sega Saturn.png
image: /public/consoles/Sega Saturn.png
permalink: /batman-forever
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /segasaturn
  - name: Batman Forever - The Arcade Game (1996)
    url: #
recommend:
- segasaturn
- games
editlink: /games/BatmanForeverArcade.md
---

As the name suggests Batman Forever is originally an Arcade Game that got ported to MSDOS, the Playstation 1 and Sega Saturn by Iguana Entertainment (Acclaim Published).

The original arcade release was for the `ST-V` (Sega Titan Video Game System) arcade hardware which is what would eventually become the foundation of the32x/Sega Saturn hardware [^2].

This article will cover interesting finding from both the original arcade version and the various home ports.

# Game Details
Before getting into the technical side of reverse engineering we will cover a few important game details so that its easier to understand the files that we are reverse engineering.

## Enemies
* Guesser Robot
* Feather Thug
* Tassel Boss
* Spice
* Sugar
* Two Face Thugs
* Voice from the Sky
* Sabouter
* Blade
* Zapper

---
# Source files
From the Sega Saturn version of the game we can find a few full source file paths:
* "C:\\BATMAN\\GAME\\ENEMYAI.C"
* "C:\\BATMAN\\GAME\\EPROM\\ATTRACT.S"
* "levels/hotel.c"
* "/batman/game/enemy.h"
* "/batman/game/enemyai.h"
* "/batman/game/game.h"
* "/batman/game/particle.h"
* "/batman/game/script.h"
* "/batman/game/objects.h"
* "/batman/game/..\\gfx\\particle\\global.h",
* "/batman/game/..\\gfx\\particle\\level1a.h"



<div class="folder-browser">
    <ul>
        <li>C:\
            <ul>
                <li id="child_node_1">Batman
                    <ul>
                        <li>Game
                            <ul>
                                <li>Levels
                                    <ul>
                                        <li>hotel.c</li>
                                    </ul>
                                </li>
                                <li>EPROM
                                    <ul>
                                        <li>attract.s</li>
                                    </ul>
                                </li>
                                <li>enemyai.c</li>
                                <li>enemyai.h</li>
                                <li>enemy.h</li>
                                <li>particle.h</li>
                                <li>script.h</li>
                                <li>objects.h</li>
                            </ul>
                        </li>
                        <li>Gfx
                            <ul>
                                <li>Particle
                                    <ul>
                                        <li>global.h</li>
                                        <li>level1a.h</li>
                                        <li>enemy.h</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
{% include folder-browser.html %}

# Object Files (Compiled C or ASM)
From the Sega Saturn port of the game there are a few references to the original names for some of the compiled object files:

Name | Notes
---|---
3dbat.obj | 
enemy.obj | 
enemyai.obj | 
eprom\\anims1.obj | 
eprom\\anims2.obj | 
eprom\\anims3.obj | 
eprom\\anims4.obj | 
eprom\\anims5.obj | 
eprom\\anims6.obj | 
eprom\\anims7.obj | 
levels\\alleya.obj | 
levels\\alleyb.obj | 
levels\\batcave.obj | 
levels\\hotel.obj | 
levels\\level1a.obj | 
levels\\level1b.obj | 
levels\\level1c.obj | 
levels\\level1d.obj | 
levels\\lowcave.obj | 
levels\\lsubway.obj | 
levels\\riddcont.obj | 
levels\\twoface.obj | 
levels\\usubway.obj | 
sound.obj | 

---
# Sega Saturn Libraries
Also from the Sega Saturn version of the game we can see what libraries were linked into the main executable:
* c:\\saturn\\lib\\libgcc.lib
* c:\\saturn\\lib\\libc.lib
* c:\\igsatlib\\libiguan.lib
* eprom\\libeprom.lib
* c:\\saturn\\lib\\libsn.lib
* c:\\saturn\\segalib\\lib\\libgfs.lib
* c:\\saturn\\segalib\\lib\\libcdc.lib
* c:\\saturn\\segalib\\lib\\libdma.lib
* c:\\saturn\\segalib\\lib\\libcsh.lib
* c:\\saturn\\segalib\\lib\\libsnd.lib


## libIguan.lib (Iguana Entertainment custom library)
The sega saturn version of the game has a reference to a library file created by Iguana Entertainment (the developers of the port) called `c:\\igsatlib\\libiguan.lib`, it has the following symbols:

Symbol | Notes
---|---
  __SinCosP_D |
 byteMemcpy |
 DefaultHBLInterrupt |
 DMAListPtrs |
 EndOfDrawInterrupt |
 FreeDMAListPtrs |
 FuckTheSlavedd |
 ie_AddBitmap |
 ie_AddDeComp |
 ie_AddGlobalParticleBitmap |
 ie_AddGouraudPolygon |
 ie_AddGouraudSprite |
 ie_AddGouraudTexturePolygon |
 ie_AddLevelBitmap |
 ie_AddLevelParticleBitmap |
 ie_AddLinep |
 ie_AddNormalSprite |
 ie_AddPolygon |
 ie_AddPolyline |
 ie_AddScaleSprite |
 ie_AddSprite |
 ie_AddTexturePolygon |
 ie_AddToFrontPolygon_B |
 ie_AddToFrontScaleSprite |
 ie_AddToFrontTexturePolygon |
 ie_AddToList |
 ie_AllocateBitmap |
 ie_AppendNode |
 ie_ChecksumBattery |
 ie_ClearVDP1CmdLists |
 ie_CopyDMA |
 ie_CopyVDP1CmdListh | 
 ie_CopyVDP1CmdListhie_AddLevelBitmap |
 ie_DecodePad |
 ie_DeleteFromList |
 ie_EmptyDMAList |
 ie_FlushDeCompList |
 ie_FlushDMAList |
 ie_InitHardware |
 ie_InitializeBitmapList |
 ie_InitializeBookKeepingVars |
 ie_InitializeDeComp |
 ie_InitializeDMA |
 ie_InitializeEngine |
 ie_InitializeList |
 ie_InitInterrupts |
 ie_InitSound |
 ie_InitVDP1CmdList |
 ie_InsertAfter |
 ie_InsertBeforeiddH |
 ie_LoadFromBattery |
 ie_ParallelOut |
 ie_PlaySound |
 ie_PrependNode |
 ie_Random |
 ie_RandomRange |
 ie_RandomRange32 |
 ie_RandomUnsignedRange |
 ie_ReadCreditStatus |
 ie_RemoveNode |
 ie_RequestStart5 |
 ie_ResetSystemClipping |
 ie_ResetUserClipping |
 ie_ReturnPlayerCreditStatusl_B |
 ie_SaveToBattery |
 ie_SetBatteryChecksumB |
 ie_SetStartContinue |
 ie_SetSystemClippingob |
 ie_SetupSlaveList |
 ie_SetUser |
 ie_UpdateBookKeeping |
 ie_WaitVBL |
 InitDMA |
 InitializeListd |
 LongCopyobL |
 longMemcpy |
 ProductAP_ |
 SetupHBL |
 SlaveDecomp |
 SMPA_SwInit |
 uncrunchtbl |
 UpdatePlayerBookKeepingz |
 VBLInInterrupt | V-Blank Interrupt
 VBLInUserFunction |
 VBLOutInterruptAP_ |
 VBLOutUserFunctiond |
 wordMemcpy |
 ie_DecodeRLE |


# Game Programmers
The list of programmers credited for both the Playstaion and Saturn port of Batman is quite short:
* Carl Wade (Lead Programmer & Tools Programmer)
* Stephen Broumley (Lead Programmer & Tools Programmer)
* Craig Galley (Tools Programmer)
* David Crummack (Presentation)
* Richard Cowie (Riddler Control Room)

Sadly Carl Wade passed away in 2011 at the young age of 40, a fond memory of him by his friend and co-worker Stephen Broumley was a function he added to batman called `TheWholeKitAndCaboodle` when the player completed the game [^1]. 

It just goes to show the importance of preserving the development of these games, just like all art it is an outlet for the creators to show off their unique personalities and humour.


# PS1 Version
The PS1 version has no references to "PSYQ" at all and all the file extensions are completely different, so it looks like a rewrite of the game rather than a port.

The main game executable `SLES_005.25` contains **318** functions when disassembling.

---
# MSDos Version
Contains a few different executables:
* `BM1.EXE` (**2677** functions) - Main game?
* `DOS4GW.EXE` - DOS memory extender 
* `FRONTEND.EXE` - Batman Menu? (**780** functions)
* `I.EXE` - Game Installer

Note for FrontEnd.exe you need to set IDA Pro to MS-DOS executable (Not the default LinearExecutable and Pentium 4 processor). But for BM1.EXE stick to LinearExecutable.

---
# References
[^1]: [Gamasutra - Obituary: Game Programming Veteran Carl Wade](https://www.gamasutra.com/view/news/128680/Obituary_Game_Programming_Veteran_Carl_Wade.php)
[^2]: [Batman Forever sega st-v cart. by Acclaim Coin-Operated Ent., Inc. (1996)](https://www.arcade-history.com/?n=batman-forever&page=detail&id=191)
[^3]: [(219) PSX Longplay [340] Batman Forever The Arcade Game - YouTube](https://www.youtube.com/watch?v=LJvrHS-kKZU)
