---
permalink: /snes/
layout: post
console: 'snes'
title: 'Super Nintendo (Super Famicom) - Reverse engineering & Modding'
consoleimage: /public/consoles/Super Nintendo Entertainment System.png
thumbnail: /public/consoles/Super Nintendo Entertainment System.png
recommend: snes
recommendTitle: All SNES Posts
editlink: ../categories/consoles/SuperNintendo.md
excerpt: Awesome list of Super Nintendo Game Development and Reverse Engineering information
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Super Nintendo/Famicom (SNES) Reverse Engineering
    url: #
redirect_from:
  - /supernintendo
---
# Introduction
Welcome to our page dedicated to Super Nintendo reverse engineering! The Super Nintendo Entertainment System, or SNES, was a popular gaming console released by Nintendo in 1990. If you're interested in learning more about the technical aspects of this console and how it works, you've come to the right place. 

On this page, we've compiled a list of links to other pages that cover various topics related to Super Nintendo reverse engineering. Whether you're interested in understanding the hardware architecture of the console, analyzing game code, or exploring the many mods and hacks that have been created by enthusiasts over the years, you'll find a wealth of resources and information on the pages we've linked to. 

So grab your SNES controller, and get ready to dive into the exciting world of Super Nintendo reverse engineering!

---
# SNES Game Development Process

## How long did it take to develop games for the SNES back in the day?
On average, SNES game development could take anywhere from several months to a couple of years. Some simpler or shorter games might be developed more quickly, while larger, more complex titles could take longer.

Most game development teams only hand a handful of people working full time on the game, mostly programmers. Artists and Sound Engineers were often working on multiple projects at the same time. Music was usually created and added to the game near the end of the development process when the game was getting ready to be shipped.

Some examples of the length of time it took to develop Super Nintendo games are:
* **Spider Man & X-Men in Arcade's revenge** - Took roughly 6-7 months from start to final build using a team of 4 highly experienced game programmers, 2 talented musicians and 6 brilliant artists[^1]:
  - Programmers:	Mike Follin, Kevin Edwards, Stephen Ruddy and Michael Webb
  - Artwork:	Anthony Anderson, Craig Houston, David McLachlan, James Clarke, Jonathan M. Smith and Ste Pickford
  - Music:	Geoff Follin and Tim Follin
* **Super Mario World 2: Yoshi's Island** - Took exactly 3 years and 5 months to complete (February 1st, 1992 until June  29th 1995 [^2]) with a team of 12 programmers.
* **RPM Racing (Interplay)** - In an interview with SuperPro (October 1992) **Brain Fargo** explains that they only had **4-5 months** to implement the game after finding out the specs of the Super Nintendo. But he goes on to say that games after that took **1-3 years** on average to get a better level of polish. It was developed with the **Sluggo III** SNES development kit [^4].

