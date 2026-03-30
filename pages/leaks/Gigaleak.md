---
layout: post
tags: 
- snes
- leak
- sourcecode
title: Gigaleak - SNES Source Code Leak 
category: leak
image: /public/images/snes/Gigaleak.jpg
twitterimage: http://www.retroreversing.com/public/images/snes/Gigaleak.jpg
permalink: /gigaleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Gigaleak - SNES Source Code Leak 
    url: #
recommend: 
 - snes
 - leak
 - sourcecode
editlink: /leaks/Gigaleak.md
updatedAt: '2026-03-29'
twitterimage: https://www.retroreversing.com/public/N64/Gigaleak.jpg
---

On 24 July 2020, a large Nintendo archive was uploaded online and quickly became known as the `Gigaleak`.
It was not one single neat source drop.
It was a mixed archive of ROMs, source trees, boot ROM repositories, internal tools, and later CVS/Subversion backups.


## Uploaded Files

These were the archive files uploaded on 4chan /g/ on 24 July 2020, the day the Gigaleak was leaked:
* **other.7z** - The broadest archive, containing DMG, CGB, SFC, lot-check, and boot ROM material
* **agb_bootrom_trunk.zip** - Extracted latest trunk snapshot of the AGB boot ROM repository
* **cgb_bootrom_trunk.zip** - Extracted latest trunk snapshot of the CGB boot ROM repository
* **pokemon-checkout.7z** - Pokemon-related source/material
* **netcard.7z** - Material for a cancelled Game Boy Advance peripheral
* **20100713cvs_backup.tar.7z** - CVS repository backup with later Nintendo projects

This page will cover each of these files, linking out to specific posts for each to dive into the details.

The next day its sequel, often called **Gigaleak 2**, followed with much more Nintendo 64 material.

---
# Other (other.7z)
The archive mysteriously named **other.7z** is one of the most interesting parts of the leak because it mixes game source trees with internal repositories and support material.

It contains these major sub-archives:
* **agb_bootrom.zip**  - Subversion repositories for both the Game Boy Advance and Game Boy Color boot ROM projects
* **CGB.7z** - Game Boy Color Source Code for Zelda and a build of Hamtaro 2
* **dmg.7z** - Original Game Boy Source Code for Zelda
* **Famicom_NES.7z** - Full set of official JP/USA Famicom/NES ROMS (Lot Check)
* **NEWS.7z** - A smaller archive with SFC-adjacent material and logs
* **SFC.7z** - SNES Source Code


---
## Original Game Boy Source Code for The Legend of Zelda Links Awakening (dmg.7z)
The archive **dmg.7z** contains the source code for the original version of The Legend of Zelda Links Awakening.

{% include link-to-other-post.html post="/zelda-links-awakening" description="For more information check out this post." %}

---
## Game Boy Color Source Code for The Legend of Zelda Links Awakening DX (CGB.7z)
The archive **CGB.7z** contains the source code for the Game Boy Color game The Legend of Zelda Links Awakening DX and pre-build ROM images of Hamtaro 2.

{% include link-to-other-post.html post="/zelda-links-awakening-dx" description="For more information check out this post." %}

---
## Famicom (NES) Lot Check ROMS (Famicom_NES.7z)
We have a post covering the Full set of official JP/USA Famicom/NES ROMS released in the **Famicom_NES.7z** archive along with other LotCheck releases:

{% include link-to-other-post.html post="/nintendo-lot-check" description="For more information on the Famicom Lot Check ROMS check out this post." %}

---
## Super Nintendo Source Code (SFC.7z/ソースデータ)
Contains the uncompiled raw source code for a number of Super Famicom (SNES) titles. In the leak, this codebase is preserved both as the `SFC.7z` archive and as a fully unzipped `other/SFC/ソースデータ` (Source Data) working directory. 

We have dedicated deep-dives exploring the leaked source code and assets for each of these massive titles:

