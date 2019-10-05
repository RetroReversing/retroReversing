---
layout: post
tags: 
- wiiU
- symbols
- games
title: Wii U UnStripped Binaries (Developer Symbols)
thumbnail: /public/consoles/Nintendo WiiU.png
youtube: "bl55B1cvLUA"
image: https://img.youtube.com/vi/bl55B1cvLUA/maxresdefault.jpg
permalink: /wii-u-unstripped/
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: Wii U UnStripped Binaries (Developer Symbols)
    url: #
recommend: wiiU
editlink: /wii/WiiUUnStrippedBinaries.md
references:
  - youtube
---

In the youtube video above you can see the list of Un-stripped WiiU binaries being processed from a list of IDs. The code shown in the video seems to just load a pre-existing list of IDs that are known un-stripped binaries and matches them to their actual game title. this is then dumped out to a text file which you can see here:
```
Here is the full list in text form:
https://pastebin.com/vRPFwNW4 (updates)
https://pastebin.com/a2x19WBA (titles)
```

All thanks to BullyWiiPlaza on youtube for searching through all the Wii eShop games to find the unstripped binaries and dumping them to a text file [^1]. Also he thanks 'Maschell' the developer of JNUSLib who does a lot of WiiU homebrew coding on github and whose Java code was the basis of this project [^2].

A post on GBATemp forums by BullyWiiPlaza mentions how it was accomplished, he downloaded all the available eShop titles (RPL and RPX) and used a script to check if they have debug symbols left in them or not [^3]. 

He mentions that he used the library JNUSLib which is a Java library for parsing Nintendo's Update Servers and bases it on Java code found in another github repository called nn_nex_logging_and_research.

This is a tool created by Maschell called `RPX Non-Stripped Downloader` and the source code can be found here:
https://github.com/Maschell/nn_nex_logging_and_research/blob/master/PC/function_finder/src/main/java/de/mas/wiiu/tools/rpxnonstrippeddownloader/StarterDownloader.java

As far as I can see that downloads all eShop titles from Nintendo Update Server and checks if they contain debug symbols or not by parsing the RPX files and treating them as ELF binaries.

Another interesting tool, this time developed in python is RPXTools symbols.py which can get the debug symbols from an RPX file: https://github.com/NWPlayer123/WiiUTools/blob/master/RPXTools/symbols.py


# References
[^1]: BullyWiiPlaza https://www.youtube.com/watch?v=bl55B1cvLUA
[^2]: Maschell Github https://github.com/Maschell
[^3]: Post on GBATemp - https://gbatemp.net/threads/all-unstripped-eshop-titles-updates.488416/