---
## How would teams send their games to QA or to the press?
**FTP servers** were setup for sending builds across the world but for local testing the code would be flashed to an EEPROM chip (Electrically Erasable Programmable Read-Only Memory) and put in a cartridge shell (either an modified retail cartridge or a specialised cartridge.

---
## How large were SNES game development teams?
According to **Brain Fargo** of Interplay his SNES games had teams of 5 people on average working on a single game.

In an interview with **Shigeru Miyamoto** he states that development takes can get up to about 20 or so people in the later half of the development cycle [^9]:
> For our development teams, for the beginning of the first year its usually comprised of 3 to 4 people, then about half a year in we start adding people until about the 8 month mark, where we reach a team of 20 or so. A new game system determines about 60% of the game creation process. In my case I work on that nucleus of the game first. The maps, story, etc are all about 10 or 20%.

---
## How did SNES Game Development teams communicate?
Back in 1992 the internet was still finding its footing in the games industry and much of the communication was done via Fax, here is one example of a Fax sent between the Acclaim production team presumably in the US and the game programmers in the UK.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">31 years ago we were working on SNES Spider-Man and the X-Men in Arcade&#39;s Revenge. We had very little time on for this project and had 3 experienced coders on-board to get it done. Here&#39;s a FAX from production at Acclaim to give you a flavour of the pressure we were under 1/2. <a href="https://t.co/FrJ6XDIGJu">pic.twitter.com/FrJ6XDIGJu</a></p>&mdash; Kevin Edwards ( Retro Videogame development ) (@KevEdwardsRetro) <a href="https://twitter.com/KevEdwardsRetro/status/1715387308600394213?ref_src=twsrc%5Etfw">October 20, 2023</a></blockquote>

Although note that in the Fax they mention sending a build of the game to Nintendo via Modem for sound testing so the Internet was in use.

Email was also in use, even amongst japanese game developers such as Square as can be seen in an interview with **Hironobu Sakaguchi** who worked on Final Fantasy [^9]:
> I use a Macintosh to make the tools we use at Squaresoft, and I also use it when making SFC games. Our team is also connected on the local network, and we pass ideas around via e-mail. This way when one person has an idea, it can be shared with everyone.

---
# SNES Game Programming

## What would you need to write SNES games?
Pretty much every development team had their own ways of working back then, some had official development hardware and others had to make their own or license it from a thrid party development tool company.

You would need the following on your desk:
* Computer to write the code on (e.g **Apple II** [^4], **Sony NEWS** workstation)
* Either a modified retail SNES or a development Kit
* A CRT Monitor to connect to the SNES
* Cables to connect the modified SNES cart (or devkit) to the computer

On your computer of choice you would need:
* Text editor
* Assembler (e.g **Merlin** on the Apple II[^4], **asm816** on a **Sony NEWS** workstation)
* Linker
* Program to send the ROM data to the console
* Program to flash a ROM image to an EEPROM.
* Program to create/edit sounds (e.g **SynthLab** for music composition or **Sound Shop** [^4]) and program to convert sound to a SNES sound format

## What programming languages were used to write SNES games?
At least 90 percent for all commerical Super Nintendo games were written in raw 65c816 assembly language, however there have been some hints over the years of ORCA/C support but no confirmation on specific games [^5].

Once such game written in C for the SNES was **Super Noah's Ark 3D**, which although not licensed by Nintendo it was for sale in retail shops during the SNES lifespan [^7].

Also **The Western Design Center** has documentation for its software development platform called **Zardoz** that has a section called **Nintendo development** which has features specifically targeted for the SNES such as being able to assemble binaries into the ISX format [^6]!

## Were there any IDEs for the SNES?
Integrated Development Environments (IDEs) as we know them today were not as prevalent or sophisticated. However, there were some software tools and environments that provided integrated features for assembly language development back in the early 90s.

**Merlin** was a popular assembly language development environment for the Apple II. It provided an integrated editor, assembler, and debugger, making it a comprehensive tool for writing and debugging assembly code. This was used to write a number of Super Nintendo games for Interplay such as **RPM Racing** and the SNES port of **Out Of This World**[^4].

In Youtube footage from **Pernoelle** [^10], we can see a programmer working on the Super Nintendo game Pilotwings using an IDE back in 1990, but it is unclear which IDE is being used:
![Pilotwings development](https://github.com/user-attachments/assets/12925c41-58a7-4c79-8333-1341c9499133)

However looking closly at the keyboard and the PC we can see its a **Sony NEWS** workstation, so it must have been an IDE that supported that platform.

---
## Was there an official SDK?
**Yes**, we have a seperate page for the Official Super Nintendo Software Development kits:

{% include link-to-other-post.html post="/super-famicom-snes-sdk/" description="For more information about the **Super Nintendo** software development kit check out this post" %}

---
## ROM and RAM Mapping on the SNES

The Super Nintendo (SNES) features a **24-bit address space** split into 256 banks of **64KB** each.  
However, only select banks are addressable via the SNES's CPU at any given time, necessitating careful mapping of ROM, RAM, and I/O registers.  

### What is LoROM and HiROM?
The **LoROM** and **HiROM** define how cartridges interface with this segmented memory model.
* In **LoROM**, ROM data is mapped in 32KB chunks to the lower half of each bank (0x8000–0xFFFF), starting from bank 0x00. This allows for faster access and compatibility with 8-bit address registers but limits addressable space per bank.  
* **HiROM** maps 64KB ROM blocks starting from bank 0xC0 at address 0x0000, offering contiguous addressing at the cost of more complex bank switching.  

**FastROM** variants allow for **3.58MHz** access speeds over specific regions, compared to the standard 2.68 MHz, enhancing performance under HiROM configurations.  

### What is WRAM?
Internal Work RAM (WRAM) occupies **128KB**, mirrored throughout banks 0x7E–0x7F.  

For more information The [SNESdev Wiki Memory Map](https://snes.nesdev.org/wiki/Memory_map) provides the most authoritative breakdown of the SNES memory architecture.  

### What is MMIO? (0x2100–0x21FF)
Memory-mapped I/O (**MMIO**) registers control graphics (PPU), audio (APU), and DMA are primarily located in bank 0x00 and 0x80 from **0x2100** to **0x21FF**.  

The [Tale of LoROM and MMIO Emudev article](https://emudev.de/q00-snes/memory-mapping-the-tale-of-lorom-and-mmio) dives into the specifics of LoROM mapping and memory-mapped I/O access.

### What is the ROM Header? (0xFFC0–0xFFDF)
The ROM header is used to convey metadata about the cartridge, including its memory mapping configuration, it is essential for proper ROM emulation but ignored on the SNES hardware itself. 

It is typically just before the interrupt vector table but its physical location within the ROM file varies based on the memory mapping mode:
- **LoROM**: Header at offset 0x7FC0 in the ROM file.  
- **HiROM**: Header at offset 0xFFC0 in the ROM file.  
- **ExHiROM**: Header at offset 0x40FFC0 in the ROM file.  

These mappings align the header to $00:FFC0 in the SNES memory map, ensuring consistent access across different ROM configurations[^11].

#### What is the format of the ROM Header?

The ROM header comprises several fields that define the cartridge's characteristics:

- **0xFFC0–0xFFD4**: Game Title (21 bytes, ASCII)  
- **0xFFD5**: ROM Speed and Mapping Mode (e.g speeds: 2.68 MHz/3.58 MHz, modes: LoROM/HiROM)
- **0xFFD6**: Cartridge Type (e.g., presence of coprocessors, SRAM)  
- **0xFFD7**: ROM Size (encoded as 2^n KB)  
- **0xFFD8**: SRAM Size (encoded as 2^n KB)  
- **0xFFD9**: Region Code (e.g., NTSC, PAL)  
- **0xFFDA**: Developer ID  
- **0xFFDB**: ROM Version  
- **0xFFDC–0xFFDD**: Checksum Complement  
- **0xFFDE–0xFFDF**: Checksum  

<script type="module" src="/public/js/sandpack/sandpack.js"></script>
<rr-sandpack template="react">
{
  "/App.js": {
    "code": "export default function App() { return <h1>SNES header Example</h1>; }"
  },
  "/index.js": {
    "code": "import App from './App';\nimport { createRoot } from 'react-dom/client';\ncreateRoot(document.getElementById('root')).render(<App />);"
  },
  "/index.html": {
    "code": "<div id='root'></div>"
  }
}
</rr-sandpack>

---
# Sound and Music

For anyone interested in how Sound works on the SNES you should watch **SNES Audio System Overview** from **Retro Game Mechanics Explained** on Youtube:
<iframe width="560" height="315" src="https://www.youtube.com/embed/zrn0QavLMyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Hardware
If you're interested in reverse engineering software for the Super Nintendo gaming console, it's important to have a thorough understanding of the hardware that powers it. By comprehending the inner workings of the Super Nintendo hardware, you can better understand how the software interacts with the hardware and how you can potentially modify or enhance it.

This segment of our guide will provide you with detailed information and resources on the hardware of the Super Nintendo, including retail, prototype, and development hardware.

## Development Kit Hardware
We have a post all about the hardware that was used to develop for the Super Nintendo:
{% include link-to-other-post.html post="/super-famicom-snes-development-kit/" description="For more information about the **Super Nintendo** development hardware check out this post" %}

---
## Retail Console Hardware
For an in-depth look at the SNES Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/snes/" description="Copetti.org has an excellent tear down of the SNES Hardware and how it works" image="/public/consoles/Super Nintendo Entertainment System.png" title="Super Nintendo Entertainment System (SNES) Architecture - A Practical Analysis" %}

### Was the SNES backwards compatible with the NES?
No, but it was intended to be during early development of the SNES which we found out thanks to an interview with **Masayuki Uemura** [^8]:
> In truth, we actually wanted the Super Famicom to be able to play Famicom games too. We used a CPU that’s equipped with a 6502 emulation mode and everything. However, the sheer amount of games released for the Famicom, plus the fact that they often used different types of ROMs and chips made it too difficult to produce a perfect conversion.

---
## SNES in-flight Airplane hardware (Nintendo Gateway)
In 1993 Nintendo introduced an in-flight entertainment system called the Gateway, this system allowed passengers to play SNES games for about 4 USD an hour.

The Journalist **Ernie Smith** has written an excellent article on his site which you can access at [Will the In-Flight Entertainment System Survive COVID-19?](https://tedium.co/2020/06/19/in-flight-entertainment-system-covid-19-impact-history/) and also tweeted out the Nintendo Power article which talks about it: 
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Remember when you could play Super NES games on a plane? That was awesome. Nintendo Power, circa Feb. &#39;94: <a href="https://t.co/iKm6mLB8Us">pic.twitter.com/iKm6mLB8Us</a></p>&mdash; Ernie Smith (@ShortFormErnie) <a href="https://twitter.com/ShortFormErnie/status/834989238810775552?ref_src=twsrc%5Etfw">February 24, 2017</a></blockquote>

Also if you prefer video-based content the youtuber **Top Hat Gaming Man** has created an excellent video on the subject:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ItKIhAiNCLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
 ## Satellaview
 The **Satellaview** was a satellite add on for the Super Famicom only ever released in Japan on the 24th April 1995. It allowed users to download games, virtual magazines and listen to radio broadcasts.
 
 The sad thing about the Satellaview is due to the nature of the technology most of the content has been lost to time and has only been partially preserved by finding old recordings on people's Satellaview cartridges. Some content was broadcast but never downloaded, or soon overwritten with newer content so there is no other way to obtain the data.
 
 In 2020 Luigiblood did a presentation to the **AirGap2020** conference about **Satellaview Reverse Engineering** which can be watched below:
 <iframe width="560" height="315" src="https://www.youtube.com/embed/qUAmk8dYmrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
 The **Satellaview** has little Memory Packs with only 1MB (8 MegaBit) of flash storage space that would slot into the BSX Satellaview cartridges, it was a cartridge that had a smaller cartridge slot on top. Note that there was one other game that supported these Memory Packs, it was a game creator called **RPG Maker**.
 
---
# Games
The SNES wouldn't be as fondly remembered today if it didn't have its huge library of both first-party and third party games. This section will look at some of those games for those of you looking for inspiration for a new reversing project.  

## Official Retail SNES Game Source Code
If you are interested to see officially released or leaked source code check for the Super Nintendo Entertainment System check out our other post:
{% include link-to-other-post.html post="/source-code/retail-console-source-code" description="For the official source code check out this post." %}

## Reverse Engineered SNES Games
If you are interested to see existing reversing projects for the SNES check out our other post specifically on this topic:
{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For the list of decompiled games check out this post." %}

## The Polygons of Another World
For an in-depth look at how the game **Another World** was ported to the Super Nintendo check out this article:
{% include link-to-other-site.html url="http://fabiensanglard.net/another_world_polygons_SNES/index.html" description="The polygons of Another World" image="http://fabiensanglard.net/another_world_polygons_SNES/lester_snes.png" title="The polygons of Another World"  %}

## Remakes for the GBA
As soon as the Game Boy Advance (GBA) was annonced people were describing it as a portable Super Nintendo, Nintendo themselves contribute to this message by re-releasing many of their SNES games for the platform. In total 48 SNES games were released on the GBA, most from Nintendo themselves but third party publishers got on board too.

The GBA is a completely different beast from the SNES in terms of architecture and with most SNES games written in pure 6502 assembly it wasn't possible to just do a straight port. Most of the games needed to be re-written from scratch to support the new portable console.
During this process a lot of changes were made to fit the much smaller non-backlit screen of the GBA, such as increasing the sprite size and brightening the contrast. 

The Youtuber **CaptRobau** has an excellent video showing off the graphical differences between all 48 games that were remade for the GBA:
<iframe width="560" height="315" src="https://www.youtube.com/embed/xurqNOafU6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

---
# SNES Emulation

## State of SNES Emulation
Every three years **Near/Byuu** wrote an excellent article on the current status of Super Nintendo Emulation, the last version is from 2019, it covers both bsnes and higen. Sadly with the passing of Near this is the last state of emulation, however it still still very much worth a read, and to **remember how much they contributed** to the SNES emulation scene.

{% include link-to-other-site.html url="https://saveweb.github.io/near.sh/articles/emulation/state-of-emulation-v.html" description="The latest status of Super Nintendo emulation, including new and upcoming features for bsnes and higen" image="https://near.sh/images/articles/emulation/state-of-emulation-v/bsnes-widescreen.png" title="SNES Emulation Status 2019"  %}

---
# Game Modification and ROM Hacking

## SNES Save Editing with Link to the Past
<section class="postSection">
    <iframe class="wow slideInLeft postImage" width="560" height="315" src="https://www.youtube.com/embed/dRwjBcqHMpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div markdown="1">
Excellent video by **Displaced Gamers** on how to edit SRAM saves for a Link to the Past on Super Nintendo, this is not actually **ROM Hacking** as the ROM is exactly the same, it is only the SRAM that is modified.

</div>
</section>

---
# All Posts
<div>

{% include console.html %}
</div>

---
# References
[^1]: [Kevin Edwards ( Retro Videogame development ) on X: "@BananaBytesBr IIRC about 6-7 months from start to final build." / X](https://twitter.com/KevEdwardsRetro/status/1715423462066360653)
[^2]: [Development:Super Mario World 2: Yoshi's Island - The Cutting Room Floor](https://tcrf.net/Development:Super_Mario_World_2:_Yoshi%27s_Island)
[^3]: Super Play issue 11 October 1993
[^4]: [Sluggo III - Super Famicom Development Wiki](https://wiki.superfamicom.org/sluggo-iii)
[^5]: [65C816 Cross Development Tools](https://groups.google.com/g/comp.sys.apple2/c/HVO_s48q7Kw/m/wcRA5s07jdoJ?pli=1)
[^6]: https://www.westerndesigncenter.com/wdc/documentation/Assembler_Linker.pdf
[^7]: [Super Noah's Ark 3D (USA) (Source Code) - elude visibility](https://eludevisibility.org/super-noahs-ark-3d-source-code)
[^8]: [Masayuki Uemura – The Creator of the Famicom - shmuplations.com](https://shmuplations.com/masayukiuemura/) 
[^9]: [1994 Game Developers – Interview Collection - shmuplations.com](https://shmuplations.com/1994gamedevs/)
[^10]: [Footage Inside 1990 Nintendo Headquarters in Kyoto - YouTube](https://www.youtube.com/watch?v=FlOAd81a1aI)
[^11]: [SNESdev Wiki - ROM Header](https://snes.nesdev.org/wiki/ROM_header) 