{% include link-to-other-post.html post="/star-fox-source-code" description="Explore the Star Fox 1 & 2 internal source code and 3D tooling here." %}
{% include link-to-other-post.html post="/yoshis-island-source-code" description="Explore the Yoshi's Island (ヨッシーアイランド) source code here." %}
{% include link-to-other-post.html post="/zelda-a-link-to-the-past-source-code" description="Explore the Legend of Zelda: A Link to the Past (ゼルダの伝説神々のトライフォース) source code here." %}
{% include link-to-other-post.html post="/super-mario-kart-source-code" description="Explore the Super Mario Kart source code and original level editor here." %}
{% include link-to-other-post.html post="/wild-trax-source-code" description="Explore the Stunt Race FX / Wild Trax (ワイルドトラックス) source code here." %}
{% include link-to-other-post.html post="/f-zero-source-code" description="Explore the F-Zero prototype source code here." %}
{% include link-to-other-post.html post="/super-mario-collection-source-code" description="Explore the Super Mario All-Stars (マリオコレクション) source code here." %}

---
## Super Famicom Built ROMs (other/SFC/ROM)

The `other/SFC/ROM` folder contains an unexpected subset of built Super Famicom binaries and a utility executable rather than source code. Specifically, it holds what appears to be a build of Star Fox 2, multi-disc split ROMs for Super Mario RPG in both Japanese and US localizations, and a checksum application.

### At a Glance
The `other/SFC/ROM` directory preserves:
* a single 1MB build path for the officially unreleased Star Fox 2
* Japanese and US builds of the 4MB Super Mario RPG, split perfectly into 1MB "Discs"
* a Windows/DOS executable tool for calculating ROM checksums

{% capture sfc_rom_body %}
The folder structure is organized by game and region, revealing how large 4MB SNES games (like Super Mario RPG) were handled in 1MB chunks, along with an English test build of Star Fox 2.
{% endcapture %}

{% capture sfc_rom_items %}
- CheckSumHVC.exe - A command-line utility for calculating or validating ROM checksums
- StarFox2 - Directory for Star Fox 2 builds
- StarFox2/usa/SXJ03.COM - A built 1MB executable ROM image for Star Fox 2 (USA)
- SuperMarioRPG - Directory for Super Mario RPG (SA-1)
- SuperMarioRPG/JP - Japanese localization (ARWJ)
- SuperMarioRPG/JP/Disc0/ARWJ02-0.SFC - 1MB chunk 0 of the 4MB ROM
- SuperMarioRPG/JP/Disc1/ARWJ02-1.SFC - 1MB chunk 1 of the 4MB ROM
- SuperMarioRPG/JP/Disc2/ARWJ02-2.SFC - 1MB chunk 2 of the 4MB ROM
- SuperMarioRPG/JP/Disc3/ARWJ02-3.SFC - 1MB chunk 3 of the 4MB ROM
- SuperMarioRPG/US - US localization (ARWE)
- SuperMarioRPG/US/Disc0/ARWE00-0.SFC - 1MB chunk 0 of the 4MB ROM
- SuperMarioRPG/US/Disc1/ARWE00-1.SFC - 1MB chunk 1 of the 4MB ROM
- SuperMarioRPG/US/Disc2/ARWE00-2.SFC - 1MB chunk 2 of the 4MB ROM
- SuperMarioRPG/US/Disc3/ARWE00-3.SFC - 1MB chunk 3 of the 4MB ROM
{% endcapture %}

{% include connected-folder-tree.html folder="ROM" path="other/SFC/ROM" body=sfc_rom_body version="Gigaleak import" content=sfc_rom_items %}

### The EPROM Split Structure
The 4MB Super Mario RPG Japanese (`ARWJ`) and US (`ARWE`) ROMs are interesting because they are systematically cut into four `1048576` byte (1MB) files, sorted into `Disc0` through `Disc3`.

This division isn't an indicator of multi-disc gameplay like the PlayStation. Instead, it demonstrates the physical realities of development and testing at the time.

This is how the real SNES SA-1 prototype boards were burned physically, but emulator software won't recognize them out of the box until they are merged back into a single binary file.

Burning a full 4MB (32Mbit) game for testing meant dividing the binary across multiple 1MB EPROM chips. These folders explicitly preserve that file-splitting step before a physical board was flashed.

To play the builds on modern emulators, the split 1MB files just need to be rejoined in binary order. Because SNES games are flat binaries, a short Python script can safely merge them back into a working 4MB `.sfc` image:

