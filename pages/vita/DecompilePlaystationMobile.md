---
layout: post
tags:
- sony
- vita
- android
title: Decompiling Playstation Mobile Games
thumbnail: /public/consoles/Sony PSVita.png
image: /public/consoles/Sony PSVita.png
permalink: /decompiling-playstation-mobile-games/
breadcrumbs:
  - name: Home
    url: /
  - name: Playstation Vita
    url: /vita
  - name: Decompiling Playstation Mobile Games
    url: #
recommend: vita
editlink: /vita/DecompilePlaystationMobile.md
---

Playstation Mobile games are all build using C# and the Mono Runtime environment and thus are trivial to reverse engineer with standard .NET decompilers in many cases with full debug symbols in tact.

# Reverse Engineering PSMobile Games
The first step to reverse engineering a Playstation Mobile game is to decrypt the files on the device and find the application executable.

## Decrypting PS Mobile Games
This section will cover how to extract and decrypt Playstation Mobile games using a Jailbroken Playstation Vita.

First of all you need to have the PS Mobile game installed on your Vita and playable. 

When installed the contents will be extracted to the folder:
* /psm/TitleID folder/

However all of these files are encrypted with PSSE DRM so if you try to open any of the files including text files they will be un-openable.

So in order to decrypt the contents you will need to install the plugin **FuckPSSE** on your vita, the easiest way is to use **AutoPlugin**.
 
When the plugin is installed open the game you want to reverse engineer and it will simply show a red screen now, that means its started decrypting! When finished the screen will turn green, when that happens you can safely close the game and disable the plugin. 

The contents of the Application will have been extracted to the folder:
* /psm/TitleID folder/RW/Temp

You can now find the application executables (**app.exe**) and libraries (**.dll**) in this folder, you should then copy these executables to your PC and now you are ready to decompile them in the next step.

## Decompile the exe with Rider (Win/Mac/Linux)
The most cross-platform way to decompile the executables or dlls is to use the IDE by JetBrains called **Rider**.

An alternative if you use Windows is **dotPeek** which has the same result but this post will cover **Rider** as it also works on MacOSX and Linux.

In Rider you need to open the Folder that your executables are in (File->Open) and it will show all the files in the left pane File System. You can now right click and select **View in Assembly Explorer**.

<img src="/public/images/vita/PSMobile Decompile.jpg" />

You can now view all the classes and when you double click them you will see the full C# source code, which is pretty much everything from the original code apart from the comments (which get stripped by the compiler).

<img src="/public/images/vita/PSMobile Decompile2.jpg" />

---
# Extracted Content
This section will cover the folders and files that you will often find in a decrypted/extracted Playstation Mobile game.

## Read Only Folder (/RO)
The **RO** folder is where all the application and license files that don't need to be editable by the game/application reside.

### Application Folder

Some common files that are in this folder:
* **app.exe** - The main game executable - decompile this to understand how the game logic works
* **app.info** - Binary file with **PSMA** file header, presumably meta data about the application
* **edata.list** - Plain text file of all the files in the Application folder
* **osc.cfg** - YAML file containing mapping information for which buttons can be used
* **psse.list** - seems to be the same as edata.list

This folder also contains DLL files, which are libraries of shared code that get loaded at runtime, these are also .NET based and you can find a list of the most common in the section below entitled **Common Dynamically Linked Libraries**.

### License Folder
This is where you will find the RIF licenses, you won't need to do anything with these files they are just used to decrypt the content.

---
## Read Write Folder (/RW)
The **RW** contains any files that need to be changed by the game/application such as save data or temporary files.

### Documents Folder
The **/RW/Documents** folder is used to store files such as Save Games.

### System Folder
The **/RW/System** folder is normally used for files such as crash dumps and commonly contains:
* content_id
* pm.dat

### Temp (Created by FuckPSSE)
The Temp folder is not a standard folder for PS Mobile titles it is created when the **FuckPSSE** is installed and the game is run, it then puts all the extracted files from the **/RO/Application** folder.

---
# Common Files
This section contains a list of some of the most common files you will find when looking into the contents of Playstation Mobile games.

## Mono Debug files (.mdb)
Mono Debug files are created by the Mono compiler toolchain when the DLLs or executables are compiled from source code.

