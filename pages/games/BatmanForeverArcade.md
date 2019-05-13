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

<div class="folder-browser2" markdown="1">
* C:\
    * Batman
        * Game
            * Levels
        * Other
</div>

<div class="folder-browser2">
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
<li>libeprom.lib</li>
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
* eprom\\libeprom.lib <- This looks like a custom library for this game based on the eprom folder above
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

---
# Sega Saturn Memory Symbols


Address | Symbol | Notes
---|---|---
060FC770 | FEATHER2_Stats | 
060FC7CC | FEATHER2_AIScript | 
060FC7F8 | FEATHER2_InfoTable | 
060FC808 | FEATHER3_ComboSet1 | 
060FC818 | FEATHER3_ComboSet2 | 
060FC828 | FEATHER3_ComboSet3 | 
060FC838 | FEATHER3_ComboSet4 | 
060FC848 | FEATHER3_ComboSet5 | 
060FC858 | FEATHER3_ComboSet6 | 
060FC868 | FEATHER3_ComboSet7 | 
060FC878 | FEATHER3_Stats | 
060FC8D4 | FEATHER3_AIScript | 
060FC928 | FEATHER3_InfoTable | 
060FC938 | FeatherBoundBoxes | 
060FC954 | FeatherModeTable | 
060FCC94 | GuesserBitList | 
060FCD44 | ExplodeGuesserOffsetScript | 
060FCD78 | GuesserHeadBox | 
060FD014 | FeatherAngles | 
060FD02C | FeatherAttackBox | 
060F8??? | SabSetupPUNCHA | 
060F871E | SabSetupPUNCHB | 
060F8728 | SugarSetupEXITKISS | 
060F8728 | SabCodePUNCH | 
060F8732 | SugarCodeEXITKISS | 
060F873C | TassleHitPlayer | 
060F8750 | SugarHitPlayer | 
060F875C | SabSetupTHROWBOMBWAIT | 
060F876C | TwoFaceSetupCOMBO | 
060F87C8 | TwoFaceEvilSetupSHOOTGUN | 
060F87E4 | SabCodeTHROWBOMBWAIT | 
060F880C | SabSetupTHROWBOMB | 
060F8838 | SabCodeTHROWBOMB | 
060F883C | TwoFaceEvilCodeSHOOTGUN | 
060F88E8 | TwoFaceEvilSetupEXITSHOOTGUN | 
060F88F2 | TwoFaceEvilCodeEXITSHOOTGUN | 
060F890C | EnemyFire_DrawLips | 
060F8910 | TwoFaceEvilSetupVERTKNIFESLASH | 
060F8924 | EnemyFire_UpdateLips | 
060F8940 | TwoFaceEvilCodeVERTKNIFESLASH | 
060F89BC | TASSLE_C1_PunchA | 
060F89C6 | TASSLE_C1_PunchB | 
060F89D0 | TASSLE_C1_KickA | 
060F89D8 | SabSetupPLACEBOMB | 
060F89DA | TASSLE_C1_JumpKick | 
060F89E4 | TASSLE_C1_SpinKick | 
060F89EE | TASSLE_C2_DoublePunch | 
060F89F8 | TASSLE_C2_PunchAThenB | 
060F8A04 | TASSLE_C2_DoubleKick | 
060F8A04 | SabCodePLACEBOMB | 
060F8A0E | TASSLE_C2_KickAndSpin | 
060F8A1A | TASSLE_C3_DPunchSpinKick | 
060F8A26 | TASSLE_C3_DPunchAndKick | 
060F8A32 | TASSLE_C3_DKickSpin | 
060F8A40 | TASSLE_C3_DKickJump | 
060F8A4E | TASSLE_C3_JagoJump | 
060F8A54 | TwoFaceEvilSetupHORIZKNIFESLASH | 
060F8A5C | TASSLE_C4_DDPunch | 
060F8A68 | TASSLE_C4_PunchEnd | 
060F8A76 | TASSLE_C4_SpinKicks | 
060F8A84 | TwoFaceEvilCodeHORIZKNIFESLASH | 
060F8A86 | TASSLE_C4_JumpKickEnd | 
060F8A96 | TASSLE_C5_SpinPunchEnd | 
060F8AA4 | TASSLE_C5_JumpKickEnd | 
060F8AB6 | TASSLE_C6_MadPunch | 
060F8ACA | TASSLE_C6_SpinKicksCity | 
060F8ADA | TASSLE_C10_NeillsCombo | 
060F8AF2 | TASSLE_SFX_BatmanBlockRetal | 
060F8B04 | TASSLE_SFX_RobinBlockRetal | 
060F8B04 | SabSetupTRIPLEROUNDHOUSE | 
060F8B16 | TASSLE_SFX_BatmanTaunt | 
060F8B30 | SabCodeTRIPLEROUNDHOUSE | 
060F8B34 | TASSLE_SFX_RobinTaunt | 
060F8B52 | TASSLE_SFX_EndOfBeingComboedByBatman | 
060F8B6A | TASSLE_SFX_EndOfBeingComboedByRobin | 
060F8B82 | TASSLE_SFX_EndOfComboingPlayer | 
060F8B94 | Tassle1FxPalette | 
060F8B98 | TwoFaceGoodSetupDOUBLEGUNSHOOT | 
060F8BA4 | Tassle2FxPalette | 
060F8BB4 | TassleSetupTable | 
060F8BE8 | TASSLE_Combo1 | 
060F8BF6 | TASSLE_Combo2 | 
060F8C0C | TwoFaceGoodCodeDOUBLEGUNSHOOT | 
060F8C0C | TASSLE_Combo3 | 
060F8C26 | TASSLE_Combo4 | 
060F8C3E | TASSLE_Combo5 | 
060F8C5C | TASSLE_ComboSet1 | 
060F8C68 | SabHitPlayer | 
060F8C6C | TASSLE_ComboSet2 | 
060F8C7C | TASSLE_ComboSet3 | 
060F8C8C | TASSLE_ComboSet4 | 
060F8C9C | TASSLE_ComboSet5 | 
060F8CA8 | EnemyFire_LipsHitPlayer | 
060F8CAC | TASSLE1_Stats | 
060F8CB8 | TwoFaceGoodSetupEXITDOUBLEGUNSHOOT | 
060F8CC2 | TwoFaceGoodCodeEXITDOUBLEGUNSHOOT | 
060F8CE0 | TwoFaceGoodSetupTHROWKNIFE | 
060F8D08 | TASSLE1_AIScript | 
060F8D34 | TwoFaceGoodCodeTHROWKNIFE | 
060F8D50 | StartLips | 
060F8D60 | TASSLE1_InfoTable | 
060F8D70 | TASSLE2_Combo1 | 
060F8D7E | TASSLE2_Combo2 | 
060F8D94 | TASSLE2_Combo3 | 
060F8DAE | TASSLE2_Combo4 | 
060F8DB4 | TwoFaceGoodSetupKNIFELUNGE | 
060F8DC6 | TASSLE2_Combo5 | 
060F8DE4 | TwoFaceGoodCodeKNIFELUNGE | 
060F8DE4 | TASSLE2_ComboSet1 | 
060F8DF4 | TASSLE2_ComboSet2 | 
060F8E04 | TASSLE2_ComboSet3 | 
060F8E14 | TASSLE2_ComboSet4 | 
060F8E24 | TASSLE2_ComboSet5 | 
060F8E34 | TASSLE2_Stats | 
060F8E74 | SAB_C1_PunchAndRoundHouse | 
060F8E90 | TASSLE2_AIScript | 
060F8E90 | SAB_C1_PunchA | 
060F8E9A | SAB_C1_PunchB | 
060F8EA4 | SAB_C1_ThrowBomb | 
060F8EAE | SAB_C1_PlaceBomb | 
060F8EB8 | SAB_C1_TripleRoundHouse | 
060F8EC2 | SAB_C2_Punches | 
060F8ECE | SAB_C3_Punches | 
060F8EDC | SAB_C4_Punches | 
060F8EE8 | TASSLE2_InfoTable | 
060F8EEC | SAB_C5_Punches | 
060F8EF8 | TwoFaceHitPlayer | 
060F8EF8 | TassleBoundBoxes | 
060F8EFE | SAB_C6_Punches | 
060F8F12 | SAB_SFX_BlockRetal | 
060F8F14 | TassleModeTable | 
060F8F2C | Sab1FxPalette | 
060F8F3C | Sab2FxPalette | 
060F8F4C | Sab3FxPalette | 
060F8F5C | SabSetupTable | 
060F8F60 | SugarBlkPrpFxPalette | 
060F8F70 | SugarBlkRdPrpFxPalette | 
060F8F80 | SugarBluBlkFxPalette | 
060F8F90 | SugarChrmPrpFxPalette | 
060F8F90 | SAB1_ComboSet2 | 
060F8FA0 | SugarGrnYloFxPalette | 
060F8FA0 | SAB1_ComboSet3 | 
060F8FB0 | SugarRedBlkFxPalette | 
060F8FB0 | SAB1_ComboSet4 | 
060F8FC0 | SugarUVFxPalette | 
060F8FC0 | SAB1_ComboSet9 | 
060F8FD0 | SugarWhtRedFxPalette | 
060F8FD0 | SAB1_Stats | 
060F8FE0 | NewSugarFxPalette | 
060F8FF0 | SUGAR_C1_SingleSlap | 
060F8FFE | SUGAR_C1_MultiSlap | 
060F900C | SUGAR_C1_SpinKick | 
060F901C | SUGAR_C1_Mace | 
060F9028 | SUGAR_C1_Kiss | 
060F902C | SAB1_AIScript | 
060F9042 | SUGAR_C1_FastKiss | 
060F905A | SUGAR_SFX_BatmanBlockRetal | 
060F9060 | SAB1_InfoTable | 
060F906C | SUGAR_SFX_RobinBlockRetal | 
060F9070 | SAB2_ComboSet1 | 
060F907E | SUGAR_SFX_BatmanTaunt | 
060F9080 | SAB2_ComboSet3 | 
060F908C | SetupBazookaMissile | 
060F9090 | SAB2_ComboSet4 | 
060F9096 | SUGAR_SFX_RobinTaunt | 
060F9098 | BazookaMissileCodeFIRE | 
060F90A0 | SAB2_ComboSet9 | 
060F90AE | SUGAR_SFX_EndOfBeingComboedByBatman | 
060F90B0 | SAB2_Stats | 
060F90CC | SUGAR_SFX_EndOfBeingComboedByRobin | 
060F90EA | SUGAR_SFX_EndOfComboingBatman | 
060F9102 | SUGAR_SFX_EndOfComboingRobin | 
060F910C | SAB2_AIScript | 
060F911C | SugarSetupTable | 
060F9150 | SUGAR1_ComboSet1 | 
060F9154 | SAB2_InfoTable | 
060F9160 | SUGAR1_ComboSet2 | 
060F9164 | SAB3_ComboSet1 | 
060F9170 | SUGAR1_Stats | 
060F9174 | SAB3_ComboSet2 | 
060F9184 | SAB3_ComboSet3 | 
060F9194 | SAB3_ComboSet4 | 
060F91A4 | SAB3_ComboSet9 | 
060F91B4 | SAB3_Stats | 
060F91CC | SUGAR1_AIScript | 
060F91D0 | SubwayTwoFacePosition | 
060F91E4 | SUGAR1_InfoTable | 
060F91F4 | SUGAR2_ComboSet1 | 
060F9204 | SUGAR2_ComboSet2 | 
060F9210 | SAB3_AIScript | 
060F9214 | SUGAR2_ComboSet3 | 
060F9218 | SetupSubwayLTwoFace | 
060F9224 | SUGAR2_Stats | 
060F9248 | SetupSubwayRTwoFace | 
060F9264 | SAB3_InfoTable | 
060F9274 | SubwayTwoFaceCodeSLIDEON | 
060F9274 | SabBoundBoxes | 
060F9280 | SUGAR2_AIScript | 
060F9290 | SabModeTable | 
060F92A0 | SUGAR2_InfoTable | 
060F92B0 | SUGAR3_ComboSet1 | 
060F92B8 | SubwayTwoFaceCodeFIRE | 
060F92C0 | SUGAR3_ComboSet2 | 
060F92D0 | SUGAR3_ComboSet3 | 
060F92E0 | SUGAR3_ComboSet4 | 
060F92F0 | SUGAR3_Stats | 
060F934C | SUGAR3_AIScript | 
060F9378 | SUGAR3_InfoTable | 
060F9388 | SUGAR4_ComboSet1 | 
060F9398 | SUGAR4_ComboSet2 | 
060F93A8 | SUGAR4_ComboSet3 | 
060F93B8 | SUGAR4_ComboSet4 | 
060F93C8 | SUGAR4_ComboSet5 | 
060F93D8 | SUGAR4_ComboSet6 | 
060F93E8 | SUGAR4_Stats | 
060F9418 | SubwayTwoFaceCodeLAUGH | 
060F9444 | SUGAR4_AIScript | 
060F9454 | SubwayTwoFaceCodeEXITLAUGH | 
060F947C | SubwayTwoFaceCodeSLIDEOFF | 
060F947C | SUGAR4_InfoTable | 
060F948C | SugarBoundBoxes | 
060F94A8 | SugarModeTable | 
060F94BC | SubwayTwoFaceCodeFALL | 
060F94EC | TwoFace1FxPalette | 
060F94FC | TwoFaceFlinchSounds | 
060F9508 | TwoFaceSetupTable | 
060F953C | TWOFACE_C_GunAttack | 
060F9558 | TWOFACE_C_KnifeAttack | 
060F958C | TWOFACE_ComboSet1 | 
060F959C | TWOFACE_ComboSet2 | 
060F95AC | TWOFACE_SFX_Taunt | 
060F95C4 | TWOFACE_SFX_EndOfComboingPlayers | 
060F95E4 | TWOFACE_Stats | 
060F9640 | TWOFACE_AIScript | 
060F965C | TWOFACE_InfoTable | 
060F966C | TwoFaceBoundBoxes | 
060F9688 | TwoFaceEvilModeTable | 
060F9A78 | LipsAttackBox | 
060F9D18 | TwoFaceGoodModeTable | 
060FA3A8 | BazookaMissileFIREFrame | 
060FA3C0 | BazookaMissileModeTable | 
060FA3D0 | SubwayTwoFaceBoundBoxes | 
060FA3EC | SubwayTwoFaceSLIDEONFrame | 
060FA404 | SubwayTwoFaceFIREFrame | 
060FA4A0 | SubwayTwoFaceLAUGHFrame | 
060FA4F4 | SubwayTwoFaceEXITLAUGHFrame | 
060FA524 | SubwayTwoFaceSLIDEOFFFrame | 
060FA53C | SubwayTwoFaceFALLFrame | 
060FA5B4 | SubwayTwoFaceModeTable | 
060FA618 | GuesserFlinchFunction | 
060FA618 | FeatherFlinchFunction | 
060FA618 | AlthugFlinchFunction | 
060FA620 | SetupAlthug | 
060FA620 | DrawFeather | 
060FA628 | UpdateGuesser | 
060FA62C | AlThugSetupBLOCK | 
060FA64C | DrawAlthugChain | 
060FA654 | ClipFeather | 
060FA664 | FeatherBlockLoFunction | 
060FA694 | UpdateFeather | 
060FA6E0 | AnimateFeather | 
060FA744 | SetupFeather | 
060FA770 | DrawGuesser | 
060FA7EC | FeatherCheckForBlock | 
060FA8CC | FeatherSetupTOBLOCK | 
060FA90C | FeatherCodeTOBLOCK | 
060FA928 | FeatherSetupBLOCK | 
060FA932 | FeatherCodeBLOCK | 
060FA94E | FeatherSetupGETUP | 
060FA96C | FeatherSetupTHROWFEATHERS | 
060FA9A4 | DrawAlthugChainToPlayer | 
060FAA00 | FeatherCodeTHROWFEATHERS | 
060FAA4C | AnimateGuesser | 
060FAAA4 | SetupGuesser | 
060FAAF4 | GuesserCodeWALK | 
060FAAF8 | DrawAlthug | 
060FAB50 | GuesserCodeFLINCH | 
060FAB64 | GuesserHitByPlayerOnGrapple | 
060FAB98 | GuesserCodeEXPLODE | 
060FABBE | UpdateGuesserParticle | 
060FAC10 | FeatherSetupTOSPINSTICKIDLE | 
060FAC7C | FeatherCodeTOSPINSTICKIDLE | 
060FACA0 | FeatherSetupSPINSTICKIDLE | 
060FACB4 | DrawPulledAlthug | 
060FACD8 | FeatherCodeSPINSTICKIDLE | 
060FACF8 | FeatherCodeEXITSPINSTICK | 
060FAD1C | GuesserSetupEXPLODE | 
060FAD20 | FeatherSetupTOLAUNCHSTICK | 
060FAD50 | FeatherCodeLAUNCHSPINSTICK | 
060FAD70 | FeatherSetupLAUNCHSTICK | 
060FAD7A | FeatherCodeLAUNCHSTICK | 
060FADA0 | FeatherSetupGETSTICKBACK | 
060FADC4 | FeatherCodeGETSTICKBACK | 
060FADE0 | FeatherSetupHANDSLAP | 
060FADEC | AlThugSetupPUNCHA | 
060FADF6 | AlThugCodePUNCHA | 
060FAE04 | FeatherCodeHANDSLAP | 
060FAE14 | AlThugSetupHEADBUTT | 
060FAE24 | AlThugCodeHEADBUTT | 
060FAE70 | FeatherSetupSLIDESLAP | 
060FAE8C | AlThugSetupKICKA | 
060FAE96 | AlThugCodeKICKA | 
060FAE9C | FeatherCodeSLIDESLAP | 
060FAEB4 | AlThugSetupDSPINKICK | 
060FAEDC | AlThugCodeDSPINKICK | 
060FAF54 | AlThugSetupTOCHAIN | 
060FAFC8 | GuesserSetupLAUNCHFIST | 
060FAFCC | FeatherSetupEXITSLIDESLAP | 
060FAFF0 | FeatherCodeEXITSLIDESLAP | 
060FB00C | FeatherSetupELBOWSLAM | 
060FB014 | GuesserSetupELECLAUNCHFIST | 
060FB030 | GuesserSetupGRABLAUNCHFIST | 
060FB030 | FeatherCodeELBOWSLAM | 
060FB04C | GuesserCodeLAUNCHFIST | 
060FB04C | FeatherSetupELBOWSLAMFLY | 
060FB064 | AlThugCodeSWINGCHAIN | 
060FB070 | GuesserSetupFIREFISTOUT | 
060FB086 | GuesserSetupELECFIREFISTOUT | 
060FB0A0 | GuesserSetupGRABFIREFISTOUT | 
060FB0BC | GuesserCodeFIREFISTOUT | 
060FB10C | FeatherCodeELBOWSLAMFLY | 
060FB124 | GuesserCodeGETFISTBACK | 
060FB150 | FeatherSetupELBOWSLAMLAND | 
060FB1C8 | FeatherCodeELBOWSLAMLAND | 
060FB220 | GuesserSetupEXITLAUNCHFIST | 
060FB220 | AlThugSetupTHROWCHAIN | 
060FB22A | GuesserCodeEXITLAUNCHFIST | 
060FB248 | GuesserSetupELECPLAYER | 
060FB250 | FeatherSetupEXITELBOWSLAM | 
060FB25A | GuesserCodeELECPLAYER | 
060FB26C | FeatherCodeEXITELBOWSLAM | 
060FB288 | FeatherSetupSWINGSTICK | 
060FB292 | FeatherCodeSWINGSTICK | 
060FB2B0 | FeatherSetupPREPAREFLIP | 
060FB2D4 | FeatherCodePREPAREFLIP | 
060FB2F0 | FeatherSetupFLIP | 
060FB314 | AlThugCodeTHROWCHAIN | 
060FB340 | FeatherCodeFLIP | 
060FB350 | GuesserSetupPUNCHA | 
060FB360 | FeatherSetupFLIPLAND | 
060FB368 | GuesserSetupPUNCHB | 
060FB36A | FeatherCodeFLIPLAND | 
060FB380 | GuesserCodePUNCH | 
060FB388 | FeatherSetupPREPARECARJUMP | 
060FB3AC | PopGuesserHeadOff | 
060FB3AC | FeatherCodePREPARECARJUMP | 
060FB3C8 | FeatherSetupCARJUMP | 
060FB3F8 | AlThugCodeEXITCHAIN | 
060FB400 | GuesserSetupHEADPOP | 
060FB414 | AlThugSetupPLAYERPULLCHAIN | 
060FB424 | DrawGuesserHead | 
060FB428 | FeatherCodeCARJUMP | 
060FB448 | FeatherSetupCARJUMPLAND | 
060FB452 | FeatherCodeCARJUMPLAND | 
060FB454 | GuesserCodeHEADPOP | 
060FB470 | FeatherHitPlayer | 
060FB488 | AlThugCodePLAYERPULLCHAIN | 
060FB574 | GuesserSetupNOHEADIDLE | 
060FB586 | GuesserCodeNOHEADIDLE | 
060FB5A4 | AlthugGrabbedPlayerChecks | 
060FB5A8 | GuesserCodeTORNADOIN | 
060FB5C4 | GuesserSetupTORNADO | 
060FB618 | AlThugSetupRUSH | 


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