```python
import os

base_path = './SuperMarioRPG/US'
output_path = './SuperMarioRPG-US-Merged.sfc'

chunks = [
    os.path.join(base_path, 'Disc0', 'ARWE00-0.SFC'),
    os.path.join(base_path, 'Disc1', 'ARWE00-1.SFC'),
    os.path.join(base_path, 'Disc2', 'ARWE00-2.SFC'),
    os.path.join(base_path, 'Disc3', 'ARWE00-3.SFC')
]

with open(output_path, 'wb') as outfile:
    for chunk in chunks:
        with open(chunk, 'rb') as infile:
            outfile.write(infile.read())
            
print(f'Successfully stitched 4MB ROM to: {output_path}')
```

Once stitched together, running a cryptographic hash (like `shasum -a 1`) on the resulting `SuperMarioRPG-US-Merged.sfc` file returns `a4f7539054c359fe3f360b0e6b72e394439fe9df`. This exact SHA-1 hash is heavily documented by ROM hacking and preservation communities (such as No-Intro) as being the bit-for-bit identical match to the final, unmodified commercial release of **Super Mario RPG: Legend of the Seven Stars (USA)**. This confirms the Gigaleak repository was holding the absolute final code rather than a beta or localization candidate!

### Star Fox 2 (USA)
`SXJ03.COM` is preserved as a 1MB file for the US version of Star Fox 2 (`usa`). The `.COM` extension is notable in Nintendo's development environments—it is identically sized to a standard 1MB SFC ROM dump and represents the direct compiled output, sharing conventions with the `.com` monitor artifacts seen in the Game Boy boot ROM repositories. Finding it packaged under the `SFC/ROM` directory provides a direct glimpse into the internal naming conventions for the project prior to its original cancellation.

By extracting the 64-byte block starting at `0x7FC0`, we can reveal the internal SNES ROM header embedded right inside the `SXJ03.COM` executable. The raw binary output exposes the title, layout, and makeup of the cartridge:

```text
00007fc0  53 54 41 52 46 4f 58 32  20 20 20 20 20 20 20 20  |STARFOX2        |
00007fd0  20 20 20 20 20 20 15 0a  00 01 33 00 d8 71 27 8e  |      ....3..q'.|
```

When decoded against the official SNES header specification, the metadata breaks down elegantly:
* **Internal Title:** `STARFOX2` (exactly 21 characters padded with spaces)
* **Map Mode (`0x15`):** Identifies the ROM layout 
* **Cartridge Type (`0x0A`):** Typically indicates `ROM + Battery + Coprocessor`, directly signaling the presence of the Argonaut Super FX chip needed rendering the 3D polygons!
* **ROM Size (`0x00`):** Curiously, the ROM size field is left completely blank (`0`), confirming that this `.COM` executable was a raw testing dump and not yet parsed through Nintendo's final master validation tool.

### Internal Tool: CheckSumHVC.exe
A string analysis of the `CheckSumHVC.exe` binary reveals it is a multi-platform command-line utility used internally by Nintendo. Despite having `HVC` in the name (Home Video Computer, the internal family code for the Famicom), this tool was used for validating lot-check checksums across multiple console generations.

The internal strings reveal its command-line flags:
* `[/?]` - show help (this text)
* `[/Q]` - show only SUM result
* `[/L]` - show SUM result in lower-case
* `[/C]` - set SUM to clip board
* `[/0]` - DMG Mode: check as addresses 0x014E, 0x014F data are 0x00

The `/0` DMG flag is particularly interesting. In the original Game Boy (DMG) cartridge header architecture, addresses `0x014E` and `0x014F` hold the Global Checksum of the ROM. The `/C` clipboard flag also provides a glimpse into the developer workflow, allowing engineers to quickly copy-paste generated checksums into their assembly configuration files before a final build. 

Additionally, because the tool was compiled via MSVC for Windows, it inadvertently preserved the exact hard drive path of the Nintendo developer who originally built the executable:
> `D:\n2633\Documents\Code\CheckSumHVC\CheckSumHVC\Release\CheckSumHVC.pdb`

The `n2633` directory is almost certainly a Nintendo internal employee or machine ID.


---
## Boot ROM Repositories (other/agb_bootrom)
The `other/agb_bootrom` folder is much richer than the filename suggests.
On disk it survives as two full Subversion repositories, one for `agb_bootrom` and one for `cgb_bootrom`, complete with revision history, `trunk/branches/tags`, and surrounding build material.