Name | Description
---|---
AdventureLibPSM.dll.mdb | 
AscentPSM.dll.mdb | 
CandyPSM.dll.mdb | 
Microsoft.Xna.Framework.dll.mdb | 
MonoGame.Framework.dll.mdb | 
library_SharePreferences.dll.mdb | 
Lidgren.Network.dll.mdb | 
MathTestsLib.dll.mdb | 
PixelEnginePSM.dll.mdb | 
PixelEnginePSM2.dll.mdb | 
PSMHelper.dll.mdb | 
SpriteEngine.dll.mdb | 
TileLibPSM.dll.mdb | 
VitaUnit.dll.mdb | 



## Common Dynamically Linked Libraries (*.DLLS)
This section has a list of all the dynamic libraries that are used in most if not all of the Playstation Mobile games.

Name | Description
---|---
Microsoft.Xna.Framework.dll | Some games are build with Microsofts XNA framework and require this DLL
MonoGame.Framework.dll | 
MonoGame.Framework.PSMobile.dll | 
Sce.PlayStation.HighLevel.GameEngine2D.dll | 
Sce.PlayStation.HighLevel.Model.dll | 
Sce.PlayStation.HighLevel.JsonHelper.dll | 
Sce.PlayStation.HighLevel.Physics2D.dll | 
Sce.PlayStation.HighLevel.UI.dll | 
Sce.Pss.HighLevel.GameEngine2D.dll | 
System.Core.dll | 
System.Json.dll | 
System.Runtime.Serialization.dll | 
System.ServiceModel.dll | 
System.ServiceModel.Web.dll | 
System.Web.Services.dll | 
System.Xml.dll | 
System.Xml.Linq.dll | 


Developers can also make their own DLL files so you can find many more that are custom to a particular game or developer, such as **SampleLib.dll**.

Name | Description
---|---
AdventureLibPSM.dll | 
AlonePSM.dll | 
AqualibriumLevelData.dll | 
AscentPSM.dll | 
audio.dll | 
Base.dll | 
BeatSlider.dll | 
BitMiracle.LibJpeg.NET.dll | 
Box2D.dll | 
CandyPSM.dll | 
CloudSyncPSM.dll | 
Cobalt.NET.dll | 
Comic.dll | 
Core.dll | 
cr.dll | 
DragonPSM.dll | 
Engine.dll | 
EngineD.dll | 
Eruption.dll | 
fonts/freetype.dll | 
fonts/zlib1.dll | 
FractPSM.dll | 
GameRuntime.dll | 
GameV.dll | 
gpu.dll | 
GUI.dll | 
Hammock.dll | 
HenchLua-PSM.dll | 
HoundPSM.dll | 
I18N.CJK.dll | 
I18N.dll | 
iAppli.dll | 
ICSharpCode.SharpZipLib.dll | 
Ingots.dll | 
ionEngine.dll | 
Ionic.Zlib.CF.dll | 
Ionic.ZLib.dll | 
Irisium.dll | 
JLib.dll | 
karman_psm_lib.dll | 
KungFuFIGHTPSM.dll | 
kvm.dll | 
library_SharePreferences.dll | 
Lidgren.Network.dll | 
Lidgren.Network.PSMobile.dll | 
MandoGame.dll | 
MapsPSM.dll | 
MathTestsLib.dll | 
MitLibrary.dll | 
Moco.dll | 
Motor2D.dll | 
MotorAudio.dll | 
MotorEntrada.dll | 
Music.dll | 
Nereid.dll | 
Newtonsoft.Json.dll | 
Online.dll | 
OxygenEngine.dll | 
PixelEnginePSM.dll | 
PixelEnginePSM2.dll | 
Polenter.SharpSerializer.Compact.dll | 
PSM_Pygmy_Lib.dll | 
psmGameLib.dll | 
PSMHelper.dll | 
PSSCommon.dll | 
PSSLib.dll | 
Rat.dll | 
Resources.dll | 
rLib.dll | 
SampleLib.dll | 
Sanford.Multimedia.Midi.dll | 
Sanford.Threading.dll | 
SharpCompress.dll | 
snippets_psm.dll | 
SoundEngine.dll | 
SoundEnginePSM.dll | 
SpriteEngine.dll | 
SpriteEnginePSM.dll | 
TileLibPSM.dll | 
Tipper.dll | 
TutoLib.dll | 
tweetsharp.dll | 
TwoDeePSM.dll | 
UnityShim.dll | 
VacationPSM.dll | 
VitaUnit.dll | 
wtlGameEngine.dll | 
XNATrivial.dll | 
XRpgLibrary.dll | 
ysalut.dll | 
ysgl.dll | 
ysglut.dll | 
ysinput.dll | 
ysut.dll | 


