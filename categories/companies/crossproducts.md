---
layout: post
permalink: /companies/crossproducts/
console: crossproducts
recommend: crossproducts
recommendTitle: All CrossProducts Posts
title: Cross Products (Creator of Development Tools)
image: /public/images/companies/Cross Product - Company.jpg
twitterimage: https://www.retroreversing.com/public/images/companies/Cross Product - Company.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Companies
    url: /
  - name: Cross Products
    url: #
redirect_from:
  - /cross-products
  - /crossproducts
editlink: ../categories/companies/crossproducts.md
updatedAt: '2020-09-05'
---

# History of Cross Products
Cross Products is a company that specialised in development tools for game programming, located in the UK and founded in 1989 by by Ian Oliver and Andy Craven [^1].

Cross Products had such a successful development kit that it was the industry standard during the Mega Drive era, this caused SEGA to purchase the company in 1994 for an undiscolves sum of money [^1].


Archived Cross Products Official Website: https://web.archive.org/web/19970217093645/http://www.crossprod.co.uk/company.htm

{% include link-to-other-site.html url="https://segaretro.org/Cross_Products" description="More information about Cross Products on SegaRetro." image="https://segaretro.org/images/thumb/6/65/CrossProducts_logo.svg/938px-CrossProducts_logo.svg.png" title="Cross Products on SegaRetro"  %}

---
# Products

## SNASM
SNasm (Spiny Norman's Assembler) was developed by Martin Day (aka Spiny Norman) in collaboration with the founders of Cross Products Ian Oliver and Andy Craven. It was licensed to Cross products for sale as paert of their first commercial development kit for the Atari ST and Amiga systems [^3].

Note that Spiny Norman (Martin Day) would go on to found a rival development tools company known as SN Systems (Spiny Norman Systems) but they did not distribute SNASM itself.

{% include link-to-other-post.html post="/companies/snsystems/" description="For more information about SN Systems and their own development kits check out this post." %}

SNASM was mentioned in **The Games Machine** UK magazine in issue 29 (April 1990) where it mentions that the development kit was still in Pre-release stage, cost £600 and runs on PC [^2]. 

It mentions that its developed as a collaboration between **Realtime Games** (Ian Oliver) and **Vektor Graphics** (Andy Craven) as a cross-platform development kit for the Atari ST, Amiga and Mac. Unfortunetly the article fails to mention the other lead developer Martin Day, presumably because the issue was mainly focusing on both Realtime and Vektor development studios.

It claims to compile 12K lines of source code in just 5 seconds, which was a huge benefit as compiling full games at the time could take upwards of 15 minutes, so the faster the compiler the less developer time wasted.

The original SNASM only supported Motorola 68K processors, but that allowed support for 3 major platforms, the Amiga, Atari ST and Apple II, this would also form the basis of Sega Mega Drive support which also used the processor.

{% include link-to-other-site.html url="https://segaretro.org/SNASM68K" description="More information about SNASM68K on SegaRetro." title="SNASM68K - Sega Retro"  %}

### Companies that used SNASM
Companies that have confirmed use of SNASM include:
* System 3 - Last Ninja 3 [^5]

### CPUs Supported
As SNASM was a cross assembler it supported multiple processors, which was one of the main advantages to the toolchain. 
Each assembler was named with prefix SNASM and suffix based on the processor family.
* SNASM68K - Motorola 68K (Amiga, Atari ST, Atari Jaguar, Sega Mega Drive)
* SNASM658 - WDC 65c816 (Super Nintendo)

## SNASM Platforms supported
In the May 1995 Price List it mentions that SNASM2 was available to buy for the following platforms:
* Amiga 600/1200 (SNASM68K)
* Sega Genesis/Mega Drive (SNASM68K)
* Sega 32X (SNASM68K)
* Mega CD (SNASM68K)
* Sega Saturn
* Super Nintendo Entertainment system (SNASM658)
* Jaguar
* Philips CDi

### SNASM2 for Philips CDi
SNASM2 was used for the CDi port of Micro Machines by Codemasters developer Ashley Hogg, it was a PC based development environment that connected to the CDi via SCSI [^4].

### SNASM658 for Super Nintendo
The SNASM658 was the Super Nintendo version of the SNASM2 development kit and came with a Super Nintendo Cartridge and PCI cartridge to download ROMS from a developer PC and run on a retail system.

{% include link-to-other-post.html post="/super-famicom-snes-development-kit/" description="For more information about the SNASM658 and other SNES dev kits check out this post." %}

### SNASM for Atari ST
The Atari ST was one of the first platforms supported by the original SNASM development kit, it allowed developing on a PC and debugging on an Atari ST, with the main benefit being that crashes on the Atari didn't affect development compared to editing on the Atari ST itself.

{% include link-to-other-site.html url="https://segaretro.org/SNASM68K" description="More information about SNASM Devkit Box for the Atari ST at Computing History" title="SNASM Devkit Box for the Atart ST - Peripheral - Computing History]" image="https://www.computinghistory.org.uk/userdata/images/large/83/67/product-118367.jpg"  %}

---
# All Posts mentioning Cross Products
<div>

{% include console.html %}
</div>

---
# References
[^1]: [Cross Products](https://segaretro.org/Cross_Products)
[^2]: The Games Machine Issue 29 April 1990
[^3]: [SN Systems](https://segaretro.org/SN_Systems)
[^4]: [The Black Moon Project](http://www.blackmoonproject.co.uk/interviews/ashley_hogg.php)
[^5]: [Last Ninja 3 - WikiMili](https://wikimili.com/en/Last_Ninja_3)
