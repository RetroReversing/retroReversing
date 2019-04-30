---
layout: post
tags: 
- sega
- dreamcast
- symbols
- debug
title: Sega Dreamcast Games with Debug Symbols
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/consoles/Sega Dreamcast.png
permalink: /sega-dreamcast-game-debug-symbols
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: Sega Dreamcast Games with Debug Symbols
    url: #
recommend:
- dreamcast
- symbols
editlink: /dreamcast/DreamcastGamesWithDebugSymbols.md
---

Debug symbols pretty much open a game wide open to budding verse engineers. These files make reverse engineering almost a piece of cake, giving useful names to each of the functions in an executable and sometimes even full local variable naming and source code references.

However most developers are very careful not to leak any debug symbols, especially into retail releases, so most games will not have publicly available debug symbols. But if you look very hard you might be able to find a game or two compiled for a console that have debug symbols left in by mistake.

The Dreamcast is no different, although unlike the Sega Saturn before it, the games that have symbols are much harder to find and very rare. 

Also it is further complicated due to the fact that there were actually two official Software Development Kits (SDKs) available for the dreamcast. One was the standard `Katana` SDK that  used custom libraries written by Sega and the other was the Windows CE SDK written by microsoft with added dreamcast functions.

The Windows CE SDK was built to make porting from PC to dreamcast easier but required the game to ship with Windows CE libraries and to be compiled by the Microsoft C Compiler/Assembler suite.

---
# PDB files for WinCE executables
The debug symbols for games using the WinCE SDK tend to be put in Program Database files (.PDB) and are external to the game executable. Sadly very few games shipped with these full pdb files in tact on the retail disc, but there are a few games that accidently contained some incomplete pdb files.

Although these PDB files dont cover the entire source code for the games it can be a useful start when reversing one of these games.

## Taxi 2 - Le Jeu
The french game Taxi 2 contained the PDB files for all the libraries provided by the WindowsCE runtime environment for dreamcast. Also of note is that the NTSC release of Armada also contained the PDB files for the same libraries but they have different md5 hashes so likely from different versions of the Windows CE runtime environment.