## Unity Specific DLLS
The following table has all of the DLLs used by Unity games on the Playstation Mobile store.

Name | Description
---|---
runtime/managed/Boo.Lang.dll | 
runtime/managed/I18N.CJK.dll | 
runtime/managed/I18N.dll | 
runtime/managed/mscorlib.dll | 
runtime/managed/System.Core.dll | 
runtime/managed/System.dll | 
runtime/managed/System.Runtime.Serialization.dll | 
runtime/managed/System.ServiceModel.dll | 
runtime/managed/System.ServiceModel.Web.dll | 
runtime/managed/System.Web.Services.dll | 
runtime/managed/System.Xml.dll | 
runtime/managed/System.Xml.Linq.dll | 
runtime/managed/UnityEngine.dll | 
runtime/managed/UnityScript.dll | 
runtime/managed/UnityScript.Lang.dll | 
Data/Managed/App42_Unity3D_SDK_2.9.1.dll | 
Data/Managed/Assembly-Boo.dll | 
Data/Managed/Assembly-CSharp-firstpass.dll | 
Data/Managed/Assembly-CSharp.dll | 
Data/Managed/Assembly-UnityScript-firstpass.dll | 
Data/Managed/Assembly-UnityScript.dll | 
Data/Managed/BehaviorDesignerRuntime.dll | 
Data/Managed/clipper_library.dll | 
Data/Managed/FacebookWinPhone8.dll | 
Data/Managed/GameDraw.dll | 
Data/Managed/GPGSUtils.dll | 
Data/Managed/IFacebook.dll | 
Data/Managed/JsonFx.Json.dll | 
Data/Managed/KGFUtils.Settings.dll | 
Data/Managed/MadCommons.dll | 
Data/Managed/P31RestKit.dll | 
Data/Managed/PlayMaker.dll | 
Data/Managed/Poly2Tri.dll | 
Data/Managed/ProCore.dll | 
Data/Managed/SixBySeven.dll | 
Data/Managed/TDx.TDxInput.dll | 
Data/Managed/TileSystem.Runtime.dll | 
Data/Managed/UnityAdMobPlugin.dll | 
Data/Managed/UnityEngine.Cloud.Analytics.dll | 
Data/Managed/UnityEngine.Cloud.Analytics.Util.dll | 
Data/Managed/UnityInAppPurchasePlugin.dll | 
Data/Managed/UnityLanguagePlugin.dll | 
Data/Managed/UnityMarketplacePlugin.dll | 
Data/Managed/UnityPubCenterPlugin.dll | 
Data/Managed/UnityWindowsStorePlugin.dll | 
Data/Managed/XInputDotNetPure.dll | 

---
# Instant Dungeon! - NPNA00174
The Playstation Mobile game **Instant Dungeon!** is an interesting game as it is built with a custom in-house engine called the **WithTheLove** engine or WTL and it includes a C# interpreter inside it and uses the following 2 DLLs to support it:

Name | Description
---|---
Mono.CSharp.dll | Only One game is known to have included this (Instant Dungeon! - NPNA00174) Used for a C# Interpreter [^2]
Microsoft.CSharp.dll | Only One game is known to have included this (Instant Dungeon! - NPNA00174) Used for the Dynamic Keyword in C# [^1]

The **Mono.CSharp.dll** contains a full C# interpreter allowing scripts to be interpreted on the fly rather than having pre-compiled C# scripts, so the user could potentially modify these scripts to customize the game.

The **Microsoft.CSharp.dll** is used to support the dynamic keyword which allows variables to be a non-static type, useful for languages such as python of javascript which are dynamically typed. For more information about the dynamic keyword checkout: [Using type dynamic - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/using-type-dynamic).

The game's engine code is contained in the library **wtlGameEngine.dll** and this seems to be the only Playstation Mobile game that uses it.

This all points to the game supporting a custom scripting language that could be used to mod the game!

---
# References
[^1]: [visual studio 2010 - What is Microsoft.csharp.dll in .NET 4.0 - Stack Overflow](https://stackoverflow.com/questions/2460883/what-is-microsoft-csharp-dll-in-net-4-0)
[^2]: [c# - How do I use the Mono.CSharp interpreter in Microsoft.NET - Stack Overflow](https://stackoverflow.com/questions/5520364/how-do-i-use-the-mono-csharp-interpreter-in-microsoft-net)
