---
permalink: /sms/
layout: post
title: Sega Master System
recommend: sms
recommendTitle: All SMS Posts
editlink: ../categories/consoles/SegaMasterSystem.md
console: 'sms'
consoleimage: /public/consoles/Sega - Master System.png
thumbnail: /public/consoles/Sega - Master System.png
breadcrumbs:
  - name: Home
    url: /
  - name: Consoles
    url: /
  - name: Sega Master System
    url: #
---

# Developer Interviews

## US Gold Interview
SMS Power has re-posted an interview from **Zero** magazine issue 7 where they interview the game developers at **US Gold** on developing the games Impossible Mission and Gauntlet.

Apparently Impossible Mission for the Sega Master System will be on a 128K cartridge which is comprised of:
* 16K Code (Z80 Machine Code)
* 70K Graphics
* 20K Sound

For development hardware they used an ordinary PC with Z80 assembler connected to a Sega Master System via a **Z80 Probe** which plugs into the CPU slot on the motherboard (instead of the CPU). It also mentions that they use RAM to hold the game data instead of a ROM Chip, so predumably there is some interface between the PC and the RAM chip to be able to write the game data to it. It mentions that this is fast but as as fast as PDS which is another Master System development kit.

In this same interview they comment on Japanese Sega Game developers:
> The often dubious quality of some of the Sega games is down to the strange programming habits of the Japanese. Generally there are around six people working on a game for a year. It's the way developers recruit programmers that is bizarre; they put an ad in the local rag asking for anyone interested in computing to contact them. The developers then train the new recruits and get them to join a team of novices to start work on a game. Established programmers aren't even considered.

It is a rather odd statement to make, almost sounds like one of the developers was salty about not being recruited for a Japanese Game developer...

You can read the full interview here:
* [Zero - Issue 07 - Stay A While... - Articles - SMS Power](https://www.smspower.org/Articles/Zero-Issue07-StayAWhile)

---
# Hardware

## Development Kit Hardware
{% include link-to-other-post.html post="/hardware/devkits/" description="For more information on Master System Development Hardware check out this post." %}

## Retail SMS Hardware
For an in-depth look at the SMS Retail hardware architecture check out the excellent post by **Copetti.org**:
{% include link-to-other-site.html url="https://www.copetti.org/writings/consoles/master-system/" description="Copetti.org has an excellent tear down of the SMS Hardware and how it works" image="/public/consoles/Sega Master System.png" title="Sega Master System (SMS) Architecture - A Practical Analysis" %}

---
# Software Development Kit
Officially SEGA didn't provide much to game developers and expected them to create their own development toolchain, however they did provide the following documentation:
* **Sega Mk3 Hardware Reference Manual (Rev1)** - The Official Sega Mark III Reference Manual, it contains code snippets for accessing the hardware including add-ons such as the Gun controller

It would be up to the game developers to find their own Z80 Assembler and Linker and write any common library routines for drawing graphics or reading input.

---
# All Posts

<div>

{% include console.html %}
  
</div>
