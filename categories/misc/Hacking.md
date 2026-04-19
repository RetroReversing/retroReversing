---
layout: post
permalink: /hacking
category: industry
title: Hacking
breadcrumbs:
  - name: Home
    url: /
editlink: ../categories/misc/Hacking.md
recommend: 
 - industry
 - introduction
 - pc
tags:
 - industry
 - hacking
---

# Hacking History

## 1988 - MORRIS: Earth's First Computer Worm
[Disrupt](https://www.youtube.com/watch?v=7BRTixIDzzE) has published a retrospective on the Morris Worm, detailing the specific vectors exploited by the 99 lines of code written by **Robert Tappan Morris** (RTM) to map the early internet, and how a mathematical error led to global system overloads.
<iframe width="560" height="315" src="https://www.youtube.com/embed/7BRTixIDzzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Technical Details & Exploitation Vectors:
* **Buffer Overflow (Finger Protocol):** The vulnerability was a classic stack-based buffer overflow. The `fingerd` daemon used the C standard library function `gets()`, which reads input without checking buffer boundaries. The worm sent a single, carefully crafted 536-byte string (including shellcode) that overflowed the 512-byte buffer. This overwrote the return address on the stack, redirecting the execution flow to the worm's malicious code.
* **Sendmail Debug Mode:** The worm exploited a known `DEBUG` mode in the `sendmail` program, which was often left enabled on production systems. By issuing the `DEBUG` command, the worm could directly execute arbitrary shell commands. It used this to pipe a small C script to the shell, which then compiled itself and fetched the main worm binaries..
* **Socket Creation:** Upon entering a machine, it establishes a socket (described as a PO box) to receive data.
* **Payload Delivery:** It sends three packages to the established socket: a Sun-3 binary version of the worm, a VAX version, and the source code, ensuring compatibility with the recipient machine. The original worm then eliminates itself.
* **Propagation Mechanism (The 1-in-7 Bug):** To prevent system admins from using a false flag to stop the worm, Morris programmed it to disregard the "already infected" flag 1 out of every 7 times. This caused the worm to repeatedly infect and overload systems rather than just acting as a background measuring stick.

Mitigation & Legacy:
* **Patches:** Berkeley faculty released patches 1 and 2 to stop `sendmail` from accepting the debug command and compiling with the worm. Patch 3 altered `finger` so it now uses `fgets` instead, patching the buffer overflow.
* **Legal Precedent:** The author was the first person in U.S. history indicted under the newly defined Computer Fraud and Abuse Act.

---
## 2000 - ILOVEYOU Virus: Technical Breakdown and Demonstration
[NationSquid](https://www.youtube.com/watch?v=NZDiQczOsdc) features a technical overview and demonstration of the ILOVEYOU worm, focusing on its VBScript architecture and rapid propagation through the MAPI interface. The video details how the malware manipulated files and utilized social engineering to achieve widespread system infections and data loss.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NZDiQczOsdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 2005 - Samy Worm: The Myspace XSS Exploit
[Motherboard](https://www.youtube.com/watch?v=DtnuaHl378M) features an interview with **Samy Kamkar** detailing the infamous 2005 "Samy Worm" that took down Myspace. Kamkar explains the technical mechanics of the Cross-Site Scripting (XSS) vulnerability that allowed the worm to exponentially propagate by automatically adding him as a friend and infecting visiting profiles. The video also covers the aftermath, including the site-wide outage and the legal repercussions that led to a three-year ban from computer use.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DtnuaHl378M" frameborder="0" allowfullscreen></iframe>

---
# Hacking Random Numbers

## How hackers reverse Math.random()
[Zanzlanz](https://www.youtube.com/watch?v=XDsYPXRCXAs) has a video that explores the mechanics and vulnerabilities of pseudo-random number generators (PRNGs), focusing on Linear Congruential Generators (LCGs) and Xorshift algorithms. It demonstrates practical techniques for reverse engineering these functions to predict future values and recover previous states, illustrated by exploiting Flash-based games like Minesweeper.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XDsYPXRCXAs" frameborder="0" allowfullscreen></iframe>