PDB File | Md5 Hash | Notes
---|---|---
WINCE/IMEJPPUI.PDB | 6f5aac1bf15ed29bac2bde7f20c09abd | 
WINCE/NETFLASH.PDB | 2f0c91d6349f0180ef2a432887f9ee78 | 
WINCE/DDI.PDB | 7a0475d3944db3fdb04c35c6efe955c6 | 
WINCE/DPMODEMX.PDB | ef1c6043e93adf89832f400b06ae1f70 | 
WINCE/MRASENTRY.PDB | b00d54787d2501208db1adc44a269532 | 
WINCE/SERIAL.PDB | be068a5cc2d9251615c907595f8ab2d4 | 
/WINCE/MPPP.PDB | ffa4e1d4e53e3f50c8b51f168e253cb7 | 
/WINCE/JSCRIPT.PDB | 1922e087c3d14125a6bfe261b7023ae5 | 
/WINCE/URLMON.PDB | 848491a8ff3ad6c424e108a6f1b20b44 | 
/WINCE/TIMER.PDB | 01da19d9a794d9a80f812dd163aeefb3 | 
/WINCE/DMUSIC.PDB | 7ba57234ca02b601d8206bacb4bbfc3d | 
/WINCE/WDMLIB.PDB | 4e6baf98669347559c3f3f6e7e3148af | 
/WINCE/AMSTREAM.PDB | d2649a8ba34a15c0787ee02088d66669 | 
/WINCE/MRASDIAL.PDB | 37fc61f89f96f045122f5579f409b0db | 
/WINCE/DDHAL.PDB | cb7980ce0aa02fce0ac8df35678317a0 | 
/WINCE/DMLOADER.PDB | b10343666d5367efa606999dea08871c | 
/WINCE/SENDKEY.PDB | 39673bbc3b9868200cc9eb2ce879402a | 
/WINCE/DINPUTX.PDB | 80f2f681f0ec52fee0d83642d2adc65b | 
/WINCE/SH4SER.PDB | e6d83904b4cec7f27dabacf63b48bf5b | 
/WINCE/MAPLE.PDB | 7024df629207f9d2933882e8b57ba3dd | 
/WINCE/MSHTML.PDB | 98f0da4a152625b9233b4e2036ac3683 | 
/WINCE/WSEGACD.PDB | 6d80b4857534df779563c7d81305ff1e | 
/WINCE/TOOLHELP.PDB | c1bfd3d289271ec0c188eb2955373fcf | 
/WINCE/TANKANJI.PDB | 96f6185994890346efab2204a9a42076 | 
/WINCE/DBG.PDB | 8c68aa19ca867f16fb44fa69a45429e0 | 
/WINCE/IECEUI.PDB | f822550d3217de63f15905a092695943 | 
/WINCE/DPLAYX.PDB | 1f20a4dbe4008b00cab5d2bee01fb1bd | 
/WINCE/MEMTOOL.PDB | 342c579283dea04da50635d843e7475d | 
/WINCE/SHELL.PDB | 29818f5057786e277b3876dbbe8cc5bf | 
/WINCE/SHLWAPI.PDB | 8c10158ffeb2effd328e2fe5d8302fd5 | 
/WINCE/DMBAND.PDB | 1ac4d18f288e223387517930a1c66637 | 
/WINCE/MSADPCM.PDB | 03046a5031844eac7cc569515a070196 | 
/WINCE/MICROSTK.PDB | b6d52beeff2376bdfffb88d958d7b2ce | 
/WINCE/ICCVID.PDB | d0b252d5cdf97b8eae841bc0031a0d3d | 
/WINCE/CEMM.PDB | 1a4386d0c114637768825d88d14c78ab | 
/WINCE/DMIME.PDB | 99a5cc3a058800d13c811f54c61bba79 | 
/WINCE/CEGSM.PDB | d0e5a9d213fa27765533e3b343bed706 | 
/WINCE/MMTIMER.PDB | 73df42ae62e3e519c450ced1b3e7a260 | 
/WINCE/SERF.PDB | 49bcc93e670c830ed6140e3612253970 | 
/WINCE/MAPLEDEV.PDB | e4a4c08660fff95f396a1b76e2a5eb06 | 
/WINCE/PROFDLL.PDB | b726b6e700577ac031276137ee409c46 | 
/WINCE/MLANG.PDB | 608461596ee74a63c534f2fc6b085acf | 
/WINCE/ICM.PDB | 21f88d3b1ed893675c4a39850eeae05f | 
/WINCE/DMSTYLE.PDB | ea4f688ba564b80143a8b7eb6f7f8f06 | 
/WINCE/DPWSOCKX.PDB | 7bf36df6cf92fe82f86ef37f1e321a96 | 
/WINCE/DPLDPLAY.PDB | 3757ab16452c0cadd1f545c431774d62 | 
/WINCE/LOADDBG.PDB | 2a8f6653f30f4c224922cde229739baa | 
/WINCE/MSRLE32.PDB | 45ef2dd47c31f31b5a5a5bfbe2924f41 | 
/WINCE/SHDOCVW.PDB | 3beabcae6acac63ab1e3d5110aa5504b | 
/WINCE/SEGAMIDI.PDB | d9bdf522cb01ef00a9c3c55a06deabc8 | 
/WINCE/DTRACE.PDB | 261dc62ed89e60a174fd8782a173e027 | 
/WINCE/PLATUTIL.PDB | 4d5f3442b63da62dfdb2afbc383ec9bc | 
/WINCE/PCMCONV.PDB | 10bb816afe70b89776ad2cff11cd4d44 | 
/WINCE/WDEVICE.PDB | e608d2a64e7c5b846a80f1fa0e9d2d4a | 
/WINCE/DSOUND.PDB | c1b58163abc63a62ec02f23108581a84 | 
/WINCE/PHONETIC.PDB | b3423caa3f865fd854dd24c2a462f834 | 
/WINCE/WDMOEM.PDB | f0c97921378e026fdf80dd620cb5addf | 
/WINCE/GETHINFO.PDB | f42c92cf802716be223aac7ae8460080 | 
/WINCE/IMGUTIL.PDB | 25bf03f1816625bdeb06359e74fefb02 | 
/WINCE/WINSOCK.PDB | f3bbb266d7db9dcd8bbc6cd38d7ce2a6 | 
/WINCE/QUARTZ.PDB | b6beee41e50066fbcd1023efd0ae721d | 
/WINCE/VKEYBD.PDB | 2c4c7ec9d10ccc94f191fb2061f40c01 | 
/WINCE/MSCHATPR.PDB | d3fff1f7db4170f83a7845dc34e741c6 | 
/WINCE/SYSSTART.PDB | ac0667e3c5cd6e60a41e2dbbefed87b4 | 
/WINCE/WININET.PDB | 5b897f635c639fbd01634f666adb850b | 
/WINCE/VMUPROTO.PDB | b9416a7b18e24cba80d81b3da598631c | 
/WINCE/DMCOMPOS.PDB | b6bc29fc907956015f93e88360fef80e | 
/WINCE/IMAADPCM.PDB | e3b5db45278bf750f60d04117385bef2 | 
/WINCE/IMEJPP.PDB | ae1960bea798a07a2d124e75a1f7e0ec | 
/WINCE/OLEAUT32.PDB | 5cabc49947ab6c80ea46459c21d3bbbf | 
/WINCE/PNGFILT.PDB | 8a594e11f1b590b447842a4caa9042ac | 
/WINCE/SECUR32.PDB | c2a3331bd80c7117b92db9d8ed120f5a | 
/WINCE/VMIMIME.PDB | b386e6121076488d918bd571580cb37a | 
/WINCE/SEG_ROCK.PDB | 453bd7c35f93e56c8c7a64dd215b2d45 | 
/WINCE/MSG711.PDB | 4bb4ec3ff7f0bab234e4764e49ccfbba | 
/WINCE/IECEEXT.PDB | 69f3b3c4ece400917f3058bcde26f356 | 
/WINCE/SNDCORE.PDB | 45b095dad4466c4af848cf2f1aa7edf8 | 
/WINCE/SCHANNEL.PDB | 05ac9c6c854f3c7a59f0152cb4ac1977 | 
/WINCE/MSACMCE.PDB | 415c1bf169f661a86f5e3775361d66a0 | 
/WINCE/D3DIM.PDB | dc101a1f68d59818921cff9fa0859ad8 | 
/WINCE/DDRAW.PDB | f7f1a6ad153bcb8bd4a2e5dfe4015e79 | 


---
# Other interesting content 

## Marionette Company
The following  strings inside the Marionette Company main executable suggests that the Windows CE SDK for dreamcast was called dragon, but this is unconfirmed.
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.dll
> d:\\dragon11\\platform\\KATANA\\target\\SHx\\SH4\\CE\\retail\\segamidi.pdb

This also confirms that there was a SegaMidi dynamic library (.dll) that came as part of the Dreamcast version of the WindowsCE SDK.
