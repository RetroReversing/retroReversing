---
layout: post
tags: 
- leak
- ps1
title: Capcom Leaks  
thumbnail: /public/consoles/Sony Playstation.png
image: /public/images/leaks/Capcom Leaks.jpg
permalink: /capcomleaks
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Capcom Leaks
    url: #
recommend: 
- leak
- ps1
redirect_from:
  - /capcom
editlink: /leaks/CapcomLeaks.md
twitterimage: https://www.retroreversing.com/public/images/leaks/Capcom Leaks.jpg
updatedAt: '2020-11-17'
---

On 1st November 2020 CAPCOM was targeted by known hacker group **RagnarLeaks** and some source code and private data was leaked to the dark web. This post will only cover source code that was found in the leak, we only support the preservation of old playstation source code.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Information on the RAGNAR malware, that was responsible for compromising Capcom&#39;s servers:<a href="https://t.co/oZDDbKMQNz">https://t.co/oZDDbKMQNz</a></p>&mdash; /PPG/ (@pokeprotos) <a href="https://twitter.com/pokeprotos/status/1328454646847787008?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote>

# Files leaked
There were four archives leaked, and due to size were split into multiple 7Zip parts.
1. **CAPCOMinr1.7z** - No source code (please avoid downloading if you see this file uploaded)
2. **CAPCOMPart2ID.7z** - Umbrella Chronicles source code (21.1GB in 3 parts)
3.  **Capcom3ID451.7z** - Devil May Cry 2 Source code ( 11.2GB in 2 parts)
4. **CAPCOM4_ID442.7z** - The Misadventures of Tron Bonne PS1 source code (1.38GB)

---
# Devil May Cry 2 Source code (Capcom3ID451.7z)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A backup of a disk containing DMC2 code was found in the leak. <br><br>Original is probably in cold storage, sitting at some undisclosed location.<br><br>The disk contains all software and data needed to compile and run the game. <a href="https://t.co/AVd17xjJvc">pic.twitter.com/AVd17xjJvc</a></p>&mdash; /PPG/ (@pokeprotos) <a href="https://twitter.com/pokeprotos/status/1328189538326388736?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote>

---
# The Misadventures of Tron Bonne (CAPCOM4_ID442.7z)
The root folder is called **PS_トロンにコブン** which is the Japanese name for the game plus the PS_ prefix for Playstation. It contains three sub folders inside it:
* 北米版 - North American Edition
* PAL版 - PAL version (Europe)
* 国内版 - Domestic version (Japan)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Plus the source code of &quot;The Misadventures of Tron Bonne&quot; (screenshot not mine): <a href="https://t.co/eutXjxgjel">pic.twitter.com/eutXjxgjel</a></p>&mdash; WaluigiBSOD (@WaluigiBSOD) <a href="https://twitter.com/WaluigiBSOD/status/1328411114980470784?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote> 

---
## PAL Version (/PAL版)
There are three folders in the PAL version:
* ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ- Master ROM image
* TRON_CD1 - PAL Source Code
* TRON_CD2 - PAL Tools

---
## North American Version (/北米版) 
there are four folders in the North American version:
* ﾏｽﾀｰﾛﾑｲﾒｰｼﾞ - Master ROM image
* disc1 - NA Source Code
* disc2 - Tools developed by matsuda and shingaki
* disc3 - NA Tools

---
## Japanese Version (/国内版) 
Te Japanese version contains more folders than the other two due to it containing some development tools.
* tools - tools developed by each member of the development team
* library - development software such as Multi-ICE
* ﾏｽﾀｰﾛﾑﾃﾞｰﾀ - Master ROM data
* pocket - Pocketstation source code
* psx - PS1 source code and assets

### Tools (/国内版/tools)
Each folder belongs to a member of the development team:
* ito - Souichi Itou?
* matsuda - Kouetsu Matsuda
* misawa - Tsuyoshi Misawa
* nucky - ?
* sakano - Mitsunori Sakano
* shingaki - Hidekazu Shingaki
* tuji - ?
