---
layout: post
permalink: /ios
title: iOS
breadcrumbs:
  - name: Home
    url: /
  - name: iOS
    url:
editlink: ../categories/iOS.md
_image: /public/images/iOS.jpg
_twitterimage: https://www.retroreversing.com/public/images/iOS.jpg
tags:
  - ios
recommend:
  - ios
  - introduction
updatedAt: '2026-10-28'
redirect_from:
  - /iPhone
  - /iPad
  - /iPod
---

# iOS Introduction (iPhone OS)
The first iPhone shipped on June 29, 2007 with what later became known as iPhone OS 1.0 [^1]. Apple renamed the system iOS in 2010; this page uses that name for the platform as a whole. Early iPhone games pose a particular preservation problem: their code, operating-system APIs and distribution requirements all have to line up before a surviving app will run.

## History of iOS
[Apple Explained](https://www.youtube.com/watch?v=l7eucqQMXDw) follows the operating system from "Project Purple" through iOS 16.

The video details critical milestones in the platform's history, including the pivot from web apps to a native SDK, the architectural changes required for multitasking, the controversial shift away from Google services (Maps/YouTube), and the major interface overhaul introduced in iOS 7.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l7eucqQMXDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## History of the App Store
[Apple Explained](https://www.youtube.com/watch?v=t_CDefOuAww) traces the move from web apps to the native SDK and App Store, then follows later changes such as in-app purchases and store rules.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_CDefOuAww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Steve Jobs Introduces the App Store (2008)
[gamingandtechnology](https://www.youtube.com/watch?v=xo9cKe_Fch8) archives the historic iPhone SDK Keynote where **Steve Jobs** officially unveils the **App Store**. The presentation outlines the ecosystem's distribution model, detailing how developers can reach every user wirelessly (or via iTunes), the 70/30 revenue split, and the handling of free applications. Jobs emphasizes the centralized update mechanism and the curated nature of the platform to prevent malicious software, establishing the closed-garden software distribution model standard in modern mobile computing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xo9cKe_Fch8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# Reverse Engineering iOS Games

## touchHLE: High-Level Emulator for Early iOS Games
**touchHLE** is an open-source high-level emulator (HLE) written in **Rust** for selected 32-bit games from iPhone OS 2.x, 3.x and iOS 4.0.x. It runs on Windows, macOS and Android, but its developers caution that most apps from those years do not yet work [^2].

Started by **hikari-no-yume**, the project runs app code in an emulated ARM CPU and supplies its own implementations of Apple frameworks such as UIKit and OpenGL ES, instead of booting iPhone OS [^2]. Check the version-specific [compatibility database](https://appdb.touchhle.org/) before treating a listed game as playable.

{% include link-to-other-site.html url="https://github.com/touchHLE/touchHLE" description="hikari-no-yume and contributors have developed touchHLE, a High Level Emulator written in Rust that runs classic iPhone OS 2.x/3.x apps on modern systems by reimplementing the OS frameworks." title="touchHLE: High-level emulator for iPhone OS apps" %}

The compatibility database records community reports, which the project warns may be outdated or inaccurate [^2].

### Driver iOS (2009) on touchHLE Emulator
[VortexStory](https://www.youtube.com/watch?v=dviPm_e33pk) showcases the 2009 Gameloft iOS port of *Driver*, now playable via the high-level emulator touchHLE. The video explores this previously "lost" mobile version through gameplay of the Car Park tutorial and Pursuit mode, demonstrating how file modifications can enable controller support and remove on-screen touch overlays.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dviPm_e33pk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Popular iOS 2.x Games (ARMv6) (2008+)
iPhone OS 2 brought the App Store and a wave of commercial games. The list below is a period snapshot, with review scores from the 2009 *iPhone Games Directory* bookazine; it is not a touchHLE compatibility list.

### Can an ARMv6 iPhone game run on a later device?
Yes, an ARMv6 app does not inherently require an ARMv6 phone. Apple's ARMv7 programming documentation describes compatibility between apps built for the ARMv6 and ARMv7 environments, while noting that some features differ [^3]. The later hard cutoff is different: **iOS 11 no longer launches 32-bit apps**, regardless of whether they contain ARMv6, ARMv7 or both [^4]. Other API or distribution constraints may still prevent an older game from running.

The games in this list appeared in the iPhone OS 2 era; individual versions may have different minimum OS requirements. The reviews come from *iPhone Games Directory*, volume 001 (2009).

Name | Developer | Review out of 5 | Description
---|---|---|---
Airport Mania | Reflexive Entertainment | 4/5 
[Assassin's Creed: Altaïr's Chronicles (2009)](https://appdb.touchhle.org/apps/413) | Gameloft | 4/5
[Blades of Fury](https://appdb.touchhle.org/apps/471) | Gameloft | 5/5
[Doom Resurrection (2009)](https://appdb.touchhle.org/apps/278) | ID Software | 4/5
Duke Nukem 3D | MachineWorks Northwest LLC | 3/5
[Crystal Defenders](https://appdb.touchhle.org/apps/77) | Square Enix	| 3/5
[Ferrari GT: Evolution (2008)](https://appdb.touchhle.org/apps/116) | Gameloft | 4/5
[Flight Control](https://appdb.touchhle.org/apps/650) | Firemint | 5/5
Flight Of The Amazon Queen | iPhSoft | 3/5
[Hero of Sparta](https://appdb.touchhle.org/apps/452) | Gameloft | 4/5
[Kroll](https://appdb.touchhle.org/apps/491) | Digital Legends Entertainment | 3/5
[Lemonade Tycoon (2009)](https://appdb.touchhle.org/apps/53) | EA | 4/5
[Metal Gear Solid Touch (2009)](https://appdb.touchhle.org/apps/122) | Kojima Productions | 4/5
[Modern Combat: Sandstorm (2009)](https://appdb.touchhle.org/apps/367) | Gameloft | 4/5
[Paper Toss (2009)](https://appdb.touchhle.org/apps/318) | Backflip Studios | 4/5
[Pocket God (2009)](https://appdb.touchhle.org/apps/306) | Bolt Creative | 4/5
[Resident Evil 4: Mobile Edition](https://appdb.touchhle.org/apps/91) | Capcom | 3/5
[Rolando (2008)](https://appdb.touchhle.org/apps/720) | HandCircus | 5/5
[SimCity](https://appdb.touchhle.org/apps/250) | EA | 4/5
Space Ace | Dragon's Lair LLC | 2/5
The Secret Of Monkey Island Special Edition | LucasArts | 5/5
[The Sims 3 (2009)](https://appdb.touchhle.org/apps/263) | EA | 4/5

### Popular iOS 3.x Games (2009+)
The reviews of these games come from the Bookazine **iPhone Games Directory** Volume 001 from 2009 to give time-period accurate reviews.

Name | Developer | Review out of 5
---|---|---
[Command & Conquer: Red Alert](https://appdb.touchhle.org/) | EA | 3/5
[Devil Hunter X](https://appdb.touchhle.org/apps/774) | Corefran technologies Ltd | 
[Final Fantasy (2010)](https://appdb.touchhle.org/apps/290) | Square Enix | 

### Popular iOS 5.x Games (2011+)
The best way to check for recommended iOS 5.x games is to check out the Bookazine **iPad and iPhone Games Directory** Volume 1 from 2011 as it gives a great snapshot of exactly what was popular back when iOS 5 was the latest iOS.

---
## Frida: Dynamic Instrumentation Toolkit
**Frida**, created by **Ole André Vadla Ravnås**, injects scripts into a running process so a reverse engineer can trace calls and inspect behaviour without rebuilding the app. It supports iOS as well as desktop and other mobile platforms.

{% include link-to-other-site.html url="https://frida.re/" description="Frida is a free, scriptable, and portable dynamic instrumentation toolkit that lets you inject JavaScript into native apps to debug, trace, and reverse engineer software on multiple operating systems." image="https://frida.re/img/logotype.svg" title="Frida: A World-Class Dynamic Instrumentation Toolkit" %}

### Frida on iOS
[Frida](https://frida.re/docs/ios/) provides the official documentation for deploying the Frida dynamic instrumentation toolkit on iOS devices. The guide details the setup process for both jailbroken environments (via Cydia/Sileo) and non-jailbroken devices (using the Frida Gadget), enabling users to inject JavaScript, trace functions, and manipulate application behavior at runtime.

{% include link-to-other-site.html url="https://frida.re/docs/ios/" description="The official Frida guide for iOS explains how to set up the environment on both jailbroken and non-jailbroken devices to perform dynamic instrumentation and function tracing." image="https://frida.re/img/logotype.svg" title="Frida: iOS Documentation" %}

### friman: Frida Version Management Tool
**Thelicato** has developed **friman**, a Python-based utility that simplifies the management of multiple Frida versions, which is necessary due to compatibility issues across different devices and target projects. 

The tool enables seamless installation, local tracking, and switching of versions, along with specific helpers for downloading `frida-gadget` and `frida-server` assets, including a convenience utility for pushing the server to Android devices.

{% include link-to-other-site.html url="https://github.com/thelicato/friman" description="Python tool designed to manage and switch between multiple Frida versions, including helpers for downloading and deploying **frida-server** and gadget binaries." image="https://opengraph.githubassets.com/1/thelicato/friman" title="**friman**: Frida version management tool" %}

---
## File Formats

### QLCARFiles: Assets.car Viewer for macOS
The **cgnkrz** repository provides **QLCARFiles**, a native macOS application built for the static analysis and inspection of Apple's compiled **Assets.car** files from iOS and macOS applications. This tool is valuable for reverse engineering as it offers a graphical interface to browse and view all bundled assets-including images at multiple scales, colors, and embedded data-and allows for easy extraction to disk. The project explicitly credits and builds upon the technical reverse engineering work of Timac on the underlying `.car` file format.

{% include link-to-other-site.html url="https://github.com/cgnkrz/QLCARFiles" description="cgnkrz's QLCARFiles is a native macOS application that enables reverse engineers to visually browse, view, and extract bundled assets (images, colors, data) from iOS and macOS Assets.car files." image="https://opengraph.githubassets.com/1/cgnkrz/QLCARFiles" title="QLCARFiles: A native macOS app to view, explore, and extract assets from .car files" %}


---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platforms="iOS|iPhone" %}

---
# References
[^1]: [iPhone OS 1: The Beginning of an Era - Low End MacLow End Mac](https://lowendmac.com/2017/iphone-os-1-the-beginning-of-an-era/?utm_source=chatgpt.com)
[^2]: [touchHLE README and project scope](https://github.com/touchHLE/touchHLE#touchhle-high-level-emulator-for-early-ios-apps)
[^3]: [Apple Developer, Writing ARMv7 Code for iOS](https://developer.apple.com/documentation/xcode/writing-armv7-code-for-ios)
[^4]: [Apple Developer, 64-bit Apps on iOS 11](https://developer.apple.com/news/?id=06282017b)
