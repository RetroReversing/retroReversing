---
permalink: /companies/snsystems/
layout: post
console: snsystems
recommend: 
- snsystems
- sdk
- industry
tags:
- companies
- industry
- snsystems
recommendTitle: All SN Systems Posts
title: SN Systems (Creator of Development Tools)
image: /public/images/companies/SN Systems - Company.jpg
twitterimage: https://www.retroreversing.com/public/images/companies/SN Systems - Company.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Companies
    url: /companies
  - name: SN Systems
    url: #
redirect_from:
  - /snsystems
  - /sn-systems
  - /snsystem
editlink: ../categories/companies/snsystems.md
updatedAt: '2020-08-31'
---

# History of SN Systems
SN Systems is a company that specialised in creating development tools for game developers in the UK, it was founded in 1988 by **Martin Day** and **Andy Beveridge** [^1].

They were looking for good development tools for the **Atari ST** and **CBM Amiga** but as none met their criteria they decided to create their own, and thankfully they did as without this, game development would not be the same today.

The development kits they ended up building would span multiple console generations across all the different competitors, such as:
* **Commodore Amiga 1200 and 600**
* **Williams Phoenix Arcade Board** - Never seen any other reference to this development kit apart from it being listed in the SN64 Manual
* **SEGA MegaDrive/Genesis** - SNASM65k
* **SEGA 32X**
* **SEGA Mega-CD** - SNASM2
* **Super Nintendo Entertainment System** - PSY-Q
* **Sony PlayStation** - PSY-Q -> SDevTC
* **SEGA Saturn** - PSY-Q
* **Nintendo 64** - SN64 -> ProDG

## SNASM - SN Systems Assembler
Their first product was the **SN Systems Assembler** (SNASM) which was such a success that fellow British-based development tool creator **Cross Products** decided to license it and thus it became the de facto standard for Mega Drive Game Development around the world [^1]. 

The Sega Mega Drive version was known as **SNASM65k**, but there were multiple versions that could target multiple CPU architectures all from a similar interface, very handy for developers working across different platforms!

### SNASM2
Cross Products then built upon the product and released their own version called SNASM2, which would later become a competitor for SN Systems next development kit known as PSY-Q. They are also a company worth learning about, we have a seperate post on their development kit products such as **SNASM2**:
{% include link-to-other-post.html post="/companies/crossproducts/" description="For more information on Cross Products check out this post." %}

---
## SN64 - Nintendo 64 Development Kit
**SN64** was a software development kit for the Nintendo 64 created by **SN Systems** and was especially popular with 3rd party game developers in the UK, but was never used by first or second party Nintendo 64 developers, so not many games were released that were built by it.

{% include link-to-other-post.html post="/sn64-sdk-sn-systems" description="For more information on SN64 check out this post." %}

---
## PSY-Q - SNES, Saturn and PS1
PSY-Q was a development kit born from a partnership between popular UK-based game developer **Psygnosis** and **SN Systems** to develop a state-of-the-art development kit based on the **C-programming language**.

It was released for platforms such as the **Super Nintendo** [^5] and **SEGA Saturn** but is most famous for its line of **Sony PlayStation 1** Software Development Kits which were incredibly popular.

SN Systems were themselves bought by **Sony** in 2005 to exclusively create development tools for their upcoming **Playstation 3 hardware**. 

### PSY-Q for Super Nintendo
The PSY-Q development kit was available for a wide range of platforms including the Super Nintendo where it was distributed with a custom development cartridge similar to a flash cartridge.

{% include link-to-other-post.html post="/super-famicom-snes-development-kit/" description="For more information on the Super Nintendo version of PSY-Q check out this post." %}

### PSY-Q for Sony Playstation 1
The PSY-Q development was such a success for Sony PS1 development that it actually became the officially licensed development kit for the platform. This was thanks to the partnership with Psygnosis as they had recently been bought by Sony and used this to present the SN Systems development kit to the Sony Management team [^2].

{% include link-to-other-post.html post="/official-playstation-1-software-development-kit-(psyq)/" description="For more information on the Sony Playstation 1 version of PSY-Q check out this post." %}

Note that PSY-Q for PS1 was later rebranded as **SDevTC** (Sony Developer Toolchain) sometime before August 1999 as it is mentioned the rebranding in the Official **Run-Time Library Overview** from August 1999.

### PSY-Q for SEGA Saturn
Even although Psygnosis were bought by Sony in 1993 (which held the Psy-Q branding), it supported a competing platform also under the PSY-Q branding, the Sega Saturn!

{% include link-to-other-post.html post="/psyq-sega-saturn/" description="For more information on the SEGA Saturn version of PSY-Q check out this post." %}

---
## ProDG - PS2, Gamecube, GBA and PSP
ProDG was the next step for SN Systems and provided development kits for both the **Sony PS2** in 2000 and then the **Nintendo GameCube** in 2001 under this brand name, presumably this had nothing to do with Psygnosis at this stage.

Although the name **ProDG** was originally used to refer to the SN Systems IDE that supported PS1 & N64 development back in 1998 (released in June 1998 [^4]), it seems they re-used this brand to refer to the whole development kit and not just the IDE [^3].

### ProDG for GameCube
SN Systems released their ProDG development kit for GameCube in 2001 and worked alongside the official Nintendo GameCube development kit (NR-Reader) by providing a **SN-TDEV** that was used for efficient debugging on the system.

{% include link-to-other-post.html post="/prodg-gamecube" description="For more information on the GameCube version of ProDG check out this post." %}

### ProDG for GBA
There was also a version of ProDG available for the **Game Boy Advance** released in 2001 as an alternative to the official development kit from Nintendo.

{% include link-to-other-post.html post="/game-boy-advance-development-kit/" description="For more information on the GBA version of ProDG check out this post." %}

### ProDG for PSP
ProDG was the third party SDK developed by SN Systems and later incorporated into the official PSP SDK when they got bought by Sony. 

We have a post specifically about this SDK:
{% include link-to-other-post.html post="/sn-systems-pro-dg-psp-sdk/" description="For more information on the files in the SN Systems ProDG PSP SDK check out this post." %}

---
## SN Systems Distributed Build System (SN-DBS)
In issue 78 of the magazine **Develop** it was announced that version 2 of **SN-DBS** would be free for all developers on PS2, PS3 and PSP:
![SN-DBS article from Develop magazine](https://github.com/user-attachments/assets/b75cb8d5-09b0-4db6-8651-a094fdac5de7)


---
# All Posts mentioning SN Systems
<div>

{% include console.html %}
</div>

---
# References
[^1]: https://web.archive.org/web/19970521224105/http://www.snsys.com:80/
[^2]: Next Generation Magazine June 1995 issue
[^3]: [Various goodies for yall :) PlayStation Development Network](http://www.psxdev.net/forum/viewtopic.php?t=1563)
[^4]: [SN Systems](https://web.archive.org/web/19980523231210/http://www.snsys.com/snsys/feature.asp?id=5)
[^5]: Official SN Systems "PC Development System for the Nintendo 64" guide (Thanks to Ultra64.ca)
