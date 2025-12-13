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
_updatedAt: 2025-12-07
redirect_from:
  - /iPhone
  - /iPad
  - /iPod
---

# iOS Introduction (iPhone OS)
The first version of iOS (retroactively called iPhone OS 1.0 after the launch of 2.0) was released on June 29, 2007, alongside the first iPhone [^1].
It was renamed iOS in 2010 with the release of iOS 4 which is what this page will refer to it as.

## History of iOS
[Apple Explained](https://www.youtube.com/watch?v=l7eucqQMXDw) presents a comprehensive documentary covering the technical and visual evolution of Apple's mobile operating system, ranging from the secretive "Project Purple" development phase to the release of iOS 16. 

The video details critical milestones in the platform's history, including the pivot from web apps to a native SDK, the architectural changes required for multitasking, the controversial shift away from Google services (Maps/YouTube), and the major interface overhaul introduced in iOS 7.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l7eucqQMXDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## History of the App Store
[Apple Explained](https://www.youtube.com/watch?v=t_CDefOuAww) documents the pivotal shift in mobile computing history from Steve Jobs' initial vision of web-based applications to the creation of the native iOS App Store. The video details the internal debates that led to the release of the iPhone SDK in 2008, the subsequent explosion of the "app economy," and major platform milestones like the introduction of In-App Purchases (IAP) and the "Walled Garden" censorship controversies.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_CDefOuAww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Steve Jobs Introduces the App Store (2008)
[gamingandtechnology](https://www.youtube.com/watch?v=xo9cKe_Fch8) archives the historic iPhone SDK Keynote where **Steve Jobs** officially unveils the **App Store**. The presentation outlines the ecosystem's distribution model, detailing how developers can reach every user wirelessly (or via iTunes), the 70/30 revenue split, and the handling of free applications. Jobs emphasizes the centralized update mechanism and the curated nature of the platform to prevent malicious software, establishing the closed-garden software distribution model standard in modern mobile computing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xo9cKe_Fch8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# Reverse Engineering iOS Games

## touchHLE: High-Level Emulator for Early iOS Games
**touchHLE** is an open-source high-level emulator (HLE) written in **Rust** that runs classic apps from the early iPhone OS era (specifically versions 2.x and 3.x) on modern platforms like Windows, macOS, and Android. 

Created by **hikari-no-yume**, the project focuses on preserving early mobile gaming history by dynamically recompiling ARM code and reimplementing Apple's system frameworks (such as UIKit and OpenGL ES) rather than emulating the full hardware. 
This approach allows titles like *Super Monkey Ball* and *Crash Bandicoot Nitro Kart 3D* to run with enhanced performance and resolution scaling.

{% include link-to-other-site.html url="https://github.com/touchHLE/touchHLE" description="hikari-no-yume and contributors have developed touchHLE, a High Level Emulator written in Rust that runs classic iPhone OS 2.x/3.x apps on modern systems by reimplementing the OS frameworks." title="touchHLE: High-level emulator for iPhone OS apps" %}

### Driver iOS (2009) on touchHLE Emulator
[VortexStory](https://www.youtube.com/watch?v=dviPm_e33pk) showcases the 2009 Gameloft iOS port of *Driver*, now playable via the high-level emulator touchHLE. The video explores this previously "lost" mobile version through gameplay of the Car Park tutorial and Pursuit mode, demonstrating how file modifications can enable controller support and remove on-screen touch overlays.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dviPm_e33pk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Frida: Dynamic Instrumentation Toolkit
**Frida** is a world-class dynamic instrumentation framework created by **Ole André Vadla Ravnås** that allows developers and reverse engineers to inject custom scripts into black-box processes. It enables users to hook functions, trace APIs, and manipulate application behavior in real-time across a wide range of platforms, including Windows, macOS, Linux, iOS, Android, and QNX, without requiring source code or recompilation.

{% include link-to-other-site.html url="https://frida.re/" description="Frida is a free, scriptable, and portable dynamic instrumentation toolkit that lets you inject JavaScript into native apps to debug, trace, and reverse engineer software on multiple operating systems." image="https://frida.re/img/logotype.svg" title="Frida: A World-Class Dynamic Instrumentation Toolkit" %}

### Frida on iOS
[Frida](https://frida.re/docs/ios/) provides the official documentation for deploying the Frida dynamic instrumentation toolkit on iOS devices. The guide details the setup process for both jailbroken environments (via Cydia/Sileo) and non-jailbroken devices (using the Frida Gadget), enabling users to inject JavaScript, trace functions, and manipulate application behavior at runtime.

{% include link-to-other-site.html url="https://frida.re/docs/ios/" description="The official Frida guide for iOS explains how to set up the environment on both jailbroken and non-jailbroken devices to perform dynamic instrumentation and function tracing." image="https://frida.re/img/logotype.svg" title="Frida: iOS Documentation" %}

### **friman**: Frida Version Management Tool
**Thelicato** has developed **friman**, a Python-based utility that simplifies the management of multiple Frida versions, which is necessary due to compatibility issues across different devices and target projects. 

The tool enables seamless installation, local tracking, and switching of versions, along with specific helpers for downloading `frida-gadget` and `frida-server` assets, including a convenience utility for pushing the server to Android devices.

{% include link-to-other-site.html url="https://github.com/thelicato/friman" description="Python tool designed to manage and switch between multiple Frida versions, including helpers for downloading and deploying **frida-server** and gadget binaries." image="https://opengraph.githubassets.com/1/thelicato/friman" title="**friman**: Frida version management tool" %}

---
## File Formats

### QLCARFiles: Assets.car Viewer for macOS
The **cgnkrz** repository provides **QLCARFiles**, a native macOS application built for the static analysis and inspection of Apple's compiled **Assets.car** files from iOS and macOS applications. This tool is valuable for reverse engineering as it offers a graphical interface to browse and view all bundled assets—including images at multiple scales, colors, and embedded data—and allows for easy extraction to disk. The project explicitly credits and builds upon the technical reverse engineering work of Timac on the underlying `.car` file format.

{% include link-to-other-site.html url="https://github.com/cgnkrz/QLCARFiles" description="cgnkrz's QLCARFiles is a native macOS application that enables reverse engineers to visually browse, view, and extract bundled assets (images, colors, data) from iOS and macOS Assets.car files." image="https://opengraph.githubassets.com/1/cgnkrz/QLCARFiles" title="QLCARFiles: A native macOS app to view, explore, and extract assets from .car files" %}


---
# References
[^1]: [iPhone OS 1: The Beginning of an Era - Low End MacLow End Mac](https://lowendmac.com/2017/iphone-os-1-the-beginning-of-an-era/?utm_source=chatgpt.com)