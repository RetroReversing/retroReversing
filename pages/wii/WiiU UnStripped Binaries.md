---
layout: post
tags: 
- wii
- symbols
- games
title: Wii U UnStripped Binaries (Developer Symbols)
thumbnail: /public/consoles/Wii U.png
youtube: "bl55B1cvLUA"
image: https://img.youtube.com/vi/bl55B1cvLUA/maxresdefault.jpg
permalink: /wii-u-unstripped/
breadcrumbs:
  - name: Home
    url: /
  - name: Wii
    url: /wii
  - name: Wii U UnStripped Binaries (Developer Symbols)
    url: #
recommend: wii
editlink: /wii/WiiU UnStripped Binaries.md
references:
  - youtube
---

In the youtube video above you can see the list of Un-stripped WiiU binaries being processed from a list of IDs. Unless I am mistaken the code shown in the video seems to just load a pre-existing list of IDs that are known un-stripped binaries and is not actually searching through a hard drive of games. So the quesrtion is where did the original list of IDs come from?

You can see the full un-stripped list here:
```
Here is the full list in text form:
https://pastebin.com/vRPFwNW4 (updates)
https://pastebin.com/a2x19WBA (titles)
```
All thanks to BullyWiiPlaza on youtube for searching through all their Wii eShop games to find the unstripped binaries [^1].


A post on GBATemp forums by BullyWiiPlaza mentions how it was accomplished, he downloaded all the available eShop titles (RPL and RPX) and used a script to check if they have debug symbols left in them or not [^3]. He mentions that he used the library JNUSLib which is a Java library for parsing Nintendo's Update Servers and bases it on Java code found in another github repository called nn_nex_logging_and_research here: https://github.com/Maschell/nn_nex_logging_and_research/blob/master/PC/function_finder/src/main/java/de/mas/wiiu/tools/rpxnonstrippeddownloader/StarterDownloader.java

That file contains the code to find executables that have the debug symbols in them.

Also he thanks 'Maschell' the developer of JNUSLib who does a lot of WiiU homebrew coding on github and whose Java code was the basis of this project [^2].

# References
[^1]: BullyWiiPlaza https://www.youtube.com/watch?v=bl55B1cvLUA
[^2]: Maschell Github https://github.com/Maschell
[^3]: Post on GBATemp - https://gbatemp.net/threads/all-unstripped-eshop-titles-updates.488416/