It is best thought of as two related but quite different archives:
* the AGB side is a broader monitor, startup, library, and tooling environment
* the CGB side is a tighter DMG-era monitor build package with spec documents

If you don't have subversion tooling installed the full trunk versions of both were released as seperate archives **agb_bootrom_trunk.zip** and **cgb_bootrom_trunk.zip**.

---
### Gameboy Color Boot ROM (cgb_bootrom_trunk.zip)
The `cgb_bootrom_trunk.zip` archive is best understood as an exported working copy from the `cgb_bootrom` Subversion repository preserved inside `other/agb_bootrom`.

{% include link-to-other-post.html post="/game-boy-color-boot-rom-repository/" description="For the repository layout, build flow, and surviving CGB trunk files, check out this post." %}

---
### Game Boy Advance Boot ROM (agb_bootrom_trunk.zip)
The `agb_bootrom_trunk.zip` archive is the extracted latest working copy from the much larger `agb_bootrom` Subversion repository found inside `other/agb_bootrom`.

{% include link-to-other-post.html post="/game-boy-advance-boot-rom-repository/" description="For the wider AGB repository contents, including the monitor code, include files, libraries, docs, and later tools like AgbComp and Bmp2Agb, check out this post." %}

---
# Netcard (cancelled GBA peripheral)
In the **netcard.7z** archive

---
#  CVS Repository Dump (20100713cvs_backup.tar.7z)
The CVS Repository dump is from the 20th of October 2007 and mainly contains projects related to the WII Virtual console, such as emulators for Game Boy and DS, along with a few other small projects by individual developers.

## Checking out the latest version

### Step 1 - Extracting the tar
The first step after extracting the 7Zip file to to extract the tar archive, you can do this like so:
```bash
tar -xvf 20100713cvs_backup.tar
```

### Step 2 - Installing CVS and checking out files
You will need to first have the CVS command line utilities installed if you haven't already then you can install like so:
* Mac OSX: `brew install cvs`
* Ubuntu Linux: `apt-get install cvs`

Now run the command in a folder that you want to extract the files:
```bash
cvs -d ~/extract_path/usr/local/cvsrepo/ensata checkout .
```
Note that the path has to be the FULL absolute path or it will complain about not being able to find the host.

It is a very large repository so expect it to take a while to complete.

---
## Ensata (DS Emulator)


---
## imatake
This folder contains two projects by someone known as Imatake who presumably worked at Nintendo 13 years ago (2007). One is a disassembler for original Game Boy ROMs and the other is a tool to support Korean Hangul characters in the Pokemon Font.

### dmgdasm
This is a disassembler for Original DMG Game boy ROMs written in C++, presumably used to test the Virtual Console Game Boy emulator in the **turnout** folder.

### dpk_fontconv (Hangul Korean Font Converter)
This is a font converter used to generate the Pokemon front for the Korean writing system known as Hangul.

---
## muratest
This seems to be a bunch of test projects setup by Teruki Murakawa for Gamecube development.

## noriproj (Misc Tools)
Not sure why this folder is called **noriproj** but it contains two pretty unrelated projects, one is a C# tool to generate a wallpaper based on a password and the other is a tool to upload .WAD files to the Wii Shop (written in PHP).

### WallPaperPasswordMaker
This is a tool that was used in Japan to give trainers special Box Wallpapers, presumably this was used at Pokemon events.

It generates 4 passwords for a user based on a word list with an algorithm that takes into account the trainer ID and whatever wallpaper the user wants for their Box.

There is an unofficial version available on PokeWiki.de here: 
[Secret Code Generator - PokéWiki](https://www.pokewiki.de/Spezial:Geheimcode-Generator?uselang=en)

### Virtual Console Uploader (vc)
This is a PHP project that makes it easy for the user to upload WAD files to the Wii eShop and Virtual Console.

---
## turnout (Game Boy emulator for Wii VC)
The turnout folder contains a Game Boy emulator for the Wii, presumably used for the Virtual Console Game boy titles. 

---
## pokemon

---
# References
[^1]: [Massive Nintendo "Gigaleak" Surfaces With ROMs, Canceled Games, and Much More Switcher.gg](https://switcher.gg/s/news/massive-nintendo-gigaleak-surfaces-with-roms-canceled-games-and-much-more/)
