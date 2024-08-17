---
title: Reversing Engineering a NES Game With Ghidra
layout: post
permalink: /nes-ghidra
tags:
- nes
- ghidra
recommend: nes
editlink: /consoles/nes/NESGhidra.md
_updatedAt: '2024-08-17'
---


# Opening NES ROMs with Ghidra
Ghidra doesn't have support out of the box for NES ROM reverse engineering so we need to use a plugin created by **ilyakharlamov** available here:
[ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin: Ghidra NES / Famicom ROM Decompiler Plugin](https://github.com/ilyakharlamov/Ghidra-Nes-Rom-Decompiler-Plugin)

After downloading open up ghidra and go to `File -> Install Extensions..`
![GhidraNESInstallExtension](https://user-images.githubusercontent.com/40120498/235518649-ed162f5f-ff90-4faa-b199-b59109b2b1ce.jpeg)

It will then open up the following window, click the green plus icon in the top right:
![GhidraInstallExtensions](https://user-images.githubusercontent.com/40120498/235519010-4fd53d8c-643a-45fb-8edf-ffa2ff10ef2a.jpeg)

Then make sure to select the zip file that you downloaded previously:
![SelectExtensionZipFile](https://user-images.githubusercontent.com/40120498/235519239-7c4f2fec-daac-4e73-8d06-1f29dcf1e9b0.jpeg)

If you get the following screen then you will either need to build the plugin from source or use an older version of Ghidra:
![ErrorInstallingPlugin](https://user-images.githubusercontent.com/40120498/235519452-472736aa-fadf-4b20-9756-b7456c601cae.jpeg)

When attempting to compile the plugin from source and linking the ghidra directory I normally get the error:
> JavaModelException: Build path contains duplicate entry: '/ghidra_10.2.3_PUBLIC/Ghidra/Processors/68000/lib/68000.jar'for project 'Ghidra-Nes-Rom-Decompiler-Plugin'

To fix this you need to right Click on the Project and select "Properties", go to the "Java Build Path" tab and then the Libraries tab and delete all the jars.

When that is done you will be able to run the application in Eclipse by clicking the green play icon and the following window will pop up:
![GhidraRunAsExtension](https://user-images.githubusercontent.com/40120498/235523073-0428ba75-ebab-40c0-91d8-72182a37a9b1.jpeg)

Select "Ghidra" from this window.

If you get an error such as:
> Exception in thread "main" ghidra.util.exception.AssertException: Multiple modules collided with same name: Ghidra-Nes-Rom-Decompiler-Plugin

THen you need to delete the `Ghidra-Nes-Rom-Decompiler-Plugin` folder from the global ghidra config file location e.g `~/.ghidra/Extensions`

Now when you go to `Import File` and select a .nes ROM file you should get the following dialog:
![ImportNESROM](https://user-images.githubusercontent.com/40120498/235524698-6024d805-fddd-4079-aee2-0a7a61ffc2e2.jpeg)

Now after import you should be able to decompile any function you want as long as the Mapper is supported in the NES Plugin (currently only Mapper 0):
![NESDecompile](https://user-images.githubusercontent.com/40120498/235525315-360f63fb-2203-41c2-bd95-9e1f68df8c6f.jpeg)

---
# Reversing Super Mario Bros with Ghidra
Super Mario Bros is an excellent game to use to learn Ghidra and how to reverse NES roms, as there is already documentation and disassembly on the web. So you can practise using Ghidra and use the Mario Bros disassembly [here](https://gist.github.com/1wErt3r/4048722) to check your work!

First make sure to open the Super Mario Bros. (World).nes rom (MD5: 811b027eaf99c2def7b933c5208636de) with Ghidra and the GhidraNes plugin as shown in the previous guide.

Now you will notice that it has detected about 36 functions, along with some already named like reset and vblank:
![image](https://github.com/user-attachments/assets/ed487352-eed1-4f19-881d-13ea7b021944)

If you start at the top of the Ghidra Disassembly window you can start to name them based on the dissassembly file [here](https://gist.github.com/1wErt3r/4048722).

Note that normally you won't have all the symbol names given to you like this for ROMS that have not yet been disassembled by the community, we are just using this as an example to teach the basics of Ghidra.

Go to the first function at 0x8000 and you will notice it has already been named as "reset", in the disassembly we are using it was called start so we can rename this to match just for convenience. 

To do this select the **reset** name and **Press the L key on the keyboard**, this will open a dialog asking for the name type in Start like so:
![image](https://github.com/user-attachments/assets/005a86cc-a6d3-46ca-aa47-beecf1da8847)


The reason we know this is called Start is because of the `.org $8000` just before the Start label, this means place that function at location 0x8000.

We can now start from the top of the Ghidra Listing and start re-naming the labels to match the disassembly, starting with VBlank1 then VBlank2 etc by pressing L and typing in the name.

![image](https://github.com/user-attachments/assets/0d2b8811-8712-4ffd-a43f-b89ec43b3910)


You now know how to rename a function/label, which will be used all the time when reverse engineering your own ROMS.

Now you can keep going down and naming until we get to **MoveAllSpritesOffscreen** where you will notice the community disassembly and the Ghidra auto disassembly listing don't match:
![image](https://github.com/user-attachments/assets/38f86f26-111c-4f69-81cd-fa98e2dbe6cd)


