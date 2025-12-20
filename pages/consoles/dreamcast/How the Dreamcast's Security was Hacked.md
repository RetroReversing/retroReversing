---
layout: post
tags: 
- dreamcast
- hardware
- cracking
- sega
title: How the Dreamcast's Security was Hacked (MIL-CD)
thumbnail: /public/consoles/Sega Dreamcast.png
image: /public/images/dreamcast/Dreamcast Security and Piracy.jpg
twitterimage: https://www.retroreversing.com/public/images/dreamcast/Dreamcast Security and Piracy.jpg
permalink: /How-the-Dreamcast-Security-was-Hacked
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Dreamcast
    url: /dreamcast
  - name: How the Dreamcast's Security was Hacked (MIL-CD)
    url: #
videocarousel:
  - title: SEGA HELPED PIRATES?! - The Story of echelon.txt
    image: https://img.youtube.com/vi/_x5a0GcbweI/maxresdefault.jpg
    youtube: '_x5a0GcbweI'
recommend: 
  - dreamcast
  - sega
references:
- MrMario2011
editlink: /consoles/dreamcast/How the Dreamcast's Security was Hacked.md
updatedAt: '2020-06-27'
---


## History of Dreamcast Hacking
[Neperos](https://www.neperos.com/article/p5rxdje14b48db27) hosts an article (originally from *Retro Revival* magazine) that chronicles the rise of the Sega Dreamcast homebrew scene. The piece details how the "MIL-CD" exploit and the release of the **Utopia Boot Disc** bypassed the console's copy protection, paving the way for homebrew development tools like **KallistiOS** and the porting of emulators and media players such as **DCDivX** and **ScummVM**.

{% include link-to-other-site.html url="https://www.neperos.com/article/p5rxdje14b48db27" description="A retrospective on the technical origins of the Dreamcast homebrew scene, covering the discovery of the MIL-CD backdoor, the release of the Utopia bootloader, and the evolution of open-source development kits." image="https://i.ytimg.com/vi/YbYY7JE4M1I/hqdefault.jpg" title="History of Dreamcast Homebrew" %}

## Bleemcasting: An Interview With Bleemcast! Developer Randy Linden
[The Dreamcast Junkyard](https://www.thedreamcastjunkyard.co.uk/2019/10/bleemcasting-interview-with-bleemcast.html) speaks with Randy Linden, the core developer behind the Bleemcast! emulator. The interview covers the technical challenges of porting the PC emulator to the Dreamcast's SH-4 architecture, the reverse engineering of the MIL-CD format to bypass Sega's licensing, and the history behind the unreleased "BleemPod" hardware.

{% include link-to-other-site.html url="https://www.thedreamcastjunkyard.co.uk/2019/10/bleemcasting-interview-with-bleemcast.html" description="Randy Linden shares insights into the development of Bleemcast!, discussing the low-level optimizations required for the Dreamcast hardware, the legal pressures from Sony, and the unreleased peripherals intended for the system." image="https://generated.vusercontent.net/placeholder/bleemcast-interview.jpg" title="Bleemcasting: Interview With Randy Linden" %}

## Did the Dreamcast not have anti-piracy measures?
It is a common misconception that the reason the Dreamcast failed was because it has no prevention against playing copied games... Well, that wasn't entirely true. In fact it had one of the most sophisticated forms of copy protection at time time. With just one little oversight.... the MIL-CD format.

You can't simply copy the contents of a Dreamcast GD-ROM to a CD-R and expect it to boot on an unmodified retail Dreamcast. 

There is copy protection in place to prevent this. The reason you can play burned games is because the ISO files you find online have been modified to take advantage of the **MIL-CD** exploit. Unlike games, MIL-CDs have no copy protection so the Dreamcast will boot them without questioning authenticity.

## How are Dreamcast games able to fit on a CD-R?
The dreamcast actually used **GD-ROM** discs that only developers had access to writing such discs in a manufacturing setting. 
The **GD-ROM** could fit about 1GB of data unlike the CD-R that had a maximum size of 700MB.

Not all games used the full 1GB of space however so many games were in fact less than 700MB and could be used without removing any content.

For games that didn't fit onto a CD-R, they would rip out or downsample some of the content (usually FMV's or background music).

## How were CD-R versions of Dreamcast games created?
It was an incredibly involved process to turn a GD-ROM game into a bootable CD-R. But already made CD-R games were very easy to copy, so as soon as the process has been done once, anyone could clone that CD-R to distribute the game.



