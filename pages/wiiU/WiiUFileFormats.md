---
layout: post
tags: 
- wiiU
- fileformats
title: Wii U File Formats
image:  /public/wiiU/WiiUFileFormats.jpg
thumbnail: /public/consoles/Nintendo WiiU.png
permalink: /WiiUFileFormats
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: Wii U File Formats
    url: #
recommend: wiiU
editlink: /wiiU/WiiUFileFormats.md
---

# Using WiiU File Formats

## SigPatch required for NUS format games (*.app etc)
A sigpatch is a modification to the wiiU NAND memory that 'patches' the signature checks that are performed for running and installing custom wiiU channels.

This technically allows Virtual Console and other eShop games to be taken from one wiiU and installed on another sigpatched wiiU. 

# WiiU Game File Formats

## WiiU Raw Disc Image (*.WUD)
This is a full dump of a WiiU Disk completely uncompressed, just like it would be on the disc itself.

## WIIU Compressed Disc Image (*.WUX)
The same as the raw WUD file but it has been compressed so it has a smaller file size.

## WiiU NUS formats (from eShop or extracted discs)
The wiiU Nintendo Update Server format is basically a folder of different files such as .app, .h3 etc. These are all encrypted files. 
If you buy a game from the Nintendo eShop it is downloaded in this format.
You can also convert a disc game to this format using a tool such as `Disc Extractor`.

### *.app files
Numbered starting from 0 (00000000.app) to however big the channel/game is.

App files contain the actual game data, encrypted and split into sections. To decrypt the content you need the title.tmd which stores the meta data for each .app and the title key for decryption (found in the ticket). With this data you can use a AES decrypter pass in the title key and you should be able to extract all the .app files [^2].

### *.h3 files
H3 files are file Hashe to verify the downloaded .app file is correct (Each hash is a 20-byte SHA1) [^1]

### title.cert (Certificate chain)
Contains the certificates for the ticket and TMD signers, as well as the certificate authority [^3].

This is similar to the Wii Certificate Chain which is outlined here: [Certificate chain - WiiBrew](https://wiibrew.org/wiki/Certificate_chain)

### title.tik (Ticket)
Contains the title ID, console ID (for downloaded titles), and encrypted title key[^3].

The file format is similar to the Wii Ticket format which is documented here: [Ticket - WiiBrew](https://wiibrew.org/wiki/Ticket).

You can use the homebrew tool `tik2sd` to get your tickets downloaded to your sd card.

### title.tmd (Title Metadata)
The Title Metadata file (.tmd) contains the required `IOS` version (WiiUOS) and SHA-1 hashes of all of the title's contents[^3].

The `.tmd` file contains all Sha1 of the content, but it's a SHA1 hash of decrypted files, not encrypted .app files. So it requires decryption and file extraction to check integrity.

--- 
# Decrypted WiiU NUS file formats
When the nus .app files have been decrypted and extracted you will get all the game files you need for modding/reversing. The main files we are interested in are RPX and RPL.

## RPL (Revolution Plus Library?) File
RPL is a Code Library. Stuff like coreinit.rpl are libraries [^4].

## RPX (Revolution Plus eXecutable?) File
RPX is a Wii U Executable. You need Code, Content, and Meta folders to use these [^4].

### RPX to ELF conversion
[Relys/rpl2elf: Small utility to convert Wii U RPL/RPX files to standard ELF format](https://github.com/Relys/rpl2elf)

### Open RPL/RPX in IDA PRO
Youtube video:
[(188) [Wii U] Analyzing Wii U Executables with IDA Pro Setup Tutorial - YouTube](https://www.youtube.com/watch?v=bpB9zieutC4) 

Source code to the IDA pro loader: [ida_gel/src/wiiu at master · aerosoul94/ida_gel](https://github.com/aerosoul94/ida_gel/tree/master/src/wiiu) 

--- 
# WiiU Asset File Formats

## SZS Compressed File Format
A SZS file is actually just a YAZ0 compressed asset that could be any other format, it is just a common extension used to show its compressed with YAZ0. For more information:
[SZS (File Extension) - Custom Mario Kart](http://wiki.tockdom.com/wiki/SZS_(File_Extension))

## WiiU Localised Text Format (.msbt)
This is used in many different wiiU games and is presumably part of the wiiU SDK.

Thanks to the excellent folk over at the custom Mario Kart wik we have documentation about this format:
[MSBT (File Format) - MK8](http://mk8.tockdom.com/wiki/MSBT_(File_Format))

## .BCRES File Format (.CGFX, .BCMDL)
The BCRES format was used in many 3DS games but only used in one WiiU game that we know of which is `Battle Tank Hero`.

The game was released on 3DS first and then later ported to wiiU, but it is surprised this is the only game that uses this format. 

For more information visit:
[CGFX - The VG Resource Wiki](https://wiki.vg-resource.com/CGFX)

## GTX Texture format
[aboood40091/GTX-Extractor: Wii U 'GTX' Texture Extractor](https://github.com/aboood40091/GTX-Extractor) 

## WEM Audio Format (WWISE)
The format was developed by `WWise` for their audio creation software and used in a number of WiiU titles including:
* Batman Arkham Origins Blackgate
* Trine 2
* Chariot
* LOST REAVERS

## Binary caFe Layout IMage (.bflim)
The BFLIM file format (Binary caFe Layout IMage) is used to store layout images. [^6]
The following tools can handle BFLIM files:
* [BFLIM Tool](https://github.com/aboood40091/BFLIM-Tool/releases/tag/v1.0), by AboodXD
* [BFLIMtoGTX](https://mega.nz/#!KgRilZAR!qLGAx1yb9KduShuzxwZjd7nuN329nMjDQvrX9sy-CsE), by RandomTalkingBush
* [Wexos's Toolbox](http://mk8.tockdom.com/wiki/Wexos%27s_Toolbox), by [Wexos](http://mk8.tockdom.com/wiki/Wexos)

---
# Other WiiU File Formats

## Game Virtual Manual (.bfma)
The Game Manual format is a `SARC` archive that can be extracted using `UWizard`. It contains both xml and a number of `.arc` files [^5]. 

# References
[^1]: https://github.com/ajd4096/nuspy/blob/master/nuspy/nuspy.py 
[^2]: https://github.com/ihaveamac/wiiu-things/blob/master/wiiu_decrypt.py 
[^3]: https://gbatemp.net/threads/what-are-title-cert-title-tmd-and-title-tik-files.495526/ 
[^4]: https://gbatemp.net/threads/loadiine-wud-question-what-are-rpx-rpl-how-to-obtain.398773/ 
[^5]: https://gbatemp.net/threads/is-there-a-way-to-edit-the-bfma-manual-files.460790/ 
[^6]: http://mk8.tockdom.com/wiki/BFLIM_(File_Format)